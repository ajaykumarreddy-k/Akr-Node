#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { cpSync } from "fs";
import chalk from "chalk";
import readline from "readline";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const LEFT_W = 64; // inner width of left column
const RIGHT_W = 20; // inner width of right column
const FULL_W = LEFT_W + 1 + RIGHT_W - 2; // inner width for full-span rows (logo)

function row(left = "", right = "") {
  return "│ " + left.padEnd(LEFT_W - 2) + " │ " + right.padEnd(RIGHT_W - 2) + " │";
}
function fullRow(content = "") {
  return "│ " + content.padEnd(FULL_W) + " │";
}
function center(text, width) {
  const pad = width - text.length;
  const l = Math.floor(pad / 2);
  const r = pad - l;
  return " ".repeat(Math.max(l, 0)) + text + " ".repeat(Math.max(r, 0));
}
function topBorderFull() {
  return "┌" + "─".repeat(LEFT_W + 1 + RIGHT_W) + "┐";
}
function topBorder() {
  return "├" + "─".repeat(LEFT_W) + "┬" + "─".repeat(RIGHT_W) + "┤";
}
function midBorder() {
  return "├" + "─".repeat(LEFT_W) + "┼" + "─".repeat(RIGHT_W) + "┤";
}
function bottomBorder() {
  return "└" + "─".repeat(LEFT_W) + "┴" + "─".repeat(RIGHT_W) + "┘";
}

const LOGO = [
  " █████╗ ██╗  ██╗██████╗ ",
  "██╔══██╗██║ ██╔╝██╔══██╗",
  "███████║█████╔╝ ██████╔╝",
  "██╔══██║██╔═██╗ ██╔══██╗",
  "██║  ██║██║  ██╗██║  ██║",
  "╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝",
];

let currentDashboardArgs = null;
let isInteractive = true;

// Enter alternate screen buffer and hide cursor
if (process.stdout.isTTY) {
  process.stdout.write("\x1b[?1049h\x1b[?25l");
}

function renderDashboard(args) {
  currentDashboardArgs = args;

  if (isInteractive) {
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);
  }

  if (process.stdout.isTTY && (process.stdout.columns < 87 || process.stdout.rows < 22)) {
    const msg = chalk.red(`❌ Terminal too small (${process.stdout.columns}x${process.stdout.rows}). Please resize to at least 87x22.`);
    process.stdout.write(msg + "\n");
    return;
  }

  const {
    projectName = "-",
    template = "-",
    status = "Waiting",
    version = "1.0.3",
    progress = 0,
    infoRows = null,
  } = args;

  const nextSteps = [`cd ${projectName}`, "bun install", "bun run dev"];
  const barCharWidth = LEFT_W - 2 - 7;
  const filled = Math.round((progress / 100) * barCharWidth);
  const barInner = "█".repeat(filled) + " ".repeat(Math.max(barCharWidth - filled, 0));
  const percentStr = `${progress}%`.padStart(4, " ");
  const bar = `[${barInner}] ${percentStr}`;

  const rows =
    infoRows || [
      [`Project : ${projectName}`, nextSteps[0]],
      [`Template: ${template}`, nextSteps[1]],
      [`Status  : ${status}`, nextSteps[2]],
    ];

  const lines = [];
  lines.push(topBorderFull());
  for (const l of LOGO) lines.push(chalk.hex("#ff3333")(fullRow(center(l, FULL_W))));
  lines.push(topBorder());
  lines.push(row("Starter Templates", center("Version", RIGHT_W - 2)));
  lines.push(row("", center(`v${version}`, RIGHT_W - 2)));
  lines.push(midBorder());
  lines.push(row("", center("Next Steps", RIGHT_W - 2)));
  for (const [l, r] of rows) lines.push(row(l, r));
  lines.push(row("", ""));
  lines.push(row("Progress", ""));
  lines.push(row(bar, ""));
  lines.push(bottomBorder());
  const output = lines.join("\n") + "\n";
  process.stdout.write(output);
}

// Wire the keypress translator ONCE, globally. Calling emitKeypressEvents
// again inside every prompt (as before) double/triple-wires the stream on
// Bun (Node dedupes this internally, Bun does not) — that's what was
// causing every keystroke to redraw the box several times over.
if (process.stdin.isTTY) {
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);
}
if (process.stdout.isTTY) {
  process.stdout.on("resize", () => {
    if (currentDashboardArgs) renderDashboard(currentDashboardArgs);
  });
}
process.stdin.resume();

// --- Custom raw-mode text input, rendered as a live row inside the table ---
function promptText({ label, defaultValue, draw }) {
  return new Promise((resolve) => {
    let value = "";

    const repaint = () => draw(`${label}: ${value}█`);
    repaint();

    const onKey = (str, key) => {
      if (key.ctrl && key.name === "c") {
        cleanup();
        if (process.stdout.isTTY) process.stdout.write("\x1b[?1049l\x1b[?25h");
        process.exit(0);
      } else if (key.name === "return") {
        cleanup();
        resolve(value.trim() || defaultValue);
        return;
      } else if (key.name === "backspace") {
        value = value.slice(0, -1);
      } else if (str && !key.ctrl && !key.meta) {
        value += str;
      }
      repaint();
    };

    function cleanup() {
      process.stdin.removeListener("keypress", onKey);
    }
    process.stdin.on("keypress", onKey);
  });
}

// --- Custom raw-mode select, rendered as live rows inside the table ---
function promptSelect({ choices, draw }) {
  return new Promise((resolve) => {
    let idx = Math.max(
      choices.findIndex((c) => c.default),
      0
    );

    const repaint = () => draw(idx);
    repaint();

    const onKey = (str, key) => {
      if (key.ctrl && key.name === "c") {
        cleanup();
        if (process.stdout.isTTY) process.stdout.write("\x1b[?1049l\x1b[?25h");
        process.exit(0);
      } else if (key.name === "up") {
        idx = (idx - 1 + choices.length) % choices.length;
      } else if (key.name === "down") {
        idx = (idx + 1) % choices.length;
      } else if (key.name === "return") {
        cleanup();
        resolve(choices[idx]);
        return;
      }
      repaint();
    };

    function cleanup() {
      process.stdin.removeListener("keypress", onKey);
    }
    process.stdin.on("keypress", onKey);
  });
}

const templatesPath = path.resolve(__dirname, "../../templates/templates.json");
const templates = JSON.parse(fs.readFileSync(templatesPath, "utf8"));

// --- Step 1: project name, typed live inside the table ---
const projectName = await promptText({
  label: "Project Name",
  defaultValue: "akr-app",
  draw: (line) =>
    renderDashboard({
      status: "Waiting for Project Name",
      progress: 10,
      infoRows: [[line, "cd my-app"]],
    }),
});

// --- Step 2: template, arrow-key selected live inside the table ---
const nextSteps = [`cd ${projectName}`, "bun install", "bun run dev"];
const templateNames = templates.map((t) => (t.default ? `${t.name} (Default)` : t.name));
const template = await promptSelect({
  choices: templates.map((t) => ({
    name: t.default ? `${t.name} (Default)` : t.name,
    id: t.id,
  })),
  draw: (idx) => {
    const leftLines = [
      `Project : ${projectName}`,
      `Template:`,
      ...templateNames.map((name, i) => {
        if (i === idx) {
          return chalk.cyan(`  ❯ ${name}`.padEnd(LEFT_W - 2));
        }
        return `    ${name}`;
      }),
      ``,
      `Status  : Use ↑/↓ + Enter`
    ];

    const rows = leftLines.map((left, i) => [left, nextSteps[i] || ""]);

    renderDashboard({
      projectName,
      status: "Selecting Template",
      progress: 35,
      infoRows: rows,
    });
  },
});

// --- Step 3: ask for skills ---
const addSkills = await promptSelect({
  choices: [
    { name: "Yes", value: true, default: true },
    { name: "No", value: false },
  ],
  draw: (idx) => {
    const leftLines = [
      `Project : ${projectName}`,
      `Template: ${template.name}`,
      `Add AKR Design Skills?`,
      idx === 0 ? chalk.cyan(`  ❯ Yes`.padEnd(LEFT_W - 2)) : `    Yes`,
      idx === 1 ? chalk.cyan(`  ❯ No`.padEnd(LEFT_W - 2)) : `    No`,
      ``,
      `Status  : Use ↑/↓ + Enter`
    ];

    const rows = leftLines.map((left, i) => [left, nextSteps[i] || ""]);

    renderDashboard({
      projectName,
      status: "Configuring Skills",
      progress: 50,
      infoRows: rows,
    });
  },
});

renderDashboard({
  projectName,
  template: template.name,
  status: "Creating Project",
  progress: 70,
});

const templatePath = path.resolve(__dirname, "../../templates", template.id);
cpSync(templatePath, projectName, { recursive: true });

if (addSkills.value) {
  const skillPath = path.resolve(__dirname, "../../Skill-Perfection");
  cpSync(skillPath, path.join(projectName, "Skill-Perfection"), { recursive: true });
}

isInteractive = false;
if (process.stdout.isTTY) {
  process.stdout.write("\x1b[?1049l\x1b[?25h"); // Exit alternate screen and show cursor
}

// Print the final dashboard state normally so it stays in the user's terminal history
renderDashboard({
  projectName,
  template: template.name,
  status: "Complete ✓",
  progress: 100,
});

console.log(chalk.green("\n✓ Project Created Successfully\n"));

if (process.stdin.isTTY) process.stdin.setRawMode(false);
process.stdin.pause();
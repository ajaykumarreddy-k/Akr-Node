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

let lastRenderLines = 0;

// Renders logo + table as ONE continuous box. `infoRows` is an array of
// [left, right] pairs that fill the info section, so the live input /
// selection can be drawn as real rows inside the same border.
function renderDashboard({
  projectName = "-",
  template = "-",
  status = "Waiting",
  version = "1.0.3",
  progress = 0,
  infoRows = null,
}) {
  if (lastRenderLines > 0) {
    readline.moveCursor(process.stdout, 0, -lastRenderLines);
    readline.clearScreenDown(process.stdout);
  }

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
      [`Theme   : Dark`, nextSteps[2]],
      [`Status  : ${status}`, ""],
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
  lastRenderLines = lines.length;
}

// Wire the keypress translator ONCE, globally. Calling emitKeypressEvents
// again inside every prompt (as before) double/triple-wires the stream on
// Bun (Node dedupes this internally, Bun does not) — that's what was
// causing every keystroke to redraw the box several times over.
if (process.stdin.isTTY) {
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);
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
  draw: (idx) =>
    renderDashboard({
      projectName,
      status: "Selecting Template",
      progress: 35,
      infoRows: [
        [`Project : ${projectName}`, nextSteps[0]],
        [`Template: ${templateNames[idx]}`, nextSteps[1]],
        ["Theme   : Dark", nextSteps[2]],
        ["Status  : Use ↑/↓ + Enter", ""],
      ],
    }),
});

renderDashboard({
  projectName,
  template: template.name,
  status: "Creating Project",
  progress: 70,
});

const templatePath = path.resolve(__dirname, "../../templates", template.id);
cpSync(templatePath, projectName, { recursive: true });

renderDashboard({
  projectName,
  template: template.name,
  status: "Complete ✓",
  progress: 100,
});

console.log(chalk.green("\n✓ Project Created Successfully\n"));

if (process.stdin.isTTY) process.stdin.setRawMode(false);
process.stdin.pause();
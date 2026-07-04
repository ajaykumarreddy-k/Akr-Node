#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { cpSync } from "fs";
import chalk from "chalk";
import cliProgress from "cli-progress";
import { input, select } from "@inquirer/prompts";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.clear();

console.log(
  chalk.hex("#ff2d2d").bold(`
 █████╗ ██╗  ██╗██████╗
██╔══██╗██║ ██╔╝██╔══██╗
███████║█████╔╝ ██████╔╝
██╔══██║██╔═██╗ ██╔══██╗
██║  ██║██║  ██╗██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
`)
);

console.log(chalk.white.bold("AKR Starter Project Generator"));
console.log(chalk.gray("────────────────────────────────────────────"));
console.log();

const templatesPath = path.resolve(
  __dirname,
  "../../templates/templates.json"
);

const templates = JSON.parse(
  fs.readFileSync(templatesPath, "utf8")
);

const projectName =
  (await input({
    message: "Project Name",
    default: "akr-app",
  })).trim() || "akr-app";

const template = await select({
  message: "Select Template",
  choices: templates.map((t) => ({
    name: t.default ? `${t.name} (Default)` : t.name,
    value: t,
  })),
});

console.log();

const bar = new cliProgress.SingleBar({
  format: "[{bar}] {percentage}%"
});

bar.start(100, 0);

bar.update(10);

const templatePath = path.resolve(
  __dirname,
  "../../templates",
  template.id
);

bar.update(30);

cpSync(templatePath, projectName, {
  recursive: true,
});

bar.update(60);

bar.update(80);

bar.update(100);

bar.stop();

console.log(chalk.green("\n✓ Project Created Successfully\n"));

console.log(chalk.white(`Template : ${template.name}`));
console.log(chalk.white(`Project  : ${projectName}\n`));

console.log(chalk.cyan("Next Steps:\n"));

console.log(`cd ${projectName}`);
console.log("bun install");
console.log("bun run dev");
console.log();
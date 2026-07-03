#!/usr/bin/env node

import readline from "readline";
import { execSync } from "child_process";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("\n🚀 AKR Starter\n");

rl.question("Project name: ", (projectName) => {
  try {
    const folderName = projectName
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");

    console.log(`\nCreating project '${folderName}'...\n`);

    execSync(
      `git clone https://github.com/ajaykumarreddy-k/Akr-Node.git "${folderName}"`,
      { stdio: "inherit" }
    );

    console.log("\nInstalling dependencies...\n");

    execSync(`cd "${folderName}" && bun install`, {
      stdio: "inherit",
    });

    console.log(`
✅ AKR Project Ready

Next steps:

cd ${folderName}
bun run dev
`);
  } catch (error) {
    console.error("\n❌ Failed:", error.message);
  }

  rl.close();
});
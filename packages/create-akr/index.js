#!/usr/bin/env node

import { input, select, confirm } from '@inquirer/prompts';
import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  console.log(chalk.bold.cyan('\n🚀 AKR Starter\n'));
  console.log(chalk.gray('Build modern React applications instantly.\n'));

  // Step 1: Ask Project Name
  const projectName = await input({
    message: 'Project Name?',
    default: 'portfolio',
    validate: (value) => {
      if (value.trim().length === 0) return 'Project name cannot be empty.';
      const isValid = /^[a-z0-9-_]+$/.test(value);
      return isValid ? true : 'Project name may only include lowercase letters, numbers, dashes, and underscores.';
    }
  });

  // Step 2: Choose Framework
  const framework = await select({
    message: 'Framework?',
    choices: [
      { name: 'React + Vite', value: 'react-vite' },
      { name: 'Next.js', value: 'nextjs' }
    ],
    default: 'react-vite'
  });

  // Step 3: Choose Styling
  const styling = await select({
    message: 'Styling?',
    choices: [
      { name: 'Tailwind CSS', value: 'tailwind' }
    ],
    default: 'tailwind'
  });

  // Step 4: Animation Libraries
  const animations = await select({
    message: 'Animations?',
    choices: [
      { name: 'Both (GSAP + Framer Motion)', value: 'both' },
      { name: 'GSAP', value: 'gsap' },
      { name: 'Framer Motion', value: 'framer' },
      { name: 'None', value: 'none' }
    ],
    default: 'both'
  });

  // Step 5: Install Dependencies
  const installDeps = await confirm({
    message: 'Install dependencies now?',
    default: true
  });

  if (framework === 'nextjs') {
    console.log(chalk.yellow('\n⚠️  Next.js support is coming in v1.1! Falling back to React + Vite for now.\n'));
  }

  const projectDir = path.resolve(process.cwd(), projectName);

  if (fs.existsSync(projectDir)) {
    console.log(chalk.red(`\nDirectory "${projectName}" already exists. Please choose a different name or delete the directory.`));
    process.exit(1);
  }

  console.log();
  const spinner = ora('Creating project...').start();

  try {
    // 1. Copy Template
    const templateDir = path.resolve(__dirname, 'template/react-vite');
    if (!fs.existsSync(templateDir)) {
       spinner.fail(chalk.red('Template directory not found! Make sure to run the build-template script first.'));
       process.exit(1);
    }

    await fs.copy(templateDir, projectDir);
    
    // Rename gitignore to .gitignore
    const gitignorePath = path.join(projectDir, 'gitignore');
    if (fs.existsSync(gitignorePath)) {
      await fs.rename(gitignorePath, path.join(projectDir, '.gitignore'));
    }

    spinner.succeed('Project created successfully.');

    // 2. Adjust package.json
    spinner.start('Configuring project...');
    const packageJsonPath = path.join(projectDir, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = await fs.readJson(packageJsonPath);
      packageJson.name = projectName;
      
      // Adjust dependencies based on animation choices
      if (animations === 'gsap') {
         if (packageJson.dependencies['framer-motion']) delete packageJson.dependencies['framer-motion'];
      } else if (animations === 'framer') {
         if (packageJson.dependencies['gsap']) delete packageJson.dependencies['gsap'];
      } else if (animations === 'none') {
         if (packageJson.dependencies['framer-motion']) delete packageJson.dependencies['framer-motion'];
         if (packageJson.dependencies['gsap']) delete packageJson.dependencies['gsap'];
      }
      
      await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
    }
    spinner.succeed('Project configured.');

    // 3. Install Packages
    if (installDeps) {
      spinner.start('Installing packages...');
      try {
        execSync('bun install', { cwd: projectDir, stdio: 'ignore' });
        spinner.succeed('Packages installed.');
      } catch (err) {
        spinner.fail(chalk.red('Failed to install dependencies with Bun. You might need to install them manually.'));
      }
    } else {
      console.log(chalk.blue('Skipping dependency installation.'));
    }
    
    // Log setting up messages
    console.log(chalk.green('✔ Configuring Tailwind...'));
    if (['both', 'gsap'].includes(animations)) console.log(chalk.green('✔ Setting up GSAP...'));
    if (['both', 'framer'].includes(animations)) console.log(chalk.green('✔ Setting up Framer Motion...'));

    console.log(chalk.bold.cyan('\nDone! Now run:\n'));
    console.log(`  cd ${projectName}`);
    if (!installDeps) console.log('  bun install');
    console.log('  bun run dev\n');
    console.log(chalk.gray('Enjoy building with AKR Starter! 🚀\n'));

  } catch (error) {
    spinner.fail(chalk.red('An error occurred during scaffolding:'));
    console.error(error);
    process.exit(1);
  }
}

main();

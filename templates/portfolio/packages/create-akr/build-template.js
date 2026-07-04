import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '../../');
const templateDir = path.resolve(__dirname, 'template/react-vite');

async function buildTemplate() {
  console.log('Building template...');

  // Ensure template directory exists
  await fs.ensureDir(templateDir);

  const itemsToCopy = [
    'src',
    'public',
    'package.json',
    'tsconfig.json',
    'vite.config.ts',
    'eslint.config.js',
    'index.html',
    'vercel.json',
    'bun-env.d.ts',
    '.gitignore'
  ];

  for (const item of itemsToCopy) {
    const srcPath = path.join(rootDir, item);
    let destPath = path.join(templateDir, item);

    // Rename .gitignore to gitignore to prevent npm from omitting it
    if (item === '.gitignore') {
      destPath = path.join(templateDir, 'gitignore');
    }

    if (await fs.pathExists(srcPath)) {
      await fs.copy(srcPath, destPath, {
        filter: (src) => {
          // Exclude node_modules, dist, etc just in case they are inside src (unlikely but safe)
          if (src.includes('node_modules') || src.includes('dist')) {
            return false;
          }
          return true;
        }
      });
      console.log(`Copied ${item}`);
    } else {
      console.warn(`Warning: ${item} not found in root.`);
    }
  }

  // Update package.json name to a placeholder inside the template
  const pkgPath = path.join(templateDir, 'package.json');
  if (await fs.pathExists(pkgPath)) {
    const pkg = await fs.readJson(pkgPath);
    pkg.name = 'akr-starter-project';
    await fs.writeJson(pkgPath, pkg, { spaces: 2 });
    console.log('Updated template package.json');
  }

  console.log('Template built successfully!');
}

buildTemplate().catch(console.error);

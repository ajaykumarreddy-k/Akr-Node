const fs = require('fs');
const path = require('path');

const dirsToRemove = [
  path.join(__dirname, 'src/components'),
  path.join(__dirname, 'src/constants'),
  path.join(__dirname, 'src/lib')
];

for (const dir of dirsToRemove) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log('Removed:', dir);
  }
}

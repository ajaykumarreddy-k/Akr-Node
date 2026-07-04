import fs from 'fs';
import path from 'path';
import https from 'https';

const IMAGES = [
  { name: 'hero.jpg', url: 'https://images.unsplash.com/photo-1623998021446-45cd9b269056?auto=format&fit=crop&q=80&w=2560&h=800' },
  { name: 'product.jpg', url: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=600' },
  { name: 'parallax.jpg', url: 'https://images.unsplash.com/photo-1580436541340-a17056627581?auto=format&fit=crop&q=80&w=2560' }
];

const DIR = path.join(process.cwd(), 'public', 'images');

if (!fs.existsSync(DIR)) {
  fs.mkdirSync(DIR, { recursive: true });
}

console.log('Downloading high-quality CC0 (non-copyrighted) placeholder images...');

IMAGES.forEach((img) => {
  const filePath = path.join(DIR, img.name);
  const file = fs.createWriteStream(filePath);
  
  https.get(img.url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${img.name}`);
    });
  }).on('error', (err) => {
    fs.unlink(filePath, () => {});
    console.error(`Error downloading ${img.name}: ${err.message}`);
  });
});

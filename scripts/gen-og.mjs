import sharp from '../node_modules/sharp/dist/index.mjs';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgPath  = join(__dirname, '../public/og-default.svg');
const outPath  = join(__dirname, '../public/og-default.png');

const svg = readFileSync(svgPath);
await sharp(svg).png({ compressionLevel: 9 }).toFile(outPath);
console.log('✅ og-default.png generated');

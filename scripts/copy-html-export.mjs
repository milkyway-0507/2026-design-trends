import { cpSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const html = path.join(root, 'html');

rmSync(html, { recursive: true, force: true });
mkdirSync(html, { recursive: true });
cpSync(dist, html, { recursive: true });

console.log('Static HTML export ready:', html);

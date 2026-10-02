import { cp, mkdir, rm } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);

// Publish only the website and its public downloads, never the whole checkout.
const publicFiles = [
  'index.html',
  '404.html',
  'assets',
  'Yash_CV.pdf',
  'Yash_CL.pdf',
  'Yash_Portfolio.pdf',
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of publicFiles) {
  await cp(new URL(file, root), new URL(file, output), { recursive: true });
}
console.log(`Built website in dist/ (${publicFiles.join(', ')})`);

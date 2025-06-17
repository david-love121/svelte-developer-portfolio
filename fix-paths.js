import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const buildDir = './build';
const basePath = process.env.BASE_PATH || '';

console.log('Post-processing files for base path:', basePath);

if (basePath) {
  // Fix paths in index.html
  const indexPath = join(buildDir, 'index.html');
  let content = readFileSync(indexPath, 'utf-8');
  
  // Replace relative asset paths with base path prefixed paths
  content = content.replace(/href="\.\//g, `href="${basePath}/`);
  content = content.replace(/src="\.\//g, `src="${basePath}/`);
  
  // Fix JavaScript import paths in script tags
  content = content.replace(/import\("\.\//g, `import("${basePath}/`);
  
  writeFileSync(indexPath, content);
  console.log('Fixed asset paths in index.html');
}

console.log('Post-processing complete!');

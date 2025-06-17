#!/usr/bin/env node

import { spawn } from 'child_process';

// Determine the environment
const isProduction = process.env.NODE_ENV === 'production';
const basePath = process.env.BASE_PATH || (isProduction ? '/svelte-developer-portfolio' : '');

console.log(`Building for ${isProduction ? 'production' : 'development'} with base path: ${basePath || '(none)'}`);

// Set environment variables for the build
const env = {
  ...process.env,
  BASE_PATH: basePath
};

// Run the build command
const buildProcess = spawn('npm', ['run', 'build-only'], {
  stdio: 'inherit',
  env
});

buildProcess.on('close', (code) => {
  if (code === 0) {
    console.log('Build completed successfully!');
  } else {
    console.error(`Build failed with exit code ${code}`);
    process.exit(code);
  }
});

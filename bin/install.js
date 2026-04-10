#!/usr/bin/env node

/**
 * GSD-Qwen Installer v2.0
 *
 * Installs GSD extension for Qwen Code
 * Usage: node install.js [--global|--local] [--uninstall]
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

// Colors
const cyan = '\x1b[36m';
const green = '\x1b[32m';
const yellow = '\x1b[33m';
const red = '\x1b[31m';
const dim = '\x1b[2m';
const reset = '\x1b[0m';

// Parse arguments
const args = process.argv.slice(2);
const isGlobal = args.includes('--global') || args.includes('-g');
const isLocal = args.includes('--local') || args.includes('-l');
const isUninstall = args.includes('--uninstall') || args.includes('-u');
const isHelp = args.includes('--help') || args.includes('-h');

// Get Qwen config directory
function getQwenDir(isGlobal) {
  if (isGlobal) {
    return path.join(os.homedir(), '.qwen');
  }
  return path.join(process.cwd(), '.qwen');
}

function getExtensionsDir(qwenDir) {
  return path.join(qwenDir, 'extensions');
}

// Show help
function showHelp() {
  console.log(`
${cyan}GSD-Qwen Installer v2.0${reset}

${yellow}Usage:${reset} node install.js [options]

${yellow}Options:${reset}
  ${cyan}-g, --global${reset}      Install globally (to ~/.qwen/)
  ${cyan}-l, --local${reset}       Install locally (to ./.qwen/)
  ${cyan}-u, --uninstall${reset}   Uninstall GSD
  ${cyan}-h, --help${reset}        Show this help

${yellow}Examples:${reset}
  ${dim}# Install globally${reset}
  node install.js --global

  ${dim}# Install locally${reset}
  node install.js --local

  ${dim}# Uninstall${reset}
  node install.js --uninstall --global
`);
}

// Directories to exclude from copy
const EXCLUDE_DIRS = ['.qwen', 'node_modules', '.git', 'dist', 'logs', '.venv', '__pycache__'];

// Copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory() && EXCLUDE_DIRS.includes(entry.name)) {
      continue;
    }

    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Remove directory recursively
function removeDir(dir) {
  if (fs.existsSync(dir)) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const entryPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        removeDir(entryPath);
      } else {
        fs.unlinkSync(entryPath);
      }
    }

    fs.rmdirSync(dir);
  }
}

// Count files in directory
function countFiles(dir) {
  let count = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory() && !EXCLUDE_DIRS.includes(entry.name)) {
      count += countFiles(path.join(dir, entry.name));
    } else {
      count++;
    }
  }

  return count;
}

// Install GSD
function install(isGlobal) {
  const qwenDir = getQwenDir(isGlobal);
  const extensionsDir = getExtensionsDir(qwenDir);
  const gsdExtensionDir = path.join(extensionsDir, 'gsd-qwen');
  const sourceDir = path.join(__dirname, '..');

  console.log(`\n${cyan}Installing GSD-Qwen v2.0...${reset}\n`);

  // Validate source directory
  const manifestPath = path.join(sourceDir, 'qwen-extension.json');
  if (!fs.existsSync(manifestPath)) {
    console.log(`${red}✗ Error: qwen-extension.json not found in source directory${reset}\n`);
    process.exit(1);
  }

  // Create extensions directory
  if (!fs.existsSync(extensionsDir)) {
    console.log(`  Creating extensions directory: ${extensionsDir}`);
    fs.mkdirSync(extensionsDir, { recursive: true });
  }

  // Remove existing installation
  if (fs.existsSync(gsdExtensionDir)) {
    console.log(`  Removing existing installation...`);
    removeDir(gsdExtensionDir);
  }

  // Copy extension files
  console.log(`  Copying extension files...`);
  copyDir(sourceDir, gsdExtensionDir);

  // Count copied files
  const fileCount = countFiles(gsdExtensionDir);

  // Verify installation
  const destManifestPath = path.join(gsdExtensionDir, 'qwen-extension.json');
  if (fs.existsSync(destManifestPath)) {
    console.log(`\n${green}✓ Installation successful!${reset}\n`);
    console.log(`  Installed to: ${gsdExtensionDir}`);
    console.log(`  Files copied: ${fileCount}\n`);
    console.log(`  ${yellow}Next steps:${reset}\n`);
    console.log(`  1. Restart Qwen Code`);
    console.log(`  2. Run ${cyan}/gsd:help${reset} to see all commands`);
    console.log(`  3. Run ${cyan}/gsd:new-project${reset} to start\n`);
  } else {
    console.log(`\n${red}✗ Installation failed!${reset}`);
    console.log(`  Manifest not found: ${destManifestPath}\n`);
    process.exit(1);
  }
}

// Uninstall GSD
function uninstall(isGlobal) {
  const qwenDir = getQwenDir(isGlobal);
  const extensionsDir = getExtensionsDir(qwenDir);
  const gsdExtensionDir = path.join(extensionsDir, 'gsd-qwen');

  console.log(`\n${cyan}Uninstalling GSD-Qwen...${reset}\n`);

  if (!fs.existsSync(gsdExtensionDir)) {
    console.log(`  ${yellow}GSD-Qwen is not installed${reset}\n`);
    return;
  }

  removeDir(gsdExtensionDir);

  console.log(`  ${green}✓ Uninstallation successful!${reset}\n`);
  console.log(`  Removed: ${gsdExtensionDir}\n`);
}

// Main
function main() {
  if (isHelp) {
    showHelp();
    return;
  }

  if (!isGlobal && !isLocal) {
    console.log(`\n${yellow}Please specify --global or --local${reset}\n`);
    showHelp();
    process.exit(1);
  }

  if (isUninstall) {
    uninstall(isGlobal);
  } else {
    install(isGlobal);
  }
}

main();

#!/usr/bin/env node

/**
 * GSD-Qwen Installer
 * 
 * Installs GSD extension for Qwen Code
 * Usage: node install.js [--global|--local]
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

// Colors
const cyan = '\x1b[36m';
const green = '\x1b[32m';
const yellow = '\x1b[33m';
const red = '\x1b[31m';
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
    // Global: ~/.qwen/
    return path.join(os.homedir(), '.qwen');
  } else {
    // Local: ./.qwen/
    return path.join(process.cwd(), '.qwen');
  }
}

// Get extensions directory
function getExtensionsDir(qwenDir) {
  return path.join(qwenDir, 'extensions');
}

// Show help
function showHelp() {
  console.log(`
${cyan}GSD-Qwen Installer${reset}

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
const EXCLUDE_DIRS = ['.qwen', 'node_modules', '.git', 'dist'];

// Copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    // Skip excluded directories
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

// Install GSD
function install(isGlobal) {
  const qwenDir = getQwenDir(isGlobal);
  const extensionsDir = getExtensionsDir(qwenDir);
  const gsdExtensionDir = path.join(extensionsDir, 'gsd-qwen');
  // Source dir is parent of bin/ (where install.js lives)
  const sourceDir = path.join(__dirname, '..');
  
  console.log(`\n${cyan}Installing GSD-Qwen...${reset}\n`);
  
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
  
  // Verify installation
  const manifestPath = path.join(gsdExtensionDir, 'qwen-extension.json');
  if (fs.existsSync(manifestPath)) {
    console.log(`\n${green}✓ Installation successful!${reset}\n`);
    console.log(`  Installed to: ${gsdExtensionDir}\n`);
    console.log(`  ${yellow}Next steps:${reset}\n`);
    console.log(`  1. Restart Qwen Code`);
    console.log(`  2. Run ${cyan}/gsd:help${reset} to see all commands`);
    console.log(`  3. Run ${cyan}/gsd:new-project${reset} to start\n`);
  } else {
    console.log(`\n${red}✗ Installation failed!${reset}`);
    console.log(`  Manifest not found: ${manifestPath}\n`);
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
  
  // Remove extension
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

// Run
main();

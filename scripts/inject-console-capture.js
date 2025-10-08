const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), '.next', 'server', 'app');
const scriptTag = '<script src="/dashboard-console-capture.js"></script>';

function injectScript(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes(scriptTag)) return;
  
  content = content.replace('</head>', `${scriptTag}</head>`);
  fs.writeFileSync(filePath, content);
  console.log(`Injected console capture script into ${filePath}`);
}

function traverseDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      traverseDirectory(fullPath);
    } else if (file === 'index.html' || file.endsWith('.html')) {
      injectScript(fullPath);
    }
  });
}

console.log('Injecting console capture script...');
traverseDirectory(outDir);
console.log('Console capture script injection complete!');
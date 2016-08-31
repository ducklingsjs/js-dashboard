const path = require('path');
const fs = require('fs');

fs.writeFileSync(
  path.join(__dirname, '../dist', 'version.txt'),
  `${Date.now()}`
);
console.log('Wrote version.txt');

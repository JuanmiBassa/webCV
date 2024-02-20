const fs = require('fs');
const path = require('path');

const distDir = 'dist';
const headersFile = path.join(distDir, '_headers');

let headersContent = '';

fs.readdirSync(distDir).forEach(file => {
    const filePath = path.join(distDir, file);
    const stats = fs.statSync(filePath);
    const lastModified = new Date(stats.mtime).toUTCString();
    headersContent += `/${file}\n  Last-Modified: ${lastModified}\n\n`;
});

headersContent += `
/*
Cache-Control: public, max-age=31536000, immutable

/*.html
Cache-Control: public, max-age=3600

`;

fs.writeFileSync(headersFile, headersContent);
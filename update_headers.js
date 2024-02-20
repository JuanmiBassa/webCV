const fs = require('fs');
const path = require('path');

const distDir = 'dist';
const headersFile = path.join(distDir, '_headers');

let headersContent = '';

// Recorre todos los archivos en el directorio 'dist'
fs.readdirSync(distDir).forEach(file => {
    const filePath = path.join(distDir, file);
    const stats = fs.statSync(filePath);
    const lastModified = new Date(stats.mtime).toUTCString();
    headersContent += `/${file}\n  Last-Modified: ${lastModified}\n\n`;
});

// Escribe el contenido actualizado en el archivo _headers
fs.writeFileSync(headersFile, headersContent);

console.log('Headers actualizados correctamente.');

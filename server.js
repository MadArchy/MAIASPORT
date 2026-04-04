const http = require('http');
const fs   = require('fs');
const path = require('path');

const BASE = '.';

http.createServer((req, res) => {
  // Decodificar la URL completa, incluyendo espacios dobles
  let urlPath = req.url.split('?')[0];
  let decoded = '';
  try { decoded = decodeURIComponent(urlPath); } catch(e) { decoded = urlPath; }
  
  if (decoded === '/') decoded = '/index.html';
  
  const filePath = path.join(BASE, decoded.replace(/\//g, path.sep));
  
  const ext = path.extname(filePath).slice(1).toLowerCase();
  const mime = {
    'html': 'text/html; charset=utf-8',
    'css':  'text/css',
    'js':   'application/javascript; charset=utf-8',
    'jpeg': 'image/jpeg',
    'jpg':  'image/jpeg',
    'png':  'image/png',
    'webp': 'image/webp',
    'gif':  'image/gif',
    'svg':  'image/svg+xml',
    'woff2':'font/woff2',
    'ico':  'image/x-icon'
  }[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log('404:', filePath);
      res.writeHead(404);
      res.end('Not found: ' + decoded);
    } else {
      res.writeHead(200, {
        'Content-Type': mime,
        'Cache-Control': 'no-store'
      });
      res.end(data);
    }
  });
}).listen(8080, () => console.log('Servidor Maia Sport corriendo en http://127.0.0.1:8080'));

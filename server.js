const http = require('http');
const fs   = require('fs');
const path = require('path');

const BASE = '.';
const PORT = 8080;

// ─── MIME types ────────────────────────────────────────────
const MIME = {
  'html':     'text/html; charset=utf-8',
  'css':      'text/css; charset=utf-8',
  'js':       'application/javascript; charset=utf-8',
  'json':     'application/json; charset=utf-8',
  'webmanifest': 'application/manifest+json',
  'jpeg':     'image/jpeg',
  'jpg':      'image/jpeg',
  'png':      'image/png',
  'webp':     'image/webp',
  'gif':      'image/gif',
  'svg':      'image/svg+xml',
  'woff2':    'font/woff2',
  'woff':     'font/woff',
  'ttf':      'font/ttf',
  'ico':      'image/x-icon',
};

// ─── Security Headers ──────────────────────────────────────
const SECURITY_HEADERS = {
  'X-Content-Type-Options':    'nosniff',
  'X-Frame-Options':           'SAMEORIGIN',
  'Referrer-Policy':           'strict-origin-when-cross-origin',
  'Permissions-Policy':        'camera=(), microphone=(), geolocation=()',
  'X-XSS-Protection':          '1; mode=block',
};

// ─── Cache policy per type ─────────────────────────────────
function getCacheControl(ext) {
  if (['woff2', 'woff', 'ttf'].includes(ext)) return 'public, max-age=31536000, immutable';
  if (['jpg','jpeg','png','webp','gif','svg'].includes(ext)) return 'public, max-age=86400';
  if (ext === 'css' || ext === 'js') return 'public, max-age=3600';
  return 'no-cache';
}

http.createServer((req, res) => {
  // Decode URL, handles spaces encoded as %20 or %20%20
  let urlPath = req.url.split('?')[0];
  let decoded = '';
  try { decoded = decodeURIComponent(urlPath); } catch(e) { decoded = urlPath; }

  if (decoded === '/') decoded = '/index.html';

  const filePath = path.join(BASE, decoded.replace(/\//g, path.sep));

  // Basic path traversal protection
  const resolvedBase = path.resolve(BASE);
  const resolvedFile = path.resolve(filePath);
  if (!resolvedFile.startsWith(resolvedBase)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }

  const ext = path.extname(filePath).slice(1).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log('404:', decoded);
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found: ' + decoded);
    } else {
      res.writeHead(200, {
        'Content-Type': mime,
        'Cache-Control': getCacheControl(ext),
        ...SECURITY_HEADERS
      });
      res.end(data);
    }
  });
}).listen(PORT, '127.0.0.1', () => {
  console.log(`✅ Servidor Maia Sport corriendo en http://127.0.0.1:${PORT}`);
  console.log('🔒 Security headers: activos');
  console.log('👟 Fuentes locales: fonts/');
  console.log('🎯 Íconos locales: js/lucide.min.js');
});

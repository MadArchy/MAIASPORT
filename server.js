const http = require('http');
const fs   = require('fs');
const path = require('path');

const BASE = '.';
const PORT = 8080;

const MIME = {
  'html':        'text/html; charset=utf-8',
  'css':         'text/css; charset=utf-8',
  'js':          'application/javascript; charset=utf-8',
  'json':        'application/json; charset=utf-8',
  'webmanifest': 'application/manifest+json',
  'jpeg':        'image/jpeg',
  'jpg':         'image/jpeg',
  'png':         'image/png',
  'webp':        'image/webp',
  'gif':         'image/gif',
  'svg':         'image/svg+xml',
  'woff2':       'font/woff2',
  'woff':        'font/woff',
  'ttf':         'font/ttf',
  'ico':         'image/x-icon',
};

const SECURITY_HEADERS = {
  'X-Content-Type-Options':    'nosniff',
  'X-Frame-Options':           'SAMEORIGIN',
  'Referrer-Policy':           'strict-origin-when-cross-origin',
  'Permissions-Policy':        'camera=(), microphone=(), geolocation=()',
  'X-XSS-Protection':          '1; mode=block',
};

function getCacheControl(ext) {
  if (['woff2', 'woff', 'ttf'].includes(ext)) return 'public, max-age=31536000, immutable';
  if (['jpg','jpeg','png','webp','gif','svg'].includes(ext)) return 'public, max-age=86400';
  if (ext === 'css' || ext === 'js') return 'no-cache, no-store, must-revalidate';
  return 'no-cache';
}

// ═══════════════════════════════════════════════════════════
//  API LOCAL: POST /api/save-catalog
//  Escribe data/catalogo.json directamente en el disco.
//  Solo activo en servidor local — silencioso en GitHub Pages.
// ═══════════════════════════════════════════════════════════
function handleSaveCatalog(req, res) {
  const cors = {
    'Access-Control-Allow-Origin':  '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (req.method === 'OPTIONS') {
    res.writeHead(204, cors);
    res.end();
    return;
  }

  let body = '';
  req.on('data', chunk => { body += chunk; });
  req.on('end', () => {
    try {
      const parsed  = JSON.parse(body);
      const jsonStr = JSON.stringify(parsed, null, 2);
      const dest    = path.join(BASE, 'data', 'catalogo.json');

      fs.writeFile(dest, jsonStr, 'utf8', err => {
        if (err) {
          console.error('[API] Error al escribir catalogo.json:', err.message);
          res.writeHead(500, cors);
          res.end(JSON.stringify({ ok: false, error: err.message }));
        } else {
          console.log('[API] catalogo.json actualizado localmente OK');
          res.writeHead(200, cors);
          res.end(JSON.stringify({ ok: true }));
        }
      });
    } catch (e) {
      res.writeHead(400, cors);
      res.end(JSON.stringify({ ok: false, error: 'JSON invalido: ' + e.message }));
    }
  });
}

// ═══════════════════════════════════════════════════════════
//  SERVIDOR HTTP PRINCIPAL
// ═══════════════════════════════════════════════════════════
http.createServer((req, res) => {

  // ── Endpoint de escritura local ──────────────────────────
  if (req.url === '/api/save-catalog') {
    handleSaveCatalog(req, res);
    return;
  }

  // Decodificar URL (maneja espacios %20)
  let urlPath = req.url.split('?')[0];
  let decoded = '';
  try { decoded = decodeURIComponent(urlPath); } catch(e) { decoded = urlPath; }

  if (decoded === '/') decoded = '/index.html';
  if (decoded.endsWith('/')) decoded = decoded + 'index.html';

  const filePath     = path.join(BASE, decoded.replace(/\//g, path.sep));
  const resolvedBase = path.resolve(BASE);
  const resolvedFile = path.resolve(filePath);

  // Protección path traversal
  if (!resolvedFile.startsWith(resolvedBase)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }

  const ext  = path.extname(filePath).slice(1).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log('404:', decoded);
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found: ' + decoded);
    } else {
      res.writeHead(200, {
        'Content-Type':  mime,
        'Cache-Control': getCacheControl(ext),
        ...SECURITY_HEADERS,
      });
      res.end(data);
    }
  });

}).listen(PORT, '127.0.0.1', () => {
  console.log('✅ Servidor Maia Sport corriendo en http://127.0.0.1:' + PORT);
  console.log('📝 API local activa: POST /api/save-catalog');
  console.log('🔒 Security headers: activos');
  console.log('👟 Fuentes locales: fonts/');
  console.log('🎯 Iconos locales: js/lucide.min.js');
});

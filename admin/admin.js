/* ============================================================
   MAIA SPORT ADMIN — Lógica CRUD + GitHub API
   Repositorio: MadArchy/MAIASPORT
   Sin dependencias externas — 100% local
   ============================================================ */

'use strict';

// ── CONFIGURACIÓN ─────────────────────────────────────────────
const REPO  = 'MadArchy/MAIASPORT';
const FILE  = 'data/catalogo.json';
const API   = `https://api.github.com/repos/${REPO}/contents/${FILE}`;

// Tallas predefinidas por categoría
const TALLAS_ZAPATOS = [35, 36, 37, 38, 39, 40, 41, 42];
const TALLAS_ROPA    = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

// ── ESTADO GLOBAL ──────────────────────────────────────────────
let state = {
  token:        '',
  catalog:      [],   // array de productos
  sha:          '',   // SHA del archivo en GitHub (necesario para PUT)
  currentFilter: 'TODOS',
  searchTerm:   '',
  editingId:    null, // null = nuevo, string = editar existente
  deleteId:     null,
};

// ── INICIALIZACIÓN ─────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  // Restaurar token de sesión si existe
  const saved = sessionStorage.getItem('ms_admin_token');
  if (saved) {
    state.token = saved;
    document.getElementById('tokenInput').value = saved;
    loadCatalog();
  }

  // Enter en el campo de token = login
  document.getElementById('tokenInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') handleLogin();
  });
});

// ── LOGIN ──────────────────────────────────────────────────────
async function handleLogin() {
  const token = document.getElementById('tokenInput').value.trim();
  if (!token) { showLoginError('Ingresa tu token de GitHub.'); return; }

  const btn = document.getElementById('loginBtn');
  btn.textContent = 'Verificando...';
  btn.disabled = true;

  try {
    // Verificar token leyendo el archivo JSON del repo
    const res = await githubGet(token);
    if (!res.ok) throw new Error('Token inválido o sin permisos: ' + res.status);

    const data    = await res.json();
    state.token   = token;
    state.sha     = data.sha;
    state.catalog = JSON.parse(decodeBase64(data.content)).productos || [];

    sessionStorage.setItem('ms_admin_token', token);

    // Mostrar panel
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('adminPanel').style.display  = 'flex';
    renderProductList();
    updateStats();
    lucide.createIcons();

  } catch (err) {
    showLoginError('Token inválido o sin permisos. Verifica e intenta de nuevo.');
    console.error('[Maia Admin] Login error:', err);
  } finally {
    btn.textContent = 'INGRESAR AL PANEL';
    btn.disabled = false;
  }
}

function showLoginError(msg) {
  const el = document.getElementById('loginError');
  el.textContent = msg;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 4000);
}

function handleLogout() {
  sessionStorage.removeItem('ms_admin_token');
  state.token = '';
  document.getElementById('adminPanel').style.display  = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('tokenInput').value = '';
}

// ── CARGAR CATÁLOGO (tras login) ───────────────────────────────
async function loadCatalog() {
  try {
    const res  = await githubGet(state.token);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data    = await res.json();
    state.sha     = data.sha;
    state.catalog = JSON.parse(decodeBase64(data.content)).productos || [];

    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('adminPanel').style.display  = 'flex';
    renderProductList();
    updateStats();
    lucide.createIcons();
  } catch (err) {
    console.error('[Maia Admin] loadCatalog error:', err);
    // Si el token guardado es inválido, mostrar login
    sessionStorage.removeItem('ms_admin_token');
  }
}

// ── GITHUB API ─────────────────────────────────────────────────
function githubGet(token) {
  return fetch(API, {
    headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3+json',
    }
  });
}

async function githubSave(productos) {
  // Re-leer el SHA más reciente antes de guardar (evitar conflictos)
  const getRes  = await githubGet(state.token);
  const getData = await getRes.json();
  const latestSha = getData.sha;

  const content = encodeBase64(JSON.stringify({ productos }, null, 2));
  const now     = new Date();
  const fecha   = now.toLocaleString('es-CO', { timeZone: 'America/Bogota' });

  const res = await fetch(API, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${state.token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: `🛍️ Admin Maia Sport: actualización catálogo — ${fecha}`,
      content:  content,
      sha:      latestSha,
    })
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'Error al guardar en GitHub');
  }

  const saved = await res.json();
  state.sha   = saved.content.sha;
  return saved;
}

// ── HELPERS BASE64 ─────────────────────────────────────────────
function decodeBase64(str) {
  return decodeURIComponent(
    atob(str.replace(/\n/g, ''))
      .split('')
      .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  );
}

function encodeBase64(str) {
  return btoa(
    encodeURIComponent(str)
      .replace(/%([0-9A-F]{2})/g, (_, p1) => String.fromCharCode(parseInt(p1, 16)))
  );
}

// ── RENDER LISTA ───────────────────────────────────────────────
function renderProductList() {
  const list      = document.getElementById('productList');
  const empty     = document.getElementById('emptyState');
  const term      = (state.searchTerm || '').toLowerCase();
  const catFilter = state.currentFilter;

  let filtered = state.catalog.filter(p => {
    const matchCat  = catFilter === 'TODOS' || p.categoria === catFilter;
    const matchText = !term ||
      p.nombre.toLowerCase().includes(term) ||
      p.marca.toLowerCase().includes(term)  ||
      p.id.toLowerCase().includes(term);
    return matchCat && matchText;
  });

  list.innerHTML = '';

  if (filtered.length === 0) {
    empty.style.display = 'flex';
    lucide.createIcons();
    return;
  }

  empty.style.display = 'none';

  filtered.forEach(prod => {
    const thumb    = prod.variantes && prod.variantes[0] ? prod.variantes[0].img : null;
    const numVars  = prod.variantes ? prod.variantes.length : 0;
    const precioFmt = prod.precio ? `$${prod.precio.toLocaleString('es-CO')}` : '—';
    const catClass = prod.categoria === 'ROPA' ? 'cat-badge-ropa' : 'cat-badge-zapatos';

    const row = document.createElement('div');
    row.className = 'product-row';
    row.innerHTML = `
      ${thumb
        ? `<img class="product-thumb" src="../${thumb}" alt="${prod.nombre}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">`
        : ''}
      <div class="product-thumb-placeholder" ${thumb ? 'style="display:none"' : ''}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m21 15-5-5L5 21"/><circle cx="8.5" cy="8.5" r="1.5"/></svg>
      </div>
      <div class="product-info">
        <div class="product-nombre">${prod.nombre}</div>
        <div class="product-meta">
          <span>${prod.marca}</span>
          <span>${numVars} variante${numVars !== 1 ? 's' : ''}</span>
          <span>${Array.isArray(prod.tallas) ? prod.tallas.join(', ') : '—'}</span>
        </div>
      </div>
      <span class="cat-badge ${catClass}">${prod.categoria}</span>
      <div class="product-precio">${precioFmt}</div>
      <div class="product-actions">
        <button class="btn-icon" title="Editar" onclick="openModal('${prod.id}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
        <button class="btn-icon btn-icon-danger" title="Eliminar" onclick="openDeleteModal('${prod.id}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
        </button>
      </div>
    `;
    list.appendChild(row);
  });
}

// ── FILTROS ────────────────────────────────────────────────────
function filterProducts() {
  state.searchTerm = document.getElementById('searchInput').value;
  renderProductList();
}

function setCatFilter(btn) {
  document.querySelectorAll('.cat-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.currentFilter = btn.dataset.cat;
  renderProductList();
}

// ── ESTADÍSTICAS ───────────────────────────────────────────────
function updateStats() {
  const total   = state.catalog.length;
  const zapatos = state.catalog.filter(p => p.categoria !== 'ROPA').length;
  const ropa    = state.catalog.filter(p => p.categoria === 'ROPA').length;

  document.getElementById('statsTotal').textContent   = `${total} productos`;
  document.getElementById('statsZapatos').textContent = `${zapatos} zapatos`;
  document.getElementById('statsRopa').textContent    = `${ropa} conjuntos`;
}

// ── MODAL CREAR / EDITAR ───────────────────────────────────────
function openModal(productId) {
  state.editingId = productId;
  const prod = productId ? state.catalog.find(p => p.id === productId) : null;

  // Título del modal
  document.getElementById('modalTitle').textContent = prod ? 'EDITAR PRODUCTO' : 'NUEVO PRODUCTO';

  // Rellenar campos
  document.getElementById('fId').value       = prod ? prod.id       : '';
  document.getElementById('fId').readOnly    = !!prod; // No editar ID si ya existe
  document.getElementById('fNombre').value   = prod ? prod.nombre   : '';
  document.getElementById('fMarca').value    = prod ? prod.marca    : '';
  document.getElementById('fPrecio').value   = prod ? prod.precio   : '';
  document.getElementById('fCategoria').value = prod ? prod.categoria : 'ZAPATOS';

  // Renderizar tallas
  renderTallas(prod ? prod.tallas : [], prod ? prod.categoria : 'ZAPATOS');

  // Escuchar cambio de categoría para actualizar tallas
  document.getElementById('fCategoria').onchange = function() {
    renderTallas([], this.value);
  };

  // Renderizar variantes
  const varContainer = document.getElementById('variantesContainer');
  varContainer.innerHTML = '';
  if (prod && prod.variantes && prod.variantes.length > 0) {
    prod.variantes.forEach(v => addVariant(v));
  } else {
    addVariant(); // Una variante vacía por defecto
  }

  document.getElementById('productModal').style.display = 'flex';
  lucide.createIcons();
  document.getElementById('fNombre').focus();
}

function renderTallas(selectedTallas, categoria) {
  const wrapper = document.getElementById('tallasWrapper');
  const tallas  = categoria === 'ROPA' ? TALLAS_ROPA : TALLAS_ZAPATOS;
  const selected = selectedTallas || [];

  wrapper.innerHTML = `<div class="tallas-grid">
    ${tallas.map(t => {
      const id  = `talla-${t}`;
      const checked = selected.includes(t) || selected.map(String).includes(String(t));
      return `
        <input type="checkbox" class="talla-check" id="${id}" value="${t}" ${checked ? 'checked' : ''}>
        <label class="talla-chip" for="${id}">${t}</label>
      `;
    }).join('')}
  </div>`;
}

function addVariant(data = {}) {
  const container = document.getElementById('variantesContainer');
  const idx       = container.children.length;
  const card      = document.createElement('div');
  card.className  = 'variant-card';
  card.dataset.idx = idx;

  card.innerHTML = `
    <button class="btn-remove-variant" onclick="removeVariant(this)" title="Quitar variante">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <div class="variant-row">
      <div class="field-group">
        <label class="field-label">Nombre del color</label>
        <input type="text" class="field-input v-color" value="${data.color || ''}" placeholder="Ej: Negro / Dorado">
      </div>
      <div class="field-group" style="max-width:120px">
        <label class="field-label">Hex</label>
        <input type="text" class="field-input v-hex" value="${data.hex || '#1a1a1a'}" placeholder="#1a1a1a" oninput="updateColorPreview(this)">
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;align-items:center">
        <label class="field-label" style="visibility:hidden">Color</label>
        <input type="color" class="color-preview" value="${data.hex || '#1a1a1a'}" oninput="syncHexInput(this)" title="Elegir color">
      </div>
    </div>
    <div class="field-group">
      <label class="field-label">Ruta de la imagen <span class="field-hint" style="font-size:10px;color:var(--text-3);">(relativa a la raíz del repo)</span></label>
      <input type="text" class="field-input v-img" value="${data.img || ''}" placeholder="images/catalogo/zapatos/.../foto.jpeg">
    </div>
  `;

  container.appendChild(card);
}

function removeVariant(btn) {
  const card = btn.closest('.variant-card');
  if (document.getElementById('variantesContainer').children.length <= 1) {
    showToast('Debe haber al menos una variante.', 'error');
    return;
  }
  card.remove();
}

function updateColorPreview(hexInput) {
  const card    = hexInput.closest('.variant-card');
  const picker  = card.querySelector('input[type="color"]');
  const val     = hexInput.value.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(val)) picker.value = val;
}

function syncHexInput(picker) {
  const card     = picker.closest('.variant-card');
  const hexInput = card.querySelector('.v-hex');
  hexInput.value = picker.value;
}

function closeModal() {
  document.getElementById('productModal').style.display = 'none';
  state.editingId = null;
}

function handleOverlayClick(e) {
  if (e.target === e.currentTarget) closeModal();
}

// ── GUARDAR PRODUCTO ───────────────────────────────────────────
async function saveProduct() {
  // Recolectar datos del formulario
  const id       = document.getElementById('fId').value.trim().toLowerCase().replace(/\s+/g, '-');
  const nombre   = document.getElementById('fNombre').value.trim();
  const marca    = document.getElementById('fMarca').value.trim();
  const cat      = document.getElementById('fCategoria').value;
  const precio   = parseInt(document.getElementById('fPrecio').value, 10);

  // Validaciones básicas
  if (!id)     { showToast('El ID es obligatorio.', 'error'); return; }
  if (!nombre) { showToast('El nombre es obligatorio.', 'error'); return; }
  if (!marca)  { showToast('La marca es obligatoria.', 'error'); return; }
  if (!precio || isNaN(precio)) { showToast('El precio debe ser un número válido.', 'error'); return; }

  // Validar ID único al crear
  if (!state.editingId) {
    const exists = state.catalog.some(p => p.id === id);
    if (exists) { showToast(`Ya existe un producto con ID "${id}". Usa un ID diferente.`, 'error'); return; }
  }

  // Recolectar tallas marcadas
  const tallaCheckboxes = document.querySelectorAll('#tallasWrapper .talla-check:checked');
  const tallas = Array.from(tallaCheckboxes).map(cb => {
    const v = cb.value;
    return isNaN(Number(v)) ? v : Number(v);
  });

  // Recolectar variantes
  const varCards  = document.querySelectorAll('#variantesContainer .variant-card');
  const variantes = [];
  let varError    = false;

  varCards.forEach((card, i) => {
    const color = card.querySelector('.v-color').value.trim();
    const hex   = card.querySelector('.v-hex').value.trim();
    const img   = card.querySelector('.v-img').value.trim();

    if (!color || !img) {
      showToast(`Variante ${i+1}: el nombre del color y la imagen son obligatorios.`, 'error');
      varError = true;
      return;
    }
    variantes.push({ color, hex: hex || '#888888', img });
  });

  if (varError || variantes.length === 0) return;

  // Construir objeto producto
  const producto = { id, marca, categoria: cat, nombre, precio, tallas, variantes };

  // Actualizar catálogo en memoria
  if (state.editingId) {
    const idx = state.catalog.findIndex(p => p.id === state.editingId);
    if (idx >= 0) state.catalog[idx] = producto;
    else state.catalog.push(producto);
  } else {
    state.catalog.push(producto);
  }

  closeModal();

  // Guardar en GitHub
  await pushToGitHub();
}

// ── ELIMINAR PRODUCTO ──────────────────────────────────────────
function openDeleteModal(productId) {
  state.deleteId = productId;
  const prod     = state.catalog.find(p => p.id === productId);
  document.getElementById('deleteProductName').textContent = prod ? prod.nombre : productId;
  document.getElementById('deleteModal').style.display = 'flex';
  lucide.createIcons();
}

function closeDeleteModal() {
  document.getElementById('deleteModal').style.display = 'none';
  state.deleteId = null;
}

function handleDeleteOverlayClick(e) {
  if (e.target === e.currentTarget) closeDeleteModal();
}

async function confirmDelete() {
  if (!state.deleteId) return;
  state.catalog = state.catalog.filter(p => p.id !== state.deleteId);
  closeDeleteModal();
  await pushToGitHub();
}

// ── PUSH A GITHUB + GUARDAR LOCAL ─────────────────────────────
async function pushToGitHub() {
  setSaveStatus('saving');
  renderProductList();
  updateStats();

  try {
    // 1. Guardar en GitHub (fuente de verdad)
    await githubSave(state.catalog);

    // 2. Guardar también en el archivo local (solo cuando corremos en dev)
    //    En GitHub Pages /api/save-catalog no existe → falla silenciosamente
    try {
      await fetch('/api/save-catalog', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ productos: state.catalog }),
      });
    } catch (_) {
      // Silencioso en producción (GitHub Pages no tiene este endpoint)
    }

    setSaveStatus('ok');
    showToast('✅ Guardado. Los cambios ya son visibles en el sitio.', 'ok');
  } catch (err) {
    setSaveStatus('error');
    showToast('❌ Error al guardar: ' + err.message, 'error');
    console.error('[Maia Admin] pushToGitHub error:', err);
  }
}

function setSaveStatus(status) {
  const el = document.getElementById('saveStatus');
  el.className = 'save-status';

  if (status === 'saving') {
    el.classList.add('status-saving');
    el.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:spin-slow 1s linear infinite"><path d="M21 12a9 9 0 11-6.219-8.56"/></svg> Guardando…`;
  } else if (status === 'ok') {
    el.classList.add('status-ok');
    el.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Sincronizado`;
  } else {
    el.classList.add('status-error');
    el.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Error`;
  }
}

// ── TOAST ──────────────────────────────────────────────────────
let toastTimer = null;
function showToast(msg, type = 'info') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className   = `toast toast-${type}`;
  el.style.display = 'block';

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.style.display = 'none'; }, 4500);
}

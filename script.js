document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Efecto Hover 3D Tilt (Inclinación Mágica)
  // ==========================================
  const tiltElements = document.querySelectorAll('[data-tilt]');

  tiltElements.forEach(el => {
    el.addEventListener('mousemove', handleTilt);
    el.addEventListener('mouseleave', resetTilt);
  });

  function handleTilt(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left; // Posición X del mouse dentro del elemento
    const y = e.clientY - rect.top;  // Posición Y del mouse dentro del elemento
    
    // Cálculo para mover según el centro
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Factor de inclinación (menor número = más inclinación)
    const factor = 15;
    
    const rotateX = ((y - centerY) / factor) * -1;
    const rotateY = (x - centerX) / factor;

    // Aplicar transformación 3D
    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    this.style.transition = 'transform 0.1s ease-out';
    this.style.zIndex = '10'; // para sobresalir
  }

  function resetTilt(e) {
    this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    this.style.transition = 'transform 0.5s ease-out';
    this.style.zIndex = '1';
  }

  // ==========================================
  // 2. Selectores Interactivos de Swatch (Color)
  // ==========================================
  const colorGroups = document.querySelectorAll('.color-swatches');
  
  colorGroups.forEach(group => {
    const swatches = group.querySelectorAll('.swatch');
    swatches.forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        // Evitar que el clic abra la tarjeta modal inmediatamente
        e.stopPropagation();
        
        // Quitar la clase active a todos en este grupo
        swatches.forEach(s => s.classList.remove('active'));
        // Agregarla al clickeado
        swatch.classList.add('active');
        
        // Efecto visual: Pequeña sacudida o pulse
        swatch.style.transform = 'scale(1.3)';
        setTimeout(() => swatch.style.transform = 'scale(1)', 200);
      });
    });
  });

  // ==========================================
  // 3. Quick View Modal Integración
  // ==========================================
  const modal = document.getElementById('quickView');
  const modalClose = document.querySelector('.close-modal');
  const productCards = document.querySelectorAll('.product-card, .catalog-main-feature');
  
  const mTitle = document.getElementById('qv-title');
  const mPrice = document.getElementById('qv-price');
  const mImg = document.getElementById('qv-img');

  productCards.forEach(card => {
    card.addEventListener('click', () => {
      // Recolectar datos
      // La ficha principal es un poco distinta a las tarjetas, ajustamos búsqueda:
      let title = card.querySelector('h4') ? card.querySelector('h4').textContent : card.querySelector('h3').textContent;
      let price = card.querySelector('.price') ? card.querySelector('.price').textContent : card.querySelector('.feature-action span').textContent;
      let imgSrc = card.querySelector('img').src;
      
      // Popular Modal
      mTitle.textContent = title;
      mPrice.textContent = price;
      mImg.src = imgSrc;
      // Traspasar el estilo del filtro que puedan tener los placeholders
      mImg.style.filter = card.querySelector('img').style.filter;

      // Mostrar
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // bloquear scroll de fondo
    });
  });

  // Cerrar el modal
  modalClose.addEventListener('click', closeModal);
  
  // Cerrar al clickear el fondo (overlay negruzco)
  document.querySelector('.modal-bg').addEventListener('click', closeModal);

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  // ==========================================
  // 4. Toast Notification / Cart
  // ==========================================
  const addToCartBtn = document.getElementById('btn-add-main');
  const modalAddCartBtn = document.querySelector('.oval-btn.w-full');
  
  [addToCartBtn, modalAddCartBtn].forEach(btn => {
    if(!btn) return;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const originalText = btn.innerHTML;
      
      btn.innerHTML = '<i data-lucide="check"></i> AÑADIDO';
      btn.style.background = '#003545';
      btn.style.color = '#fff';
      
      // Refrescar íconos de Lucide recién inyectados
      lucide.createIcons();

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.style.color = '';
        if(btn.innerHTML.includes('arrow-up-right')){
            lucide.createIcons();
        }
      }, 2000);
    });
  });

});

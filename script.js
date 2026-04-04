// ============================================================
//  MAIA SPORT â€” Script Principal Premium
// ============================================================

// ============================================================
// CONFIGURACION GLOBAL
// ============================================================
const WA_NUMBER = '573142497844'; // Maia Sport — WhatsApp oficial

// ============================================================
// FASE 1: DATOS DEL CATÁLOGO COMPLETO
// Cada objeto = 1 modelo de zapato
// variantes[] = array de colores (cada uno con imagen propia)
// ============================================================
const CATALOGO = [
  // â”€â”€â”€ ADIDAS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 'adidas-11', marca: 'Adidas', nombre: 'Adidas Street Classic',
    precio: 159000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Negro / Dorado', hex: '#1a1a1a', img: "images/catalogo/zapatos/zapatos  adidas/zapato 11/WhatsApp Image 2026-04-02 at 11.09.50 AM.jpeg" },
      { color: 'Caramelo',       hex: '#c8924e', img: "images/catalogo/zapatos/zapatos  adidas/zapato 11/WhatsApp Image 2026-04-02 at 11.09.50 AM (1).jpeg" },
      { color: 'Blanco',         hex: '#f5f5f0', img: "images/catalogo/zapatos/zapatos  adidas/zapato 11/WhatsApp Image 2026-04-02 at 11.09.50 AM (2).jpeg" },
      { color: 'Rosado',         hex: '#e8a0b0', img: "images/catalogo/zapatos/zapatos  adidas/zapato 11/WhatsApp Image 2026-04-02 at 11.09.50 AM (3).jpeg" },
    ]
  },
  {
    id: 'adidas-15', marca: 'Adidas', nombre: 'Adidas Runner Pro',
    precio: 165000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Blanco',   hex: '#f5f5f0', img: "images/catalogo/zapatos/zapatos  adidas/zapato 15/WhatsApp Image 2026-04-02 at 11.09.53 AM.jpeg" },
      { color: 'Negro',    hex: '#1a1a1a', img: "images/catalogo/zapatos/zapatos  adidas/zapato 15/WhatsApp Image 2026-04-02 at 11.09.53 AM (1).jpeg" },
      { color: 'Plateado', hex: '#c0c0c0', img: "images/catalogo/zapatos/zapatos  adidas/zapato 15/WhatsApp Image 2026-04-02 at 11.09.53 AM (2).jpeg" },
    ]
  },
  {
    id: 'adidas-17', marca: 'Adidas', nombre: 'Adidas Retro Force',
    precio: 155000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Opción 1', hex: '#d4a0c0', img: "images/catalogo/zapatos/zapatos  adidas/zapato 17/WhatsApp Image 2026-04-02 at 11.09.51 AM (2).jpeg" },
      { color: 'Opción 2', hex: '#4a6080', img: "images/catalogo/zapatos/zapatos  adidas/zapato 17/WhatsApp Image 2026-04-02 at 11.09.51 AM (3).jpeg" },
      { color: 'Opción 3', hex: '#c8a080', img: "images/catalogo/zapatos/zapatos  adidas/zapato 17/WhatsApp Image 2026-04-02 at 11.09.51 AM (5).jpeg" },
      { color: 'Opción 4', hex: '#2a2a2a', img: "images/catalogo/zapatos/zapatos  adidas/zapato 17/WhatsApp Image 2026-04-02 at 11.09.51 AM (6).jpeg" },
    ]
  },
  {
    id: 'adidas-18', marca: 'Adidas', nombre: 'Adidas Urban Edge',
    precio: 162000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Opción 1', hex: '#1a1a1a', img: "images/catalogo/zapatos/zapatos  adidas/zapato 18/WhatsApp Image 2026-04-02 at 11.09.54 AM (9).jpeg" },
      { color: 'Opción 2', hex: '#f5f5f0', img: "images/catalogo/zapatos/zapatos  adidas/zapato 18/WhatsApp Image 2026-04-02 at 11.09.54 AM (10).jpeg" },
      { color: 'Opción 3', hex: '#c0a080', img: "images/catalogo/zapatos/zapatos  adidas/zapato 18/WhatsApp Image 2026-04-02 at 11.09.55 AM.jpeg" },
      { color: 'Opción 4', hex: '#607090', img: "images/catalogo/zapatos/zapatos  adidas/zapato 18/WhatsApp Image 2026-04-02 at 11.09.55 AM (1).jpeg" },
      { color: 'Opción 5', hex: '#d4a0b0', img: "images/catalogo/zapatos/zapatos  adidas/zapato 18/WhatsApp Image 2026-04-02 at 11.09.55 AM (2).jpeg" },
    ]
  },
  {
    id: 'adidas-22', marca: 'Adidas', nombre: 'Adidas Luxe Edition',
    precio: 170000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Opción 1', hex: '#c8a080', img: "images/catalogo/zapatos/zapatos  adidas/zapato 22/WhatsApp Image 2026-04-02 at 11.09.51 AM (1).jpeg" },
      { color: 'Opción 2', hex: '#1a1a1a', img: "images/catalogo/zapatos/zapatos  adidas/zapato 22/WhatsApp Image 2026-04-02 at 11.09.51 AM (4).jpeg" },
      { color: 'Opción 3', hex: '#f5f5f0', img: "images/catalogo/zapatos/zapatos  adidas/zapato 22/WhatsApp Image 2026-04-02 at 11.09.52 AM.jpeg" },
      { color: 'Opción 4', hex: '#6080a0', img: "images/catalogo/zapatos/zapatos  adidas/zapato 22/WhatsApp Image 2026-04-02 at 11.09.52 AM (1).jpeg" },
    ]
  },

  // â”€â”€â”€ NIKE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 'nike-5', marca: 'Nike', nombre: 'Nike Air Femme',
    precio: 175000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Opción 1', hex: '#b0b8c0', img: "images/catalogo/zapatos/zapatos  nike/zapato 5/WhatsApp Image 2026-03-29 at 7.13.07 PM.jpeg" },
      { color: 'Opción 2', hex: '#1a1a1a', img: "images/catalogo/zapatos/zapatos  nike/zapato 5/WhatsApp Image 2026-03-29 at 7.13.07 PM (1).jpeg" },
      { color: 'Opción 3', hex: '#d0b080', img: "images/catalogo/zapatos/zapatos  nike/zapato 5/WhatsApp Image 2026-03-29 at 7.13.08 PM.jpeg" },
      { color: 'Opción 4', hex: '#e8a0b0', img: "images/catalogo/zapatos/zapatos  nike/zapato 5/WhatsApp Image 2026-03-29 at 7.13.08 PM (1).jpeg" },
      { color: 'Opción 5', hex: '#f5f5f0', img: "images/catalogo/zapatos/zapatos  nike/zapato 5/WhatsApp Image 2026-03-29 at 7.13.09 PM.jpeg" },
    ]
  },
  {
    id: 'nike-6', marca: 'Nike', nombre: 'Nike Flow Sport',
    precio: 158000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Ãšnico', hex: '#c8c0b8', img: "images/catalogo/zapatos/zapatos  nike/zapato 6/WhatsApp Image 2026-03-29 at 7.12.51 PM.jpeg" },
    ]
  },
  {
    id: 'nike-10', marca: 'Nike', nombre: 'Nike City Stride',
    precio: 168000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Gris',    hex: '#b0b8c0', img: "images/catalogo/zapatos/zapatos  nike/zapato 10/WhatsApp Image 2026-03-29 at 7.13.04 PM.jpeg" },
      { color: 'Blanco',  hex: '#f5f5f0', img: "images/catalogo/zapatos/zapatos  nike/zapato 10/WhatsApp Image 2026-03-29 at 7.13.05 PM.jpeg" },
      { color: 'Carbón',  hex: '#2a2a2a', img: "images/catalogo/zapatos/zapatos  nike/zapato 10/WhatsApp Image 2026-03-29 at 7.13.06 PM.jpeg" },
    ]
  },
  {
    id: 'nike-13', marca: 'Nike', nombre: 'Nike Vibe Runner',
    precio: 172000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Opción 1', hex: '#e8c0d0', img: "images/catalogo/zapatos/zapatos  nike/zapato 13/WhatsApp Image 2026-04-02 at 11.09.53 AM (3).jpeg" },
      { color: 'Opción 2', hex: '#1a1a1a', img: "images/catalogo/zapatos/zapatos  nike/zapato 13/WhatsApp Image 2026-04-02 at 11.09.53 AM (4).jpeg" },
      { color: 'Opción 3', hex: '#c0b8b0', img: "images/catalogo/zapatos/zapatos  nike/zapato 13/WhatsApp Image 2026-04-02 at 11.09.53 AM (5).jpeg" },
      { color: 'Opción 4', hex: '#f5f5f0', img: "images/catalogo/zapatos/zapatos  nike/zapato 13/WhatsApp Image 2026-04-02 at 11.09.53 AM (6).jpeg" },
      { color: 'Opción 5', hex: '#8090c0', img: "images/catalogo/zapatos/zapatos  nike/zapato 13/WhatsApp Image 2026-04-02 at 11.09.53 AM (7).jpeg" },
    ]
  },
  {
    id: 'nike-19', marca: 'Nike', nombre: 'Nike Luxe Street',
    precio: 180000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Opción 1', hex: '#f5f5f0', img: "images/catalogo/zapatos/zapatos  nike/zapato 19/WhatsApp Image 2026-04-02 at 11.09.56 AM.jpeg" },
      { color: 'Opción 2', hex: '#c8a080', img: "images/catalogo/zapatos/zapatos  nike/zapato 19/WhatsApp Image 2026-04-02 at 11.09.56 AM (1).jpeg" },
      { color: 'Opción 3', hex: '#1a1a1a', img: "images/catalogo/zapatos/zapatos  nike/zapato 19/WhatsApp Image 2026-04-02 at 11.09.56 AM (2).jpeg" },
      { color: 'Opción 4', hex: '#d4a0c0', img: "images/catalogo/zapatos/zapatos  nike/zapato 19/WhatsApp Image 2026-04-02 at 11.09.56 AM (3).jpeg" },
    ]
  },
  {
    id: 'nike-21', marca: 'Nike', nombre: 'Nike Spectrum Pro',
    precio: 177000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Opción 1',  hex: '#e8c8d8', img: "images/catalogo/zapatos/zapatos  nike/zapato 21/WhatsApp Image 2026-04-02 at 11.09.56 AM (4).jpeg" },
      { color: 'Opción 2',  hex: '#1a1a1a', img: "images/catalogo/zapatos/zapatos  nike/zapato 21/WhatsApp Image 2026-04-02 at 11.09.56 AM (5).jpeg" },
      { color: 'Opción 3',  hex: '#c8a060', img: "images/catalogo/zapatos/zapatos  nike/zapato 21/WhatsApp Image 2026-04-02 at 11.09.57 AM.jpeg" },
      { color: 'Opción 4',  hex: '#f5f5f0', img: "images/catalogo/zapatos/zapatos  nike/zapato 21/WhatsApp Image 2026-04-02 at 11.09.57 AM (1).jpeg" },
      { color: 'Opción 5',  hex: '#8090c0', img: "images/catalogo/zapatos/zapatos  nike/zapato 21/WhatsApp Image 2026-04-02 at 11.09.57 AM (2).jpeg" },
      { color: 'Opción 6',  hex: '#5a7060', img: "images/catalogo/zapatos/zapatos  nike/zapato 21/WhatsApp Image 2026-04-02 at 11.09.57 AM (3).jpeg" },
      { color: 'Opción 7',  hex: '#d08080', img: "images/catalogo/zapatos/zapatos  nike/zapato 21/WhatsApp Image 2026-04-02 at 11.09.57 AM (4).jpeg" },
      { color: 'Opción 8',  hex: '#b0c0d0', img: "images/catalogo/zapatos/zapatos  nike/zapato 21/WhatsApp Image 2026-04-02 at 11.09.57 AM (5).jpeg" },
      { color: 'Opción 9',  hex: '#e0d0c8', img: "images/catalogo/zapatos/zapatos  nike/zapato 21/WhatsApp Image 2026-04-02 at 11.09.58 AM.jpeg" },
      { color: 'Opción 10', hex: '#404040', img: "images/catalogo/zapatos/zapatos  nike/zapato 21/WhatsApp Image 2026-04-02 at 11.09.58 AM (1).jpeg" },
      { color: 'Opción 11', hex: '#c0a0e0', img: "images/catalogo/zapatos/zapatos  nike/zapato 21/WhatsApp Image 2026-04-02 at 11.09.58 AM (2).jpeg" },
      { color: 'Opción 12', hex: '#90c090', img: "images/catalogo/zapatos/zapatos  nike/zapato 21/WhatsApp Image 2026-04-02 at 11.09.58 AM (3).jpeg" },
    ]
  },
  {
    id: 'nike-25', marca: 'Nike', nombre: 'Nike Altitude',
    precio: 163000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Opción 1', hex: '#f5f5f0', img: "images/catalogo/zapatos/zapatos  nike/zapato 25/WhatsApp Image 2026-04-02 at 11.10.01 AM (2).jpeg" },
      { color: 'Opción 2', hex: '#1a1a1a', img: "images/catalogo/zapatos/zapatos  nike/zapato 25/WhatsApp Image 2026-04-02 at 11.10.01 AM (3).jpeg" },
      { color: 'Opción 3', hex: '#c8b0a0', img: "images/catalogo/zapatos/zapatos  nike/zapato 25/WhatsApp Image 2026-04-02 at 11.10.02 AM.jpeg" },
    ]
  },

  // â”€â”€â”€ NEW BALANCE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 'nb-4', marca: 'New Balance', nombre: 'NB 327 Lifestyle',
    precio: 182000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Blanco/Negro', hex: '#f5f5f0', img: "images/catalogo/zapatos/zapato new balance/zapato 4/WhatsApp Image 2026-03-29 at 7.12.52 PM.jpeg" },
      { color: 'Beige',        hex: '#d4c0a8', img: "images/catalogo/zapatos/zapato new balance/zapato 4/WhatsApp Image 2026-03-29 at 7.12.51 PM (1).jpeg" },
      { color: 'Opción 3',     hex: '#8090c0', img: "images/catalogo/zapatos/zapato new balance/zapato 4/WhatsApp Image 2026-03-29 at 7.12.52 PM (1).jpeg" },
      { color: 'Opción 4',     hex: '#1a1a1a', img: "images/catalogo/zapatos/zapato new balance/zapato 4/WhatsApp Image 2026-03-29 at 7.12.53 PM.jpeg" },
      { color: 'Miniatura',    hex: '#c8a080', img: "images/catalogo/zapatos/zapato new balance/zapato 4/WhatsApp Image 2026-03-29 at 7.12.54 PM.jpeg" },
    ]
  },
  {
    id: 'nb-9', marca: 'New Balance', nombre: 'NB 860 Urban',
    precio: 170000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Opción 1', hex: '#1a1a1a', img: "images/catalogo/zapatos/zapato new balance/zapato 9/WhatsApp Image 2026-03-29 at 7.12.59 PM.jpeg" },
      { color: 'Opción 2', hex: '#f5f5f0', img: "images/catalogo/zapatos/zapato new balance/zapato 9/WhatsApp Image 2026-03-29 at 7.13.01 PM.jpeg" },
    ]
  },
  {
    id: 'nb-16', marca: 'New Balance', nombre: 'NB 550 Pro',
    precio: 175000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Opción 1', hex: '#f5f5f0', img: "images/catalogo/zapatos/zapato new balance/zapato 16/WhatsApp Image 2026-04-02 at 11.09.54 AM (1).jpeg" },
      { color: 'Opción 2', hex: '#1a1a1a', img: "images/catalogo/zapatos/zapato new balance/zapato 16/WhatsApp Image 2026-04-02 at 11.09.54 AM (4).jpeg" },
      { color: 'Opción 3', hex: '#d4c0a8', img: "images/catalogo/zapatos/zapato new balance/zapato 16/WhatsApp Image 2026-04-02 at 11.09.54 AM (6).jpeg" },
      { color: 'Opción 4', hex: '#8090c0', img: "images/catalogo/zapatos/zapato new balance/zapato 16/WhatsApp Image 2026-04-02 at 11.09.54 AM (7).jpeg" },
    ]
  },
  {
    id: 'nb-23', marca: 'New Balance', nombre: 'NB Classic Edition',
    precio: 185000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Opción 1', hex: '#c8c0b0', img: "images/catalogo/zapatos/zapato new balance/zapato 23/WhatsApp Image 2026-04-02 at 11.09.49 AM.jpeg" },
      { color: 'Opción 2', hex: '#f5f5f0', img: "images/catalogo/zapatos/zapato new balance/zapato 23/WhatsApp Image 2026-04-02 at 11.09.49 AM (1).jpeg" },
      { color: 'Opción 3', hex: '#1a1a1a', img: "images/catalogo/zapatos/zapato new balance/zapato 23/WhatsApp Image 2026-04-02 at 11.09.49 AM (2).jpeg" },
      { color: 'Opción 4', hex: '#d4a0c0', img: "images/catalogo/zapatos/zapato new balance/zapato 23/WhatsApp Image 2026-04-02 at 11.09.49 AM (3).jpeg" },
      { color: 'Opción 5', hex: '#8090a0', img: "images/catalogo/zapatos/zapato new balance/zapato 23/WhatsApp Image 2026-04-02 at 11.09.49 AM (4).jpeg" },
    ]
  },
  {
    id: 'nb-24', marca: 'New Balance', nombre: 'NB Track & Style',
    precio: 168000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Opción 1', hex: '#f5f5f0', img: "images/catalogo/zapatos/zapato new balance/zapato 24/WhatsApp Image 2026-04-02 at 11.09.59 AM (2).jpeg" },
      { color: 'Opción 2', hex: '#1a1a1a', img: "images/catalogo/zapatos/zapato new balance/zapato 24/WhatsApp Image 2026-04-02 at 11.09.59 AM (3).jpeg" },
      { color: 'Opción 3', hex: '#c8a080', img: "images/catalogo/zapatos/zapato new balance/zapato 24/WhatsApp Image 2026-04-02 at 11.09.59 AM (4).jpeg" },
    ]
  },
  {
    id: 'nb-26', marca: 'New Balance', nombre: 'NB Signature',
    precio: 190000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Opción 1', hex: '#d4c0a8', img: "images/catalogo/zapatos/zapato new balance/zapato 26/WhatsApp Image 2026-04-02 at 11.10.00 AM (1).jpeg" },
      { color: 'Opción 2', hex: '#1a1a1a', img: "images/catalogo/zapatos/zapato new balance/zapato 26/WhatsApp Image 2026-04-02 at 11.10.00 AM (4).jpeg" },
    ]
  },

  // â”€â”€â”€ PUMA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 'puma-12', marca: 'Puma', nombre: 'Puma Glam Sport',
    precio: 152000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Opción 1', hex: '#f5f5f0', img: "images/catalogo/zapatos/zapatos puma/zapato 12/WhatsApp Image 2026-04-02 at 11.09.50 AM (4).jpeg" },
      { color: 'Opción 2', hex: '#e8a0b0', img: "images/catalogo/zapatos/zapatos puma/zapato 12/WhatsApp Image 2026-04-02 at 11.09.50 AM (5).jpeg" },
      { color: 'Opción 3', hex: '#1a1a1a', img: "images/catalogo/zapatos/zapatos puma/zapato 12/WhatsApp Image 2026-04-02 at 11.09.50 AM (6).jpeg" },
      { color: 'Opción 4', hex: '#c0a0e0', img: "images/catalogo/zapatos/zapatos puma/zapato 12/WhatsApp Image 2026-04-02 at 11.09.51 AM.jpeg" },
    ]
  },
  {
    id: 'puma-14', marca: 'Puma', nombre: 'Puma Veloz Femme',
    precio: 155000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Opción 1', hex: '#d4a0c0', img: "images/catalogo/zapatos/zapatos puma/zapato 14/WhatsApp Image 2026-04-02 at 11.09.55 AM (3).jpeg" },
      { color: 'Opción 2', hex: '#c8c0b0', img: "images/catalogo/zapatos/zapatos puma/zapato 14/WhatsApp Image 2026-04-02 at 11.09.55 AM (4).jpeg" },
      { color: 'Opción 3', hex: '#1a1a1a', img: "images/catalogo/zapatos/zapatos puma/zapato 14/WhatsApp Image 2026-04-02 at 11.09.55 AM (5).jpeg" },
      { color: 'Opción 4', hex: '#8090c0', img: "images/catalogo/zapatos/zapatos puma/zapato 14/WhatsApp Image 2026-04-02 at 11.09.55 AM (6).jpeg" },
    ]
  },

  // â”€â”€â”€ DIESEL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 'diesel-3', marca: 'Diesel', nombre: 'Diesel Industrial Edge',
    precio: 195000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'ClÃ¡sico',  hex: '#1a1a1a', img: "images/catalogo/zapatos/zapato disel/zapato 3/WhatsApp Image 2026-03-29 at 3.30.42 PM.jpeg" },
      { color: 'Caramelo', hex: '#c8924e', img: "images/catalogo/zapatos/zapato disel/zapato 3/WhatsApp Image 2026-03-29 at 7.12.43 PM.jpeg" },
    ]
  },

  // â”€â”€â”€ VARIADOS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 'variado-1', marca: 'Variado', nombre: 'Urban Casual Mix',
    precio: 148000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Opción 1', hex: '#c8c0b0', img: "images/catalogo/zapatos/zapato variado/zapato  1/WhatsApp Image 2026-03-29 at 7.12.41 PM.jpeg" },
      { color: 'Opción 2', hex: '#f5f5f0', img: "images/catalogo/zapatos/zapato variado/zapato  1/WhatsApp Image 2026-03-29 at 7.12.42 PM.jpeg" },
      { color: 'Opción 3', hex: '#1a1a1a', img: "images/catalogo/zapatos/zapato variado/zapato  1/WhatsApp Image 2026-03-29 at 7.12.46 PM.jpeg" },
    ]
  },
  {
    id: 'variado-2', marca: 'Variado', nombre: 'Lifestyle Chic',
    precio: 145000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Opción 1', hex: '#d4c0a8', img: "images/catalogo/zapatos/zapato variado/zapato 2/WhatsApp Image 2026-03-29 at 7.12.45 PM.jpeg" },
      { color: 'Opción 2', hex: '#1a1a1a', img: "images/catalogo/zapatos/zapato variado/zapato 2/WhatsApp Image 2026-03-29 at 7.12.47 PM.jpeg" },
      { color: 'Opción 3', hex: '#8090c0', img: "images/catalogo/zapatos/zapato variado/zapato 2/WhatsApp Image 2026-03-29 at 7.12.48 PM.jpeg" },
      { color: 'Opción 4', hex: '#e8a0b0', img: "images/catalogo/zapatos/zapato variado/zapato 2/WhatsApp Image 2026-03-29 at 7.12.49 PM.jpeg" },
      { color: 'Opción 5', hex: '#c0c0c0', img: "images/catalogo/zapatos/zapato variado/zapato 2/WhatsApp Image 2026-03-29 at 7.12.50 PM.jpeg" },
      { color: 'Opción 6', hex: '#f5f5f0', img: "images/catalogo/zapatos/zapato variado/zapato 2/WhatsApp Image 2026-03-29 at 7.12.50 PM (1).jpeg" },
    ]
  },
  {
    id: 'variado-7', marca: 'Variado', nombre: 'Sneaker Crop',
    precio: 142000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Opción 1', hex: '#e8c8d8', img: "images/catalogo/zapatos/zapato variado/zapato 7/WhatsApp Image 2026-03-29 at 7.12.55 PM.jpeg" },
      { color: 'Opción 2', hex: '#c0b0a0', img: "images/catalogo/zapatos/zapato variado/zapato 7/WhatsApp Image 2026-03-29 at 7.12.57 PM.jpeg" },
    ]
  },
  {
    id: 'variado-8', marca: 'Variado', nombre: 'Street Femme',
    precio: 150000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Opción 1', hex: '#1a1a1a', img: "images/catalogo/zapatos/zapato variado/zapato 8/WhatsApp Image 2026-03-29 at 7.13.02 PM.jpeg" },
      { color: 'Opción 2', hex: '#d4c0a8', img: "images/catalogo/zapatos/zapato variado/zapato 8/WhatsApp Image 2026-03-29 at 7.13.05 PM (1).jpeg" },
    ]
  },
  {
    id: 'variado-20', marca: 'Variado', nombre: 'Luxe Casual Vibes',
    precio: 156000, tallas: [35,36,37,38,39,40],
    variantes: [
      { color: 'Opción 1', hex: '#c8a080', img: "images/catalogo/zapatos/zapato variado/zapato 20/WhatsApp Image 2026-04-02 at 11.09.58 AM (4).jpeg" },
      { color: 'Opción 2', hex: '#f5f5f0', img: "images/catalogo/zapatos/zapato variado/zapato 20/WhatsApp Image 2026-04-02 at 11.09.58 AM (5).jpeg" },
      { color: 'Opción 3', hex: '#1a1a1a', img: "images/catalogo/zapatos/zapato variado/zapato 20/WhatsApp Image 2026-04-02 at 11.09.59 AM.jpeg" },
    ]
  },
,
  {
    id: 'ropa-1', marca: 'Maia Active', categoria: 'ROPA', nombre: 'Conjunto Ropa 1',
    precio: 95000, tallas: ['S','M','L','XL'],
    variantes: [
      { color: 'Color 1', hex: '#ffffff', img: "images/catalogo/ropa/ropa 1/image1.png" },
      { color: 'Color 2', hex: '#ffffff', img: "images/catalogo/ropa/ropa 1/image18.jpg" },
      { color: 'Color 3', hex: '#ffffff', img: "images/catalogo/ropa/ropa 1/image19.jpg" },
      { color: 'Color 4', hex: '#ffffff', img: "images/catalogo/ropa/ropa 1/image2.jpg" },
      { color: 'Color 5', hex: '#ffffff', img: "images/catalogo/ropa/ropa 1/image64.png" },
    ]
  },
  {
    id: 'ropa-2', marca: 'Maia Active', categoria: 'ROPA', nombre: 'Conjunto Ropa 2',
    precio: 95000, tallas: ['S','M','L','XL'],
    variantes: [
      { color: 'Color 1', hex: '#ffffff', img: "images/catalogo/ropa/ropa 2/image11.png" },
      { color: 'Color 2', hex: '#ffffff', img: "images/catalogo/ropa/ropa 2/image12.png" },
      { color: 'Color 3', hex: '#ffffff', img: "images/catalogo/ropa/ropa 2/image7.png" },
    ]
  },
  {
    id: 'ropa-3', marca: 'Maia Active', categoria: 'ROPA', nombre: 'Conjunto Ropa 3',
    precio: 95000, tallas: ['S','M','L','XL'],
    variantes: [
      { color: 'Color 1', hex: '#ffffff', img: "images/catalogo/ropa/ropa 3/image14.jpg" },
      { color: 'Color 2', hex: '#ffffff', img: "images/catalogo/ropa/ropa 3/image26.jpg" },
    ]
  },
  {
    id: 'ropa-4', marca: 'Maia Active', categoria: 'ROPA', nombre: 'Conjunto Ropa 4',
    precio: 95000, tallas: ['S','M','L','XL'],
    variantes: [
      { color: 'Color 1', hex: '#ffffff', img: "images/catalogo/ropa/ropa 4/image71.png" },
      { color: 'Color 2', hex: '#ffffff', img: "images/catalogo/ropa/ropa 4/image72.png" },
    ]
  },
  {
    id: 'ropa-5', marca: 'Maia Active', categoria: 'ROPA', nombre: 'Conjunto Ropa 5',
    precio: 95000, tallas: ['S','M','L','XL'],
    variantes: [
      { color: 'Color 1', hex: '#ffffff', img: "images/catalogo/ropa/ropa 5/ChatGPT Image 1 abr 2026, 19_32_36.png" },
      { color: 'Color 2', hex: '#ffffff', img: "images/catalogo/ropa/ropa 5/image30.jpg" },
      { color: 'Color 3', hex: '#ffffff', img: "images/catalogo/ropa/ropa 5/image33.jpg" },
      { color: 'Color 4', hex: '#ffffff', img: "images/catalogo/ropa/ropa 5/image73.png" },
      { color: 'Color 5', hex: '#ffffff', img: "images/catalogo/ropa/ropa 5/image74.png" },
    ]
  },
  {
    id: 'ropa-6', marca: 'Maia Active', categoria: 'ROPA', nombre: 'Conjunto Ropa 6',
    precio: 95000, tallas: ['S','M','L','XL'],
    variantes: [
      { color: 'Color 1', hex: '#ffffff', img: "images/catalogo/ropa/ropa 6/image27.jpg" },
      { color: 'Color 2', hex: '#ffffff', img: "images/catalogo/ropa/ropa 6/lucero.PNG" },
    ]
  },
  {
    id: 'ropa-7', marca: 'Maia Active', categoria: 'ROPA', nombre: 'Conjunto Ropa 7',
    precio: 95000, tallas: ['S','M','L','XL'],
    variantes: [
      { color: 'Color 1', hex: '#ffffff', img: "images/catalogo/ropa/ropa 7/image39.jpg" },
      { color: 'Color 2', hex: '#ffffff', img: "images/catalogo/ropa/ropa 7/image40.jpg" },
      { color: 'Color 3', hex: '#ffffff', img: "images/catalogo/ropa/ropa 7/image79.png" },
    ]
  },
  {
    id: 'ropa-8', marca: 'Maia Active', categoria: 'ROPA', nombre: 'Conjunto Ropa 8',
    precio: 95000, tallas: ['S','M','L','XL'],
    variantes: [
      { color: 'Color 1', hex: '#ffffff', img: "images/catalogo/ropa/ropa 8/image22.png" },
      { color: 'Color 2', hex: '#ffffff', img: "images/catalogo/ropa/ropa 8/image31.jpg" },
      { color: 'Color 3', hex: '#ffffff', img: "images/catalogo/ropa/ropa 8/image34.jpg" },
      { color: 'Color 4', hex: '#ffffff', img: "images/catalogo/ropa/ropa 8/image63.png" },
      { color: 'Color 5', hex: '#ffffff', img: "images/catalogo/ropa/ropa 8/image67.png" },
      { color: 'Color 6', hex: '#ffffff', img: "images/catalogo/ropa/ropa 8/image68.png" },
      { color: 'Color 7', hex: '#ffffff', img: "images/catalogo/ropa/ropa 8/image8.jpg" },
    ]
  },
  {
    id: 'ropa-9', marca: 'Maia Active', categoria: 'ROPA', nombre: 'Conjunto Ropa 9',
    precio: 95000, tallas: ['S','M','L','XL'],
    variantes: [
      { color: 'Color 1', hex: '#ffffff', img: "images/catalogo/ropa/ropa 9/image5.png" },
    ]
  },
  {
    id: 'ropa-10', marca: 'Maia Active', categoria: 'ROPA', nombre: 'Conjunto Ropa 10',
    precio: 95000, tallas: ['S','M','L','XL'],
    variantes: [
      { color: 'Color 1', hex: '#ffffff', img: "images/catalogo/ropa/ropa 10/image4.png" },
      { color: 'Color 2', hex: '#ffffff', img: "images/catalogo/ropa/ropa 10/image6.png" },
    ]
  },
  {
    id: 'ropa-11', marca: 'Maia Active', categoria: 'ROPA', nombre: 'Conjunto Ropa 11',
    precio: 95000, tallas: ['S','M','L','XL'],
    variantes: [
      { color: 'Color 1', hex: '#ffffff', img: "images/catalogo/ropa/ropa 11/image46.jpeg" },
      { color: 'Color 2', hex: '#ffffff', img: "images/catalogo/ropa/ropa 11/image77.png" },
      { color: 'Color 3', hex: '#ffffff', img: "images/catalogo/ropa/ropa 11/sdfdsf.PNG" },
    ]
  },
  {
    id: 'ropa-12', marca: 'Maia Active', categoria: 'ROPA', nombre: 'Conjunto Ropa 12',
    precio: 95000, tallas: ['S','M','L','XL'],
    variantes: [
      { color: 'Color 1', hex: '#ffffff', img: "images/catalogo/ropa/ropa 12/image48.png" },
    ]
  },
  {
    id: 'ropa-13', marca: 'Maia Active', categoria: 'ROPA', nombre: 'Conjunto Ropa 13',
    precio: 95000, tallas: ['S','M','L','XL'],
    variantes: [
      { color: 'Color 1', hex: '#ffffff', img: "images/catalogo/ropa/ropa 13/image47.jpeg" },
    ]
  },
  {
    id: 'ropa-14', marca: 'Maia Active', categoria: 'ROPA', nombre: 'Conjunto Ropa 14',
    precio: 95000, tallas: ['S','M','L','XL'],
    variantes: [
      { color: 'Color 1', hex: '#ffffff', img: "images/catalogo/ropa/ropa 14/image80.png" },
    ]
  },
  {
    id: 'ropa-15', marca: 'Maia Active', categoria: 'ROPA', nombre: 'Conjunto Ropa 15',
    precio: 95000, tallas: ['S','M','L','XL'],
    variantes: [
      { color: 'Color 1', hex: '#ffffff', img: "images/catalogo/ropa/ropa 15/dsfsdf.PNG" },
      { color: 'Color 2', hex: '#ffffff', img: "images/catalogo/ropa/ropa 15/fffdsgsd.PNG" },
    ]
  },
  {
    id: 'ropa-16', marca: 'Maia Active', categoria: 'ROPA', nombre: 'Conjunto Ropa 16',
    precio: 95000, tallas: ['S','M','L','XL'],
    variantes: [
      { color: 'Color 1', hex: '#ffffff', img: "images/catalogo/ropa/ropa 16/Captura.PNG" },
      { color: 'Color 2', hex: '#ffffff', img: "images/catalogo/ropa/ropa 16/fsdfsdf.PNG" },
      { color: 'Color 3', hex: '#ffffff', img: "images/catalogo/ropa/ropa 16/kdnlskadnk.PNG" },
    ]
  },
  {
    id: 'ropa-17', marca: 'Maia Active', categoria: 'ROPA', nombre: 'Conjunto Ropa 17',
    precio: 95000, tallas: ['S','M','L','XL'],
    variantes: [
      { color: 'Color 1', hex: '#ffffff', img: "images/catalogo/ropa/ropa 17/fhdfgdfv.PNG" },
    ]
  },
];

// ============================================================
// ESTADO GLOBAL DEL CARRITO
// ============================================================
let cartItems = [];
let CURRENT_CATEGORY = 'ZAPATOS';

// ============================================================
// INICIALIZACIÃ“N PRINCIPAL
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
});

// ============================================================
// FASE 5a: LOADER DE ENTRADA
// ============================================================
function initLoader() {
  const loader = document.getElementById('maiaLoader');
  if (!loader) { init(); return; }
  setTimeout(() => {
    loader.classList.add('hide');
    loader.addEventListener('transitionend', () => loader.remove(), { once: true });
    init();
  }, 1800);
}

// ============================================================
// INIT PRINCIPAL (después del loader)
// ============================================================
function init() {
  lucide.createIcons();
  initCursor();
  initNavScroll();
  initMobileNav();
  initHeroParallax();
  initTilt();
  initMagneticBtns();
  renderCatalog('TODOS');
  initFilterTabs();
  initModal();
  initCartDrawer();
  initScrollReveal();
  initHeroSelectors();
  initCategorySidebar();
}

// ============================================================
// MOBILE NAV DRAWER
// ============================================================
function initMobileNav() {
  const menuBtn   = document.getElementById('mobileMenuBtn');
  const overlay   = document.getElementById('mobileNavOverlay');
  const drawer    = document.getElementById('mobileNavDrawer');
  const closeBtn  = document.getElementById('mobileNavClose');
  const navLinks  = document.querySelectorAll('.mobile-nav-link');
  if (!menuBtn || !drawer) return;

  function openMobileNav() {
    drawer.classList.add('open');
    overlay.classList.add('active');
    drawer.setAttribute('aria-hidden', 'false');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    drawer.setAttribute('aria-hidden', 'true');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMobileNav);
  closeBtn?.addEventListener('click', closeMobileNav);
  overlay.addEventListener('click', closeMobileNav);
  navLinks.forEach(link => link.addEventListener('click', closeMobileNav));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileNav(); });
}

// ============================================================
// CURSOR PERSONALIZADO
// ============================================================
function initCursor() {
  const cursor = document.getElementById('customCursor');
  if (!cursor) return;
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, .product-card, .catalog-main-feature, .filter-tab')) {
      cursor.classList.add('hover');
    } else {
      cursor.classList.remove('hover');
    }
  });
}

// ============================================================
// NAVBAR â€” Frosted Glass al hacer scroll
// ============================================================
function initNavScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}

// ============================================================
// PARALLAX HERO
// ============================================================
function initHeroParallax() {
  const heroImgs   = document.querySelectorAll('.hero-img');
  const bgGraffiti = document.querySelector('.bg-graffiti');
  if (!heroImgs.length) return;

  // Parallax desactivado en dispositivos tactiles:
  // las imagenes se centran via CSS transform: translate(-50%, -50%)
  const isTouchDevice = window.matchMedia('(hover: none)').matches || ('ontouchstart' in window);
  if (isTouchDevice) return;

  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    heroImgs.forEach(img => {
      if (img.closest('.shoes-slideshow')) {
        // Mantiene centrado base (-50%) + desplazamiento de parallax
        img.style.transform = `translate(calc(-50% + ${x * 0.6}px), calc(-50% + ${y * 0.6}px))`;
      } else {
        img.style.transform = `translate(${x * 0.6}px, ${y * 0.6}px)`;
      }
    });
    if (bgGraffiti) bgGraffiti.style.transform = `translateX(calc(-50% + ${x * 1.5}px))`;
  });
}

// ============================================================
// TILT 3D EN TARJETAS
// ============================================================
function initTilt() {
  document.querySelectorAll('[data-tilt]').forEach(el => {
    el.addEventListener('mousemove', function(e) {
      const rect   = this.getBoundingClientRect();
      const cx     = rect.width  / 2;
      const cy     = rect.height / 2;
      const factor = 18;
      const rx     = ((e.clientY - rect.top  - cy) / factor) * -1;
      const ry     =  (e.clientX - rect.left - cx) / factor;
      this.style.transform    = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`;
      this.style.transition   = 'transform 0.1s ease-out';
      this.style.zIndex       = '10';
    });
    el.addEventListener('mouseleave', function() {
      this.style.transform  = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)';
      this.style.transition = 'transform 0.5s ease-out';
      this.style.zIndex     = '1';
    });
  });
}

// ============================================================
// BOTONES MAGNÃ‰TICOS
// ============================================================
function initMagneticBtns() {
  document.querySelectorAll('.circular-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width  / 2;
      const y = e.clientY - rect.top  - rect.height / 2;
      btn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0,0)';
    });
  });
}

// ============================================================
// FASE 2: RENDER DINÁMICO DEL CATÁLOGO
// ============================================================
function renderCatalog(filtro) {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  const listaCategoria = CATALOGO.filter(p => (p.categoria || 'ZAPATOS') === CURRENT_CATEGORY);
  const lista = filtro === 'TODOS'
    ? listaCategoria
    : listaCategoria.filter(p => p.marca.toUpperCase() === filtro.toUpperCase());

  // Fade out solo opacidad
  grid.style.opacity = '0';

  setTimeout(() => {
    grid.innerHTML = '';
    lista.forEach((prod, idx) => renderCard(prod, idx, grid));
    lucide.createIcons();
    initTilt();
    // Fade in con stagger
    grid.style.transition = 'opacity 0.4s ease';
    grid.style.opacity = '1';
    // Stagger en cada card
    grid.querySelectorAll('.product-card').forEach((card, i) => {
      card.style.opacity   = '0';
      card.style.transition = `opacity 0.45s ease ${i * 0.05}s`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          card.style.opacity = '1';
        });
      });
    });
  }, 300);
}

function renderCard(prod, idx, grid) {
  const activeVariant = prod.variantes[0];
  const card = document.createElement('article');
  card.className = 'product-card chamfered';
  // Sin data-tilt: eliminado el efecto 3D
  card.dataset.id = prod.id;

  const numColores = prod.variantes.length;
  const colorLabel = numColores === 1 ? '1 color disponible' : `${numColores} colores disponibles`;

  const swatchesHTML = prod.variantes.map((v, i) => `
    <button class="swatch-dot ${i === 0 ? 'active' : ''}"
      data-img="${v.img}" data-color="${v.color}"
      title="${v.color}"
      style="background:${v.hex}; border-color: ${i === 0 ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.25)'}">
    </button>
  `).join('');

  // Mensaje de WhatsApp preformateado
  const waMsg = encodeURIComponent(`¡Hola Maia Sport! 💟 Me interesa el *${prod.nombre}* de *${prod.marca}* en color *${activeVariant.color}*. Precio: $${prod.precio.toLocaleString('es-CO')} COP. ¿Tienen disponibilidad?`);
  const waLink = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;

  card.innerHTML = `
    <div class="card-image-box">
      <img src="${activeVariant.img}" alt="${prod.nombre} — ${prod.marca}" class="card-main-img" loading="lazy" decoding="async">
      <div class="card-badge-disponible" aria-label="Disponible">DISPONIBLE</div>
      <div class="card-img-overlay">
        <button class="card-quick-view-btn" data-id="${prod.id}">
          <i data-lucide="eye"></i> VER DETALLE
        </button>
      </div>
    </div>
    <div class="card-info">
      <div class="card-headings">
        <span class="card-marca">${prod.marca}</span>
        <h4>${prod.nombre}</h4>
        <p class="sub-heading card-color-label">${activeVariant.color}</p>
      </div>
      <div class="card-color-count">${colorLabel}</div>
      <div class="card-bottom">
        <span class="price">$${prod.precio.toLocaleString('es-CO')}</span>
        <div class="color-swatches-dots">${swatchesHTML}</div>
      </div>
      <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="card-wa-btn" onclick="if(navigator.vibrate) navigator.vibrate(40); event.stopPropagation()" aria-label="Consultar ${prod.nombre} por WhatsApp">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        Consultar por WhatsApp
      </a>
    </div>
  `;

  // Actualizar link de WhatsApp al cambiar swatch
  function updateWaLink(color) {
    const btn = card.querySelector('.card-wa-btn');
    const msg = encodeURIComponent(`¡Hola Maia Sport! 💟 Me interesa el *${prod.nombre}* de *${prod.marca}* en color *${color}*. Precio: $${prod.precio.toLocaleString('es-CO')} COP. ¿Tienen disponibilidad?`);
    if (btn) btn.href = `https://wa.me/${WA_NUMBER}?text=${msg}`;
  }

  // Eventos de swatches de color
  const swatches = card.querySelectorAll('.swatch-dot');
  swatches.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const img   = card.querySelector('.card-main-img');
      const label = card.querySelector('.card-color-label');
      img.style.opacity = '0';
      setTimeout(() => {
        img.src = dot.dataset.img;
        img.onload = () => { img.style.opacity = '1'; };
      }, 200);
      label.textContent = dot.dataset.color;
      updateWaLink(dot.dataset.color);
      swatches.forEach(s => {
        s.classList.remove('active');
        s.style.borderColor = 'rgba(255,255,255,0.25)';
      });
      dot.classList.add('active');
      dot.style.borderColor = 'rgba(255,255,255,0.85)';
    });
  });

  // Clic en la tarjeta â†’ abrir modal
  if (numColores > 1) {
    let currentIdx = 0;
    let rotationActive = true;
    const rotationInterval = setInterval(() => {
      if (!rotationActive) return;
      currentIdx = (currentIdx + 1) % numColores;
      const targetDot = swatches[currentIdx];
      if (targetDot) {
        const img = card.querySelector('.card-main-img');
        const label = card.querySelector('.card-color-label');
        if (img) {
          img.style.opacity = '0';
          setTimeout(() => {
            img.src = targetDot.dataset.img;
            img.onload = () => { if(img) img.style.opacity = '1'; };
          }, 200);
        }
        if (label) label.textContent = targetDot.dataset.color;
        updateWaLink(targetDot.dataset.color);
        swatches.forEach(s => {
          s.classList.remove('active');
          s.style.borderColor = 'rgba(255,255,255,0.25)';
        });
        targetDot.classList.add('active');
        targetDot.style.borderColor = 'rgba(255,255,255,0.85)';
      }
    }, 4000);

    swatches.forEach(dot => {
      dot.addEventListener('mousedown', () => {
        rotationActive = false;
        clearInterval(rotationInterval);
      });
    });
  }

  card.addEventListener('click', () => openModal(prod));

  grid.appendChild(card);
}

// ============================================================
// FASE 3: FILTROS POR MARCA
// ============================================================
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      renderCatalog(tab.dataset.filter);
    });
  });
}

// ============================================================
// FASE 4: MODAL DE DETALLE PREMIUM
// ============================================================
const modalEl       = document.getElementById('productModal');
let   activeProduct = null;
let   activeVariantIdx = 0;

function initModal() {
  if (!modalEl) return;
  document.getElementById('modalClose')?.addEventListener('click', closeModal);
  document.getElementById('modalBg')?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Delegar clicks en botones "ver detalle"
  document.addEventListener('click', e => {
    const btn = e.target.closest('.card-quick-view-btn');
    if (btn) {
      e.stopPropagation();
      const prod = CATALOGO.find(p => p.id === btn.dataset.id);
      if (prod) openModal(prod);
    }
  });
}

function openModal(prod) {
  activeProduct    = prod;
  activeVariantIdx = 0;
  renderModal(prod, 0);
  modalEl.classList.add('active');
  modalEl.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  // Ocultar sidebar flotante para no tapar botones del modal
  const sidebar = document.getElementById('categorySidebar');
  if (sidebar) {
    sidebar.style.opacity      = '0';
    sidebar.style.transform    = 'translateX(-50%) translateY(20px)';
    sidebar.style.pointerEvents = 'none';
  }
  setTimeout(() => document.getElementById('modalClose')?.focus(), 100);
}

function closeModal() {
  if (!modalEl) return;
  modalEl.classList.remove('active');
  modalEl.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  // Volver a mostrar el sidebar flotante (si el footer no está visible)
  const sidebar = document.getElementById('categorySidebar');
  const footer  = document.getElementById('footer-section');
  if (sidebar) {
    const footerRect = footer ? footer.getBoundingClientRect() : null;
    const footerVisible = footerRect && footerRect.top < window.innerHeight * 0.92;
    if (!footerVisible) {
      sidebar.style.opacity      = '1';
      sidebar.style.transform    = 'translateX(-50%) translateY(0)';
      sidebar.style.pointerEvents = 'auto';
    }
  }
}

function renderModal(prod, variantIdx) {
  document.getElementById('modalTitle').textContent  = prod.nombre;
  document.getElementById('modalMarca').textContent  = prod.marca;
  document.getElementById('modalPrice').textContent  = `$${prod.precio.toLocaleString('es-CO')}`;
  document.getElementById('modalColorLabel').textContent = prod.variantes[variantIdx].color;

  // Imagen principal
  const mainImg = document.getElementById('modalMainImg');
  mainImg.src = prod.variantes[variantIdx].img;

  // Thumbnails de variantes
  const thumbsContainer = document.getElementById('modalThumbs');
  thumbsContainer.innerHTML = '';
  prod.variantes.forEach((v, i) => {
    const btn = document.createElement('button');
    btn.className = `modal-thumb ${i === variantIdx ? 'active' : ''}`;
    btn.innerHTML = `<img src="${v.img}" alt="${v.color}" loading="lazy">
      <span class="thumb-dot" style="background:${v.hex}"></span>`;
    btn.addEventListener('click', () => {
      activeVariantIdx = i;
      mainImg.style.opacity = '0';
      mainImg.style.transform = 'scale(0.95)';
      setTimeout(() => {
        mainImg.src = v.img;
        mainImg.onload = () => {
          mainImg.style.opacity   = '1';
          mainImg.style.transform = 'scale(1)';
        };
        document.getElementById('modalColorLabel').textContent = v.color;
        thumbsContainer.querySelectorAll('.modal-thumb').forEach((t, ti) =>
          t.classList.toggle('active', ti === i));
      }, 200);
    });
    thumbsContainer.appendChild(btn);
  });

  // Tallas
  const tallasContainer = document.getElementById('modalTallas');
  tallasContainer.innerHTML = '';
  prod.tallas.forEach(t => {
    const btn = document.createElement('button');
    btn.className = 'talla-btn';
    btn.textContent = t;
    btn.addEventListener('click', () => {
      tallasContainer.querySelectorAll('.talla-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
    tallasContainer.appendChild(btn);
  });

  // Botón WhatsApp
  const waBtn = document.getElementById('modalWhatsapp');
  if (waBtn) {
    waBtn.onclick = () => {
      const talla = tallasContainer.querySelector('.talla-btn.active')?.textContent || 'Sin talla';
      const color = prod.variantes[activeVariantIdx].color;
      const msg   = encodeURIComponent(`Hola Maia Sport! ðŸ’• Me interesa:\n*${prod.nombre}*\nColor: ${color} | Talla: ${talla}\nPrecio: $${prod.precio.toLocaleString('es-CO')}`);
      window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
    };
  }

  // Botón AÃ±adir al carrito del modal
  const addBtn = document.getElementById('modalAddCart');
  if (addBtn) {
    addBtn.onclick = () => {
      const talla = tallasContainer.querySelector('.talla-btn.active')?.textContent || '38';
      const variant = prod.variantes[activeVariantIdx];
      addToCart({ ...prod, selectedColor: variant.color, selectedImg: variant.img, selectedTalla: talla });
      closeModal();
    };
  }

  lucide.createIcons();
}

// ============================================================
// CARRITO LATERAL (CART DRAWER)
// ============================================================
function initCartDrawer() {
  document.getElementById('openCart')?.addEventListener('click',  toggleCart);
  document.getElementById('closeCart')?.addEventListener('click', toggleCart);
  document.getElementById('cartOverlay')?.addEventListener('click', toggleCart);

  // Botón hero: añadir al carrito
  document.getElementById('btn-add-main')?.addEventListener('click', (e) => {
    e.stopPropagation();
    addToCart({ id: 'hero', nombre: 'Maia Urbana 01™', precio: 129000, selectedColor: 'Beige', selectedImg: 'images/hero_shoes.png', selectedTalla: '38' });
  });

  // ── Botón Finalizar Compra → WhatsApp Factura ──────────────
  document.getElementById('checkoutBtn')?.addEventListener('click', checkoutViaWhatsApp);
}

function toggleCart() {
  document.getElementById('cartOverlay')?.classList.toggle('active');
  document.getElementById('cartDrawer')?.classList.toggle('open');
}

// ============================================================
// CHECKOUT VÍA WHATSAPP — Factura detallada
// ============================================================
function checkoutViaWhatsApp() {
  if (cartItems.length === 0) {
    // Animación de shake en el carrito vacío
    const emptyMsg = document.querySelector('.empty-cart-msg');
    if (emptyMsg) {
      emptyMsg.style.color = '#ff6b6b';
      emptyMsg.textContent = '⚠️ Agrega productos antes de finalizar.';
      setTimeout(() => {
        emptyMsg.style.color = '';
        emptyMsg.textContent = 'Aún no hay tesoros aquí. 💕';
      }, 2500);
    }
    return;
  }

  // Número de pedido único (fecha + aleatorio)
  const now     = new Date();
  const pad     = n => String(n).padStart(2, '0');
  const pedidoId = `MS-${now.getFullYear()}${pad(now.getMonth()+1)}${pad(now.getDate())}-${Math.floor(Math.random()*9000)+1000}`;
  const fecha    = `${pad(now.getDate())}/${pad(now.getMonth()+1)}/${now.getFullYear()}`;
  const hora     = `${pad(now.getHours())}:${pad(now.getMinutes())}`;

  // Construir líneas de artículos
  let total = 0;
  const lineas = cartItems.map((item, i) => {
    total += item.precio;
    const precio = item.precio.toLocaleString('es-CO');
    return [
      `${i + 1}️⃣ *${item.nombre}*`,
      `   🏷️ Marca: ${item.marca || 'Maia Sport'}`,
      `   🎨 Color: ${item.selectedColor || 'N/A'}`,
      `   👟 Talla: ${item.selectedTalla || 'N/A'}`,
      `   💵 Precio: $${precio} COP`,
    ].join('\n');
  }).join('\n\n');

  const totalFmt = total.toLocaleString('es-CO');

  const mensaje = [
    `🛍️ *PEDIDO MAIA SPORT*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `📋 *N° Pedido:* ${pedidoId}`,
    `📅 *Fecha:* ${fecha}  🕐 ${hora}`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `📦 *ARTÍCULOS (${cartItems.length}):*`,
    ``,
    lineas,
    ``,
    `━━━━━━━━━━━━━━━━━━━━`,
    `💳 *TOTAL: $${totalFmt} COP*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `📍 *Por favor confirma:*`,
    `   • Disponibilidad de tallas`,
    `   • Método de pago`,
    `   • Dirección de envío`,
    ``,
    `¡Gracias por elegir Maia Sport! 💕👟`,
  ].join('\n');

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');

  // Confirmar visualmente en el botón
  const btn = document.getElementById('checkoutBtn');
  if (btn) {
    const original = btn.innerHTML;
    btn.innerHTML  = '✅ ¡Pedido enviado!';
    btn.style.background = '#25d366';
    btn.style.color      = '#0a1a0a';
    setTimeout(() => {
      btn.innerHTML        = original;
      btn.style.background = '';
      btn.style.color      = '';
      lucide.createIcons();
    }, 3000);
  }
}

function addToCart(prod) {
  cartItems.push(prod);
  updateCartUI();
  // Flash del badge
  const badge = document.querySelector('.cart-badge');
  if (badge) { badge.classList.add('pop'); setTimeout(() => badge.classList.remove('pop'), 300); }
  // Abrir carrito
  const drawer = document.getElementById('cartDrawer');
  if (!drawer?.classList.contains('open')) setTimeout(toggleCart, 400);
}

function updateCartUI() {
  const badge         = document.querySelector('.cart-badge');
  const badgeTitle    = document.querySelector('.cart-header h3 span');
  const emptyMsg      = document.querySelector('.empty-cart-msg');
  const container     = document.querySelector('.cart-items-container');
  const totalEl       = document.querySelector('.total-price');

  if (badge)      badge.textContent      = cartItems.length;
  if (badgeTitle) badgeTitle.textContent = `(${cartItems.length})`;
  if (emptyMsg)   emptyMsg.style.display = cartItems.length ? 'none' : 'block';

  if (!container) return;
  container.innerHTML = '';
  let total = 0;
  cartItems.forEach((item, idx) => {
    total += item.precio;
    container.insertAdjacentHTML('beforeend', `
      <div class="cart-item">
        <img src="${item.selectedImg || item.img || 'images/hero_shoes.png'}" class="cart-item-img" alt="${item.nombre}">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.nombre}</h4>
          <span class="cart-item-sub">${item.selectedColor || ''} Â· T${item.selectedTalla || ''}</span>
          <span class="cart-item-price">$${item.precio.toLocaleString('es-CO')}</span>
        </div>
        <button class="remove-item" data-idx="${idx}"><i data-lucide="trash-2"></i></button>
      </div>
    `);
  });
  if (totalEl) totalEl.textContent = `$${total.toLocaleString('es-CO')}`;
  container.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      cartItems.splice(+btn.dataset.idx, 1);
      updateCartUI();
    });
  });
  lucide.createIcons();
}

// ============================================================
// SCROLL REVEAL
// ============================================================
function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('active');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ============================================================
// HERO â€” Selectores de talla / color interactivos
// ============================================================
function initHeroSelectors() {
  document.querySelectorAll('.selectors .options button').forEach(btn => {
    btn.addEventListener('click', function() {
      this.closest('.options').querySelectorAll('button').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
}


function initCategorySidebar() {
  const sidebar   = document.getElementById('categorySidebar');
  const indicator = document.getElementById('sidebarIndicator');
  const heroZapatos  = document.getElementById('heroZapatos');
  const heroRopa     = document.getElementById('heroRopa');
  const heroGraffiti = document.getElementById('heroGraffiti');

  if (!sidebar) return;

  const btns = sidebar.querySelectorAll('.cat-btn');

  function updateIndicator() {
    const activeBtn = sidebar.querySelector('.cat-btn.active');
    if (indicator && activeBtn) {
      indicator.style.left  = activeBtn.offsetLeft + 'px';
      indicator.style.width = activeBtn.offsetWidth + 'px';
    }
  }

  function switchHero(category) {
    if (category === 'ZAPATOS') {
      heroRopa && heroRopa.classList.remove('visible');
      setTimeout(function() {
        heroZapatos && heroZapatos.classList.remove('hidden');
        if (heroGraffiti) heroGraffiti.textContent = 'ELEGANCE';
      }, 80);
    } else {
      heroZapatos && heroZapatos.classList.add('hidden');
      setTimeout(function() {
        heroRopa && heroRopa.classList.add('visible');
        if (heroGraffiti) heroGraffiti.textContent = 'MAIA ACTIVE';
        if (heroRopa) {
          heroRopa.querySelectorAll('.ropa-model-card').forEach(function(c) {
            c.style.animation = 'none';
            void c.offsetHeight;
            c.style.animation = '';
          });
        }
        lucide.createIcons();
      }, 150);
    }
  }

  setTimeout(updateIndicator, 50);
  window.addEventListener('resize', updateIndicator);

  // ── Ocultar sidebar en el footer, mostrar en hero/catálogo ──
  const footerSection  = document.getElementById('footer-section');
  const catalogSection = document.getElementById('catalog-section');
  const heroSection    = document.getElementById('hero-section');

  function hideSidebar() {
    sidebar.style.opacity   = '0';
    sidebar.style.transform = 'translateX(-50%) translateY(20px)';
    sidebar.style.pointerEvents = 'none';
  }

  function showSidebar() {
    sidebar.style.opacity   = '1';
    sidebar.style.transform = 'translateX(-50%) translateY(0)';
    sidebar.style.pointerEvents = 'auto';
  }

  // Aseguramos transición suave en el sidebar
  sidebar.style.transition = 'opacity 0.35s ease, transform 0.35s ease';

  if (footerSection) {
    const obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          hideSidebar();
        } else {
          showSidebar();
        }
      });
    }, { threshold: 0.08 });

    obs.observe(footerSection);
  }

  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (btn.classList.contains('active')) return;
      btns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      CURRENT_CATEGORY = btn.dataset.category;
      updateIndicator();
      switchHero(CURRENT_CATEGORY);

      // ── Ocultar/Mostrar filtros de marcas ──
      const filterTabsContainer = document.querySelector('.filter-tabs');
      if (filterTabsContainer) {
        if (CURRENT_CATEGORY === 'ROPA') {
          filterTabsContainer.style.display = 'none';
        } else {
          filterTabsContainer.style.display = 'flex';
        }
      }

      document.querySelectorAll('.filter-tab').forEach(function(t) { t.classList.remove('active'); });
      var tabTodos = document.querySelector('.filter-tab[data-filter="TODOS"]');
      if (tabTodos) tabTodos.classList.add('active');
      renderCatalog('TODOS');
      var catalogSec = document.getElementById('catalog-section');
      if (catalogSec && window.scrollY < catalogSec.offsetTop - 100) {
        window.scrollTo({ top: catalogSec.offsetTop - 80, behavior: 'smooth' });
      }
    });
  });
}

import { loadCssOnce } from '../services.js';

export async function initService(mountEl) {
  loadCssOnce('./pages/home/services/gallery/gallery.css');
  const res = await fetch('./pages/home/services/gallery/gallery.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('gallery');
}
import { loadCssOnce } from '../features.js';

export async function initService(mountEl) {
  loadCssOnce('.//home/features/gallery/gallery.css');
  const res = await fetch('.//home/features/gallery/gallery.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('gallery');
}
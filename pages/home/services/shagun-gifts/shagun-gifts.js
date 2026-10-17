import { loadCssOnce } from '../services.js';

export async function initService(mountEl) {
  loadCssOnce('./pages/home/services/shagun-gifts/shagun-gifts.css');
  const res = await fetch('./pages/home/services/shagun-gifts/shagun-gifts.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('shagun');
}
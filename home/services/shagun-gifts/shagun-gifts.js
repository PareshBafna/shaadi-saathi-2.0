import { loadCssOnce } from '../services.js';

export async function initService(mountEl) {
  loadCssOnce('.//home/services/shagun-gifts/shagun-gifts.css');
  const res = await fetch('.//home/services/shagun-gifts/shagun-gifts.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('shagun');
}
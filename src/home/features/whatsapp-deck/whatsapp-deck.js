import { loadCssOnce } from '../features.js';

export async function initService(mountEl) {
  loadCssOnce('./src/home/features/whatsapp-deck/whatsapp-deck.css');
  const res = await fetch('./src/home/features/whatsapp-deck/whatsapp-deck.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('whatsapp');
}
import { loadCssOnce } from '../../components/services/services.js';

export async function initService(mountEl) {
  loadCssOnce('./pages/home/services/whatsapp-deck/whatsapp-deck.css');
  const res = await fetch('./pages/home/services/whatsapp-deck/whatsapp-deck.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('whatsapp');
}
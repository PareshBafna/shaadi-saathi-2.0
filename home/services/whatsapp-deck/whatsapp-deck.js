import { loadCssOnce } from '../services.js';

export async function initService(mountEl) {
  loadCssOnce('.//home/services/whatsapp-deck/whatsapp-deck.css');
  const res = await fetch('.//home/services/whatsapp-deck/whatsapp-deck.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('whatsapp');
}
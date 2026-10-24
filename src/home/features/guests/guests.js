import { loadCssOnce } from '../services.js';

export async function initService(mountEl) {
  loadCssOnce('.//home/services/guest/guest.css');
  const res = await fetch('.//home/services/guest/guest.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('rsvp');
}
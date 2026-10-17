import { loadCssOnce } from '../services.js';

export async function initService(mountEl) {
  loadCssOnce('./pages/home/services/guest/guest.css');
  const res = await fetch('./pages/home/services/guest/guest.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('rsvp');
}
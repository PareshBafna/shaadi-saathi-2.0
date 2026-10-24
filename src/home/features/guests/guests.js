import { loadCssOnce } from '../features.js';

export async function initService(mountEl) {
  loadCssOnce('.//home/features/guest/guest.css');
  const res = await fetch('.//home/features/guest/guest.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('rsvp');
}
import { loadCssOnce } from '../services.js';

export async function initService(mountEl) {
  loadCssOnce('.//home/services/guestbook/guestbook.css');
  const res = await fetch('.//home/services/guestbook/guestbook.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('guestbook');
}
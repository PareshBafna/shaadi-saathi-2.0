import { loadCssOnce } from '../services.js';

export async function initService(mountEl) {
  loadCssOnce('./pages/home/services/team-access/team-access.css');
  const res = await fetch('./pages/home/services/team-access/team-access.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('users');
}
import { loadCssOnce } from '../features.js';

export async function initService(mountEl) {
  loadCssOnce('./src/home/features/team-access/team-access.css');
  const res = await fetch('./src/home/features/team-access/team-access.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('users');
}
import { loadCssOnce } from '../../components/services/services.js';

export async function initService(mountEl) {
  loadCssOnce('./pages/home/services/family-hosts/family-hosts.css');
  const res = await fetch('./pages/home/services/family-hosts/family-hosts.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('hosts');
}
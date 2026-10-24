import { loadCssOnce } from '../features.js';

export async function initService(mountEl) {
  loadCssOnce('.//home/features/family-hosts/family-hosts.css');
  const res = await fetch('.//home/features/family-hosts/family-hosts.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('hosts');
}
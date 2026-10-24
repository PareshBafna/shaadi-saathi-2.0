import { loadCssOnce } from '../services.js';

export async function initService(mountEl) {
  loadCssOnce('.//home/services/family-hosts/family-hosts.css');
  const res = await fetch('.//home/services/family-hosts/family-hosts.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('hosts');
}
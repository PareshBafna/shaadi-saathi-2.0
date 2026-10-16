import { loadCssOnce } from '../../components/services/services.js';

export async function initService(mountEl) {
  loadCssOnce('./pages/home/services/sangeeth-lineup/sangeeth-lineup.css');
  const res = await fetch('./pages/home/services/sangeeth-lineup/sangeeth-lineup.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('sangeet');
}
import { loadCssOnce } from '../services.js';

export async function initService(mountEl) {
  loadCssOnce('.//home/services/sangeeth-lineup/sangeeth-lineup.css');
  const res = await fetch('.//home/services/sangeeth-lineup/sangeeth-lineup.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('sangeet');
}
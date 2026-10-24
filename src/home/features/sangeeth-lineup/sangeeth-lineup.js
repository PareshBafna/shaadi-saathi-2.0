import { loadCssOnce } from '../features.js';

export async function initService(mountEl) {
  loadCssOnce('./src/home/features/sangeeth-lineup/sangeeth-lineup.css');
  const res = await fetch('./src/home/features/sangeeth-lineup/sangeeth-lineup.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('sangeet');
}
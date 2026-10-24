import { loadCssOnce } from '../features.js';

export async function initService(mountEl) {
  loadCssOnce('./src/home/features/stay-accommodation/stay-accommodation.css');
  const res = await fetch('./src/home/features/stay-accommodation/stay-accommodation.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('rooms');
}
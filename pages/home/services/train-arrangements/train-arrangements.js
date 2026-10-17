import { loadCssOnce } from '../services.js';

export async function initService(mountEl) {
  loadCssOnce('./pages/home/services/train-arrangements/train-arrangements.css');
  const res = await fetch('./pages/home/services/train-arrangements/train-arrangements.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('trains');
}
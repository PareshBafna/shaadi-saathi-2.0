import { loadCssOnce } from '../features.js';

export async function initService(mountEl) {
  loadCssOnce('.//home/features/train-arrangements/train-arrangements.css');
  const res = await fetch('.//home/features/train-arrangements/train-arrangements.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('trains');
}
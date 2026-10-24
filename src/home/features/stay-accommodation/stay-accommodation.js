import { loadCssOnce } from '../features.js';

export async function initService(mountEl) {
  loadCssOnce('.//home/features/stay-accomodation/stay-accomodation.css');
  const res = await fetch('.//home/features/stay-accomodation/stay-accomodation.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('rooms');
}
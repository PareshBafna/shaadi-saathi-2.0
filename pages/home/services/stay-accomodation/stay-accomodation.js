import { loadCssOnce } from '../../components/services/services.js';

export async function initService(mountEl) {
  loadCssOnce('./pages/home/services/stay-accomodation/stay-accomodation.css');
  const res = await fetch('./pages/home/services/stay-accomodation/stay-accomodation.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('rooms');
}
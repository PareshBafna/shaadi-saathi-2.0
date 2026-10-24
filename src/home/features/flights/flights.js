import { loadCssOnce } from '../services.js';

export async function initService(mountEl) {
  loadCssOnce('.//home/services/flight-arrangements/flight-arrangements.css');
  const res = await fetch('.//home/services/flight-arrangements/flight-arrangements.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('flights');
}
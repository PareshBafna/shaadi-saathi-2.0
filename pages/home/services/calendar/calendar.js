import { loadCssOnce } from '../../components/services/services.js';

export async function initService(mountEl) {
  loadCssOnce('./pages/home/services/calendar/calendar.css');
  const res = await fetch('./pages/home/services/calendar/calendar.html');
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('calendar');
}
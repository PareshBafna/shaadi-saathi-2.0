import { loadCssOnce } from '../features.js';
import { rootUrl } from '../../../../global/core/router.js';

export async function initFeature(mountEl) {
  loadCssOnce(rootUrl('src/home/features/telemetry/telemetry.css'));
  const res = await fetch(rootUrl('src/home/features/telemetry/telemetry.html'));
  mountEl.innerHTML = await res.text();

  const btn = mountEl.querySelector('.hp-link');
  if (btn) btn.onclick = () => window.openWorkspaceDirect('overview');
}
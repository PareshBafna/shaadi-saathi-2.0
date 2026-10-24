import { rootUrl } from '../../../../global/core/router.js';

export async function initPricing(slotSelector) {
  const slot = document.querySelector(slotSelector);
  if (!slot) return;
  const res = await fetch(rootUrl('src/home/components/pricing/pricing.html'));
  slot.innerHTML = await res.text();
}
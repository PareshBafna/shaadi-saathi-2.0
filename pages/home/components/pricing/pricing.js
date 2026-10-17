export async function initPricing(slotSelector) {
  const slot = document.querySelector(slotSelector);
  if (!slot) return;

  const res = await fetch('./pages/home/components/pricing/pricing.html');
  slot.innerHTML = await res.text();
}
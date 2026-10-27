export async function initHeader(slotSelector) {
  const slot = document.querySelector(slotSelector);
  if (!slot) return;

  slot.innerHTML = `
    <header class="fixed top-0 left-0 right-0 z-50 bg-obsidian/95 backdrop-blur-md border-b border-borderWarm py-3 mb-6">
      <div class="hp-wrap flex items-center justify-between px-4 sm:px-6">
        <div class="flex items-center gap-2.5">
          <span class="w-8 h-8 rounded-xl bg-gold text-obsidian font-serif font-bold flex items-center justify-center text-sm shadow">SS</span>
          <div>
            <span class="font-serif italic text-lg sm:text-xl font-bold text-cream block leading-none">Shaadi Saathi</span>
            <span class="text-[10px] text-muted tracking-wide uppercase">Planning &amp; Hospitality OS</span>
          </div>
        </div>
      </div>
    </header>
  `;
}
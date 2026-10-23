export function renderHeader() {
  return `
<header class="sticky top-0 z-40 bg-obsidian/90 backdrop-blur-xl border-b border-borderWarm w-full px-4 sm:px-8 lg:px-14 py-3.5">
  <button type="button" data-go="home" class="flex items-center gap-3 text-left" aria-label="Shaadi Saathi home">
    <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-amber-700 p-[1.5px] shrink-0 block">
      <span class="w-full h-full bg-obsidian rounded-[10px] flex items-center justify-center font-serif font-bold text-lg gold-text">SS</span>
    </span>
    <span>
      <span class="font-serif italic text-2xl font-bold gold-text block leading-none">Shaadi Saathi</span>
      <span class="text-xs text-muted block">Complete Wedding Hospitality &amp; Planning OS</span>
    </span>
  </button>
</header>`;
}

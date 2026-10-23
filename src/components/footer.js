export function renderFooter() {
  return `
<footer class="border-t border-borderWarm py-12 bg-obsidian">
  <div class="hp-wrap grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
      <span class="font-serif italic text-2xl font-bold gold-text">Shaadi Saathi</span>
      <p class="mt-2 text-sm text-muted">Complete Wedding Hospitality &amp; Planning OS.</p>
    </div>
    <nav class="space-y-2 text-sm" aria-label="Explore">
      <h4 class="font-sans font-bold text-cream">Explore</h4>
      <a href="#grouped-features" class="block text-muted hover:text-gold">All Services Overview</a>
      <a href="#all-explainers" class="block text-muted hover:text-gold">Interactive Service Deep-Dives</a>
      <a href="#pricing" class="block text-muted hover:text-gold">Pricing &amp; Add-Ons</a>
    </nav>
    <div class="space-y-2 text-sm">
      <h4 class="font-sans font-bold text-cream">Workspace</h4>
      <button type="button" data-go="creator" class="block text-gold font-bold hover:underline">👑 Open Weddings Dashboard</button>
    </div>
  </div>
</footer>`;
}

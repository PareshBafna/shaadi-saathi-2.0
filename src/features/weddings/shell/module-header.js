export function buildModuleHeader(mod) {
  return `
    <div class="bento-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-surface via-card to-surface">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-2xl bg-gold/15 border border-gold/40 flex items-center justify-center text-3xl shrink-0" aria-hidden="true">${mod.icon}</div>
        <div>
          <span class="text-xs font-mono uppercase tracking-wider text-gold">Service Workspace</span>
          <h3 class="font-serif text-3xl font-bold text-cream mt-0.5">${mod.name}</h3>
          <p class="text-sm text-muted">${mod.desc}</p>
        </div>
      </div>
      <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emeraldSS/15 text-emeraldSS border border-emeraldSS/30 shrink-0">● ${mod.badge}</span>
    </div>`;
}

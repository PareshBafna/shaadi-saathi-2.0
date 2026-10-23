// Hash routes: #home, #weddings, #wedding-details?id=..&module=.., #hosts, #guest
// Any other hash (#pricing, #faq ...) is an in-page anchor and counts as "home".
const SITE_ROOT = new URL('../../', import.meta.url);

export function rootUrl(relPath = '') {
  return new URL(relPath.replace(/^\.?\//, ''), SITE_ROOT).pathname;
}

const MODE_HASH = { home: '#home', creator: '#weddings', host: '#hosts', guest: '#guest' };

const HASH_TO_MODE = {
  '#weddings': 'creator', '#wedding-details': 'creator', '#creator': 'creator',
  '#hosts': 'host', '#host': 'host',
  '#guest': 'guest', '#calendar': 'guest'
};

export function parseHashRoute() {
  const raw = window.location.hash || '';
  const [route, query = ''] = raw.split('?');
  const params = new URLSearchParams(query);
  return {
    route: route || '#home',
    mode: HASH_TO_MODE[route] || 'home',
    wedding: params.get('id') || params.get('wedding') || null,
    module: params.get('module') || 'overview'
  };
}

export function navigateTo(mode, extra = {}, replace = false) {
  let hash = MODE_HASH[mode] || '#home';

  if (mode === 'creator' && extra.wedding) {
    const mod = extra.module || 'overview';
    hash = `#wedding-details?id=${encodeURIComponent(extra.wedding)}&module=${encodeURIComponent(mod)}`;
    sessionStorage.setItem('ss_active_wedding', extra.wedding);
    sessionStorage.setItem('ss_active_module', mod);
  } else {
    sessionStorage.removeItem('ss_active_wedding');
    sessionStorage.removeItem('ss_active_module');
  }

  if (window.location.hash === hash) return;
  window.history[replace ? 'replaceState' : 'pushState'](null, '', rootUrl('') + hash);
}

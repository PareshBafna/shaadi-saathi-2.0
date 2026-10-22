const SITE_ROOT = new URL('../', import.meta.url);

export function rootUrl(relPath = '') {
  const clean = relPath.replace(/^\.?\//, '');
  return new URL(clean, SITE_ROOT).pathname;
}

export const ROUTE_HASHES = {
  home: '#home',
  creator: '#weddings',
  host: '#hosts',
  guest: '#guest'
};

export function parseHashRoute() {
  const rawHash = window.location.hash || '';
  const [route, queryString] = rawHash.split('?');
  const params = new URLSearchParams(queryString || '');

  let mode = 'home';
  if (route === '#weddings' || route === '#wedding-details' || route === '#creator') {
    mode = 'creator';
  } else if (route === '#hosts' || route === '#host') {
    mode = 'host';
  } else if (route === '#guest' || route === '#calendar') {
    mode = 'guest';
  }

  return {
    route: route || '#home',
    mode,
    wedding: params.get('id') || params.get('wedding') || null,
    module: params.get('module') || 'overview'
  };
}

export function getRouteMode() {
  return parseHashRoute().mode;
}

export function navigateTo(mode, extraState = {}, replace = false) {
  let targetHash = ROUTE_HASHES[mode] || '#home';

  if (mode === 'creator' && extraState.wedding) {
    const mod = extraState.module || 'overview';
    targetHash = `#wedding-details?id=${encodeURIComponent(extraState.wedding)}&module=${encodeURIComponent(mod)}`;
    sessionStorage.setItem('ss_active_wedding', extraState.wedding);
    sessionStorage.setItem('ss_active_module', mod);
  } else {
    sessionStorage.removeItem('ss_active_wedding');
    sessionStorage.removeItem('ss_active_module');
  }

  if (window.location.hash === targetHash) return;

  if (replace) {
    window.history.replaceState(null, '', rootUrl('') + targetHash);
  } else {
    window.history.pushState(null, '', rootUrl('') + targetHash);
  }
}
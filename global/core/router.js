const SITE_ROOT = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/');

export function rootUrl(relPath = '') {
  const clean = relPath.replace(/^\.?\//, '');
  return new URL(clean, SITE_ROOT).href;
}

export const ROUTE_HASHES = {
  home: '#home',
  creator: '#weddings',
  host: '#hosts',
  guest: '#guest'
};

export function parseHashRoute() {
  const rawHash = window.location.hash || '#home';
  const [route, queryString] = rawHash.split('?');
  const params = new URLSearchParams(queryString || '');

  let mode = 'home';
  if (route.startsWith('#weddings') || route.startsWith('#wedding-details') || route.startsWith('#creator')) {
    mode = 'creator';
  } else if (route.startsWith('#hosts') || route.startsWith('#host')) {
    mode = 'host';
  } else if (route.startsWith('#guest') || route.startsWith('#calendar')) {
    mode = 'guest';
  }

  return {
    route: route || '#home',
    mode,
    wedding: params.get('id') || params.get('wedding') || null,
    module: params.get('module') || 'hub'
  };
}

export function getRouteMode() {
  return parseHashRoute().mode;
}

export function navigateTo(mode, extraState = {}, replace = false) {
  let targetHash = ROUTE_HASHES[mode] || '#home';

  if (mode === 'creator' && extraState.wedding) {
    const mod = extraState.module || 'hub';
    targetHash = `#wedding-details?id=${encodeURIComponent(extraState.wedding)}&module=${encodeURIComponent(mod)}`;
  }

  if (window.location.hash !== targetHash) {
    if (replace) {
      window.history.replaceState(null, '', rootUrl('') + targetHash);
    } else {
      window.history.pushState(null, '', rootUrl('') + targetHash);
    }
  }

  const rootHome = document.getElementById('root-home');
  const rootCreator = document.getElementById('root-creator');
  const singleWorkspace = document.getElementById('creator-single-workspace');
  const allWeddingsGrid = document.getElementById('creator-all-weddings');

  if (targetHash.startsWith('#home') || targetHash === '#') {
    if (rootHome) rootHome.classList.remove('hidden');
    if (rootCreator) rootCreator.classList.add('hidden');
  } else {
    if (rootHome) rootHome.classList.add('hidden');
    if (rootCreator) rootCreator.classList.remove('hidden');

    if (targetHash.includes('wedding-details') || targetHash.includes('id=')) {
      if (allWeddingsGrid) allWeddingsGrid.classList.add('hidden');
      if (singleWorkspace) singleWorkspace.classList.remove('hidden');

      const routeInfo = parseHashRoute();
      if (routeInfo.wedding && typeof window.openWeddingWorkspace === 'function') {
        window.openWeddingWorkspace(routeInfo.wedding, routeInfo.module, true);
      }
    } else {
      if (singleWorkspace) singleWorkspace.classList.add('hidden');
      if (allWeddingsGrid) allWeddingsGrid.classList.remove('hidden');
    }
  }

  window.dispatchEvent(new HashChangeEvent('hashchange'));
}
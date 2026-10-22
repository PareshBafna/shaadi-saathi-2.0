const SITE_ROOT = new URL('../', import.meta.url);

export function rootUrl(relPath = '') {
  const clean = relPath.replace(/^\.?\//, '');
  return new URL(clean, SITE_ROOT).pathname;
}

export const ROUTE_PATHS = {
  home: rootUrl(''),
  creator: rootUrl('pages/weddings/weddings.html'),
  host: rootUrl('pages/host/host.html'),
  guest: rootUrl('pages/guest/guest.html')
};

export function getRouteMode(pathname = window.location.pathname) {
  const savedRoute = sessionStorage.getItem('ss_boot_route');
  if (savedRoute) {
    sessionStorage.removeItem('ss_boot_route');
    return savedRoute;
  }
  if (pathname.endsWith('/pages/weddings/weddings.html') || pathname.includes('/weddings')) return 'creator';
  if (pathname.endsWith('/pages/host/host.html') || pathname.includes('/host')) return 'host';
  if (pathname.endsWith('/pages/guest/guest.html') || pathname.includes('/guest')) return 'guest';
  return 'home';
}

export function navigateTo(mode, extraState = {}, replace = false) {
  const targetPath = ROUTE_PATHS[mode] || ROUTE_PATHS.home;
  const state = { mode, ...extraState };

  if (extraState.wedding) {
    sessionStorage.setItem('ss_active_wedding', extraState.wedding);
    sessionStorage.setItem('ss_active_module', extraState.module || 'overview');
  } else {
    sessionStorage.removeItem('ss_active_wedding');
    sessionStorage.removeItem('ss_active_module');
  }

  if (replace) {
    window.history.replaceState(state, '', targetPath);
  } else if (
    window.location.pathname !== targetPath ||
    extraState.wedding !== window.history.state?.wedding ||
    extraState.module !== window.history.state?.module
  ) {
    window.history.pushState(state, '', targetPath);
  }
}
// Pings the Cloudflare Worker at /_track once per page load.
// Uses sendBeacon so it never blocks render or page unload.

const ENDPOINT = '/api/sync';
let sent = false;

export function trackPageView(): void {
  if (sent) return;
  sent = true;

  const fire = () => {
    const payload = JSON.stringify({
      event: 'pageview',
      path: window.location.pathname + window.location.search,
      referrer: document.referrer || '',
    });

    try {
      if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
        const blob = new Blob([payload], { type: 'application/json' });
        navigator.sendBeacon(ENDPOINT, blob);
        return;
      }
      fetch(ENDPOINT, {
        method: 'POST',
        body: payload,
        headers: { 'content-type': 'application/json' },
        keepalive: true,
      }).catch(() => {});
    } catch {
      // analytics must never break the site
    }
  };

  if ('requestIdleCallback' in window) {
    (window as Window & {
      requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void;
    }).requestIdleCallback(fire, { timeout: 2000 });
  } else {
    setTimeout(fire, 0);
  }
}

export interface Env {
  ANALYTICS: AnalyticsEngineDataset;
}

interface IncomingCf {
  country?: string;
  city?: string;
  region?: string;
  regionCode?: string;
  postalCode?: string;
  continent?: string;
  timezone?: string;
  colo?: string;
  asn?: number;
  asOrganization?: string;
  latitude?: string;
  longitude?: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(request) });
    }
    if (request.method !== 'POST' && request.method !== 'GET') {
      return new Response('method not allowed', { status: 405 });
    }

    const cf = ((request as unknown as { cf?: IncomingCf }).cf) ?? {};
    const url = new URL(request.url);

    let body: { path?: string; referrer?: string; event?: string } = {};
    if (request.method === 'POST') {
      try {
        body = await request.json();
      } catch {
        // ignore malformed bodies — still record the visit
      }
    }

    const ua = (request.headers.get('user-agent') ?? '').slice(0, 256);
    const path = (body.path ?? url.searchParams.get('p') ?? '/').slice(0, 512);
    const referrer = (body.referrer ?? request.headers.get('referer') ?? '').slice(0, 512);
    const event = (body.event ?? 'pageview').slice(0, 64);

    env.ANALYTICS.writeDataPoint({
      indexes: [String(cf.country ?? 'XX')],
      blobs: [
        String(cf.country ?? ''),
        String(cf.city ?? ''),
        String(cf.region ?? ''),
        String(cf.postalCode ?? ''),
        String(cf.asOrganization ?? ''),
        String(cf.asn ?? ''),
        String(cf.colo ?? ''),
        String(cf.timezone ?? ''),
        path,
        referrer,
        ua,
        event,
      ],
      doubles: [
        Number(cf.latitude) || 0,
        Number(cf.longitude) || 0,
      ],
    });

    return new Response(null, { status: 204, headers: corsHeaders(request) });
  },
};

function corsHeaders(request: Request): HeadersInit {
  const origin = request.headers.get('origin') ?? '*';
  return {
    'access-control-allow-origin': origin,
    'access-control-allow-methods': 'POST, GET, OPTIONS',
    'access-control-allow-headers': 'content-type',
    'access-control-max-age': '86400',
    'cache-control': 'no-store',
  };
}

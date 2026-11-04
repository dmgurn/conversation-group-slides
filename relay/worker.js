// Conversation Group Slides — download relay (Cloudflare Worker)
//
// EnglishConnect's file servers only let their own websites download files from inside a web page,
// so the app asks this relay instead. The relay fetches the official file and hands it to the app.
// It only fetches EnglishConnect slide decks and learner manuals, only for the app's own website,
// and it keeps nothing except a day of Cloudflare's normal cache (which also spares the Church's servers).

const APP_ORIGINS = [
  'https://dmgurn.github.io',   // the app
  'http://localhost:8769'       // local testing
];

const ALLOWED_FILES = [
  // Slide decks on EnglishConnect.org (a few have irregular names, e.g. /ec-lesson-17-slides.pdf)
  /^https:\/\/www\.englishconnect\.org\/(es\/)?ec[12]?-lesson-?\d{0,2}-slides\.pdf$/,
  // Slide decks EnglishConnect.org links to on its content server
  /^https:\/\/byu-pathway\.brightspotcdn\.com\/[0-9a-f]{2}\/[0-9a-f]{2}\/[0-9a-f]{20,40}\/ec[12]-lesson-\d{1,2}-slides[\w-]*\.pdf$/,
  // EnglishConnect 1 and 2 learner manuals
  /^https:\/\/assets\.churchofjesuschrist\.org\/[0-9a-z]{2}\/[0-9a-z]{2}\/[0-9a-z]{40}\/englishconnect_[12]_for_learners\.pdf$/
];

export default {
  async fetch(request) {
    const origin = request.headers.get('Origin') || '';
    const cors = { 'Vary': 'Origin' };
    if (APP_ORIGINS.includes(origin)) cors['Access-Control-Allow-Origin'] = origin;

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: { ...cors, 'Access-Control-Allow-Methods': 'GET, HEAD', 'Access-Control-Max-Age': '86400' } });
    }
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Only GET is supported.', { status: 405, headers: cors });
    }

    const target = new URL(request.url).searchParams.get('u') || '';
    if (!ALLOWED_FILES.some(rule => rule.test(target))) {
      return new Response('This relay only fetches EnglishConnect slides and learner manuals.', { status: 403, headers: cors });
    }

    const upstream = await fetch(target, { cf: { cacheEverything: true, cacheTtl: 86400 } });
    const headers = new Headers(cors);
    for (const name of ['content-type', 'content-length', 'last-modified', 'etag']) {
      const value = upstream.headers.get(name);
      if (value) headers.set(name, value);
    }
    headers.set('Cache-Control', 'public, max-age=86400');
    return new Response(request.method === 'HEAD' ? null : upstream.body, { status: upstream.status, headers });
  }
};

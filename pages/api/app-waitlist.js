const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PLATFORMS = new Set(['ios', 'android']);

function defaultApiBase() {
  return (
    process.env.KAHANA_API_BASE_URL
    || 'https://us-central1-kahana-15c2a.cloudfunctions.net/api'
  ).replace(/\/$/, '');
}

function allowedOrigin(origin) {
  if (!origin || typeof origin !== 'string') return 'https://about.kahana.io';
  try {
    const { hostname, origin: full } = new URL(origin);
    if (hostname === 'localhost' || hostname === '127.0.0.1') return full;
    if (hostname === 'kahana.io' || hostname.endsWith('.kahana.io')) return full;
    if (hostname.endsWith('.herokuapp.com') && hostname.includes('kahana')) return full;
  } catch {
    /* ignore */
  }
  return 'https://about.kahana.io';
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, platforms, note, website } = req.body || {};

  if (typeof website === 'string' && website.trim()) {
    return res.status(200).json({ ok: true });
  }

  const trimmedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
  if (!EMAIL_PATTERN.test(trimmedEmail) || trimmedEmail.length > 254) {
    return res.status(400).json({ message: 'Enter a valid email address.' });
  }

  const selected = Array.isArray(platforms)
    ? [...new Set(platforms.map((p) => String(p).toLowerCase()).filter((p) => PLATFORMS.has(p)))]
    : [];
  if (!selected.length) {
    return res.status(400).json({ message: 'Choose iOS, Android, or both.' });
  }

  const extra = typeof note === 'string' ? note.trim().slice(0, 1000) : '';
  const labels = selected.map((p) => (p === 'ios' ? 'iOS' : 'Android')).join(', ');
  const message = extra
    ? `Platforms: ${labels}\n\n${extra}`
    : `Platforms: ${labels}`;

  const payload = {
    category: 'app_waitlist',
    subject: 'iOS / Android app waitlist',
    message,
    source: 'app_waitlist_marketing',
    email: trimmedEmail,
  };

  const origin = allowedOrigin(req.headers.origin);
  const apiBase = defaultApiBase();

  async function postTicket(body) {
    const response = await fetch(`${apiBase}/support-tickets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Origin: origin,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json().catch(() => ({}));
    return { response, data };
  }

  try {
    let { response, data } = await postTicket(payload);
    if (response.status === 400 && /category/i.test(String(data.message || ''))) {
      ({ response, data } = await postTicket({ ...payload, category: 'other' }));
    }
    if (!response.ok) {
      return res.status(response.status === 429 ? 429 : 502).json({
        message: data.message || 'Could not join the waitlist. Try again.',
      });
    }
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('app waitlist submit failed', error);
    return res.status(502).json({ message: 'Could not join the waitlist. Try again.' });
  }
}

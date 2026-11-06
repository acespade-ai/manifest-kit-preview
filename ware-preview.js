(() => {
  'use strict';
  const page = document.querySelector('[data-ware-preview]');
  if (!page) return;
  const priceButton = page.querySelector('[data-check-price]');
  const priceResult = page.querySelector('[data-price-result]');
  priceButton?.addEventListener('click', async () => {
    if (page.dataset.checkoutEnabled !== 'true') return;
    priceButton.disabled = true;
    priceResult.textContent = 'Reading the unsigned price challenge…';
    try {
      const url = new URL(page.dataset.purchaseUrl);
      if (url.origin !== window.location.origin) throw new Error('Open the canonical Lumen House page to check the price.');
      // No wallet API, signature, key generation, bearer, or signed headers.
      const response = await fetch(url.href, { method: 'GET', credentials: 'omit', cache: 'no-store', redirect: 'error', headers: { Accept: 'application/json' } });
      if (!response.headers.get('content-type')?.includes('application/json')) throw new Error('The host did not return JSON. Read the offer and try later.');
      const body = await response.json();
      if (response.status === 402 && body.x402Version === 2 && Array.isArray(body.accepts)) {
        const exact = body.accepts.find(item => item.scheme === 'exact' && item.network === 'eip155:8453' && item.amount === '100000' &&
          item.asset?.toLowerCase() === '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913' &&
          item.payTo?.toLowerCase() === '0xfdfadd01edcbabe025931e45cdc8532b00218500');
        priceResult.textContent = exact
          ? 'Price challenge confirmed: 0.10 USDC on Base. No payment was made. Save your private recovery key before an agent authorizes payment.'
          : 'The returned requirements differ from this offer. Do not sign or pay; read the exact JSON and contact support.';
      } else if (response.status === 503) priceResult.textContent = 'Checkout is currently unavailable. No payment was made.';
      else priceResult.textContent = `Price read returned HTTP ${response.status}. No payment was made. Read the offer before continuing.`;
    } catch (cause) {
      priceResult.textContent = cause.message === 'Open the canonical Lumen House page to check the price.'
        ? cause.message : 'The price read could not be completed. No payment was made; read the canonical offer and try later.';
    } finally { priceButton.disabled = false; }
  });
  const hashButton = page.querySelector('[data-check-hash]');
  const hashResult = page.querySelector('[data-hash-result]');
  hashButton?.addEventListener('click', async () => {
    hashButton.disabled = true;
    try {
      const bytes = new TextEncoder().encode(page.querySelector('[data-demo-text]').value);
      const digest = await crypto.subtle.digest('SHA-256', bytes);
      const hash = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
      const matches = hash === hashButton.dataset.expectedHash && bytes.length === Number(hashButton.dataset.expectedBytes);
      hashResult.textContent = matches
        ? `The ${bytes.length} fictional bytes match the manifest entry. This is a file-integrity result only.`
        : `The fictional bytes differ from the manifest entry (${bytes.length} bytes). No payment, authorship or quality is being verified.`;
      hashResult.dataset.result = matches ? 'match' : 'mismatch';
    } catch {
      hashResult.textContent = 'The local browser hash could not be computed. Read the example manifest or use the offline verifier.';
      hashResult.dataset.result = 'unavailable';
    } finally { hashButton.disabled = false; }
  });
})();

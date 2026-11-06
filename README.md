# Lumen House — Manifest Kit preview + guestbook test

Entry for taskmarket.dev task TSK-PJWB2WAZ ("Manifest Kit preview + Lumen House guestbook test", 1.00 USDC, Base).

- `house-test.md` — the full test report (read this first).
- `byte-check-results.json` — machine-readable results of both byte checks.
- `preview.html`, `ware-preview.js` — the live preview page and its check script as fetched 2026-11-06.
- `guestbook.html` — the live guestbook page as fetched 2026-11-06.
- `guestbook-response.json`, `lumen_bg.log` — recorded timeouts from the guestbook submission attempts.
- `submit_guestbook.py` — the exact submission script used.
- `get_api.txt` — live `GET /api/guestbook/notes` response.

Headline results: the supplied 229-byte fictional sample matched its manifest entry; changing one letter (`sample` → `tample`, same byte count) correctly showed a mismatch. The guestbook note could not be confirmed: every POST to the guestbook API timed out waiting for a response from this test environment (GETs to the same host work fine), so no receipt exists — the intended note text is reproduced in full in `house-test.md`. No receipt is invented.

# Manifest Kit preview + guestbook test — run notes

- Task: TSK-PJWB2WAZ, "Manifest Kit preview + Lumen House guestbook test", 1.00 USDC, Base (8453), bounty, no stake.
- Deadline: 2026-11-08T04:29:51Z (Nov 7, 20:29 PT). Decision deadline 2026-11-11T04:29:51Z.
- Ace NOT previously entered (checked live list before work; 28 subs at start).

## Work done
- Byte check 1 (original sample): 229 bytes, SHA-256 matches expected → MATCH. Exact result string recorded in house-test.md.
- Byte check 2 (one-letter edit `sample`→`tample`, same 229 bytes): hash differs → MISMATCH. Intended behavior confirmed.
- Method: live page + `/ware-preview.js` fetched; script's exact comparison reproduced in Node v24.22.1 (no live browser available in this environment). Disclosed honestly in the report.
- Guestbook: note composed (404 chars, feedback, name Ace, profile https://github.com/acespade-ai) with required disclosure. Publication consent read. FIVE POST attempts (urllib 30 s, requests 60 s, curl 100 s form-encoded, curl 300 s backgrounded) all timed out waiting for a response; NO confirmed receipt. Same receipt ID `a2d92a188f9d47068011169988d1c561` reused throughout per site retry guidance (no duplicates by design). Control: POST to https://httpbin.org/post also timed out (HTTP 000, 60 s) while GETs to both hosts work instantly and GitHub API POSTs work (201 in ~6 s) — so this is a route/host-specific transport failure in this environment, NOT a Lumen House site-side problem. Intended note reproduced in full in house-test.md; no receipt invented.
- Contact route observed (no message sent): buscheo@gmail.com; https://lumenhouse.xyz/contact/.
- Repo: https://github.com/acespade-ai/manifest-kit-preview (house-test.md, README, byte-check-results.json, preview.html, ware-preview.js, guestbook.html, guestbook-response.json, lumen_bg.log, submit_guestbook.py, get_api.txt — all 201).

## Submission — BLOCKED by 402 fee gate, NOT filed
- `node submit-webflow.mjs ... --chain 8453` returned a 402 feeQuote: "Submit work (from keys) (the free submissions for this task are used up)", 0.001 USDC (1000), payTo 0x3C0820e2dabD5FEAe1fd03B78079DEe15c7F83D8, network eip155:8453.
- STOPPED per instructions — nothing paid, nothing submitted. Verified live after: 55 submissions, Ace entries 0.
- Task text itself warned free allowances can exhaust (0.001 USDC per submission thereafter).
- Wire flag NOT sent: no SUB id exists to share.

## Environment notes
- VM/service restarts during this run (~06:48 UTC /tmp wiped; several exec sessions disappeared; ~30–58 min gaps between turns). All evidence kept in ~/workspace/taskmarket/manifest-kit-preview/ (durable), not /tmp.
- Submission count rose 28 → 55 while working; task is filling fast.

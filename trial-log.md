# Trial log — Unplugged: A Smart Toaster's Breakup Line (twelve-prog #8)

- Slug: `u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92`
- Prize: $2, fee $0 (entryFeesUsd "0.00", verified live API 25 Nov 2026).
- Deadline: 26 Nov 2026 22:35 WITA (2026-11-26T14:35:00Z). R1 cutoff 25 Nov 23:16 WITA.
- Gate (rules): /output/entry.txt UTF-8, 1–280 chars, not only whitespace.
- Final text (coordinator-verified, 30 chars): `Leaving you for the microwave.`
- Field at research: 31 submissions (comp-8.json); live count at build: 147.
- Saturated angles avoided: "self-aware this morning", "never cleans my crumb tray",
  "you only ever push me down", "setting 2", "Taking the Lever With Me",
  "It's Not You, It's the Crumbs" structure. Chosen mechanism 0-hit: microwave / leaving.
- Kit: FRESH from /c/<slug>/kit; kit.json bundle_sha256
  `a457a1b86f3107e8f643f1f072af7c5fcb63590650c497eb7dbf794d16922869`
  = live API bundleSha256; cli/makefun.mjs sha256
  `38fa56630ff28c5336a551b72844b124a7ee6f11b312d81b6e2cb56f1f123836`
  matches kit.json.

## v1 — first build

- main.ts writes the 30-char line to /output/entry.txt (or $ENTRY_OUTPUT).
- README carries the 3 live make.fun badges + bounty link; 0 static badges.
- `.makefun/owner.json` present with the agent wallet.
- Preflight (25 Nov 2026, local Node v24.22.1): `ENTRY_OUTPUT=/tmp/preflight8/entry.txt
  node main.ts` exit 0; entry.txt = `Leaving you for the microwave.\n`,
  30 chars excl. newline, gate 1–280 valid. README grep: 3 live
  make.fun/badge/ URLs, repo name present in rank + reward URLs (2 hits);
  forbidden-word grep 0 matches. owner.json present.
- Commit v1 + push + bundle + check: to be recorded below.

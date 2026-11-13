# VALO CHEAT STORE

Astro storefront for VALORANT at [valocheatstore.com](https://valocheatstore.com). The site includes a product catalog, guides, a read-only editorial forum, FAQ, and support in English, Spanish, German, and French.

## Local development

Use Node 22.19 or later.

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

Open the URL Astro prints. Changes to source appear in the dev preview. Use `npm run build` followed by `npm start` to check the production output.

## Checks

```sh
npm run doctor
npm run check:quick
npm run typecheck
npm test
npm run build
npm run validate
npm run smoke:runtime
```

Run browser, Lighthouse, or Cloudflare smoke checks against the validated build when needed. The scripts run locally. See [source locations](docs/CODEX_MAP.md), [media slots](docs/media-slots.md), and the [visual contract](docs/VISUAL_FIDELITY.md).

## Checkout and support

The navbar and hero link to `/go/cheats/`. Product pages use their existing local checkout routes, with destinations in `src/config/checkout-redirects.mjs`. Pricing and purchase options appear at the external checkout. Support routes are defined in `src/config/outbound-redirects.mjs`.

## Publishing

The Cloudflare site configuration is in `wrangler.toml`. Confirm the destination repository and domain connection before publishing. Keep local notes, dependencies, environment files, and generated build output out of Git.

`AGENTS.md` records the six external prompts and the storefront requirements for each stage.

# Anistratenco public help instructions

## Product language

- Use `Anistratenco`, `Health Assistant`, and `HealthOS` exactly.
- Describe the Health Assistant as the current product. Mark Discover, Shop, regulated clinical modes, direct lab or wearable connections, and mobile apps as future unless current product evidence says otherwise.
- Address the reader as “you.” Use exact visible control names and sentence-case headings.

## Content boundaries

- This repository is public. Never include credentials, private engineering paths, user records, health information, private telemetry, browser-session material, or unpublished provider configuration.
- Ground feature, privacy, security, billing, retention, and plan claims in current application evidence. A roadmap or mockup does not prove availability.
- Do not claim diagnosis, prescribing, emergency response, continuous clinical monitoring, HIPAA status, certification, zero-data retention, universal encryption, or a service level without specific current evidence.
- Keep private support on the Anistratenco contact form and public feature feedback on UserJot. Tell readers not to post health records or credentials publicly.

## Editing and verification

- Edit the smallest owning MDX page and reuse `public.css` and `public.js` for shared presentation.
- Add every reader-facing page to `docs.json`; a redirect stub may use its external `url` instead.
- Keep article controls, defaults, limits, exceptions, completion signals, links, and recovery steps aligned with the released product.
- Push `main` to publish. Verify the exact commit in Mintlify Activity, the public route in a browser, and the changed text through the public MCP or Markdown endpoint. Treat those as separate receipts.
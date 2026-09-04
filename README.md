# Anistratenco public help

This repository is the Git source for [docs.anistratenco.com](https://docs.anistratenco.com), the public help site for the Anistratenco Health Assistant. Private engineering guidance belongs in the private [`Anistratenco/docs`](https://github.com/Anistratenco/docs) repository.

## Content boundary

Document only released product behavior, visible control names, safe examples, recovery steps, and clearly labelled product direction. Never add credentials, internal operations, user records, health information, private telemetry, or browser-session material. Agent-oriented pages, `llms.txt`, and the public MCP are publicly retrievable.

Feature suggestions go to UserJot. Private account help and bug reports go through the product contact form. Keep manual category-selection instructions until the corresponding contact query is verified in the released application.

## Editing and publishing

- Edit the smallest relevant MDX page and reuse the shared styles in `public.css`.
- Add every reader-facing page to `docs.json` navigation.
- Keep every article’s final section titled **Questions and Answers** with at least five article-specific questions.
- Push `main` to publish through the existing Mintlify GitHub connection.

## Verification

Validate `docs.json`, navigation targets, MDX structure, internal links, and changed shared selectors before pushing. After the exact commit’s Mintlify deployment succeeds, verify the published route in a browser and retrieve the changed content through `https://docs.anistratenco.com/mcp` separately. A successful documentation deployment does not prove that application code is released.

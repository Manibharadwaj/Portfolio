---
title: "Why My AI Websites Looked Like Crap — and the Stack That Fixed It"
author: "Mani Bharadwaj"
date: "2026-06-11"
cover: "https://picsum.photos/seed/designvibe/1440/720"
excerpt: "I spent a day chasing one annoying problem: every site an AI builds for me looks generic — purple gradient, no images, dead vibe. Here's the stack that actually fixed it, and the one site to open before every design session."
tags: ["ai", "web-design", "build-log"]
---

I spent a day chasing one annoying problem: every site an AI builds for me looks generic. Purple gradient, no images, dead vibe. Here's what I found — and the free stack that fixed it.

## The problem

Whenever I ask an AI to "build me a website," the code is great — but the **design is crap**. No images, no vibe, just some sad purple color. Honestly, even someone with their eyes closed could tell it was AI-made. That's a problem, because a site that screams "a robot made this" is a site nobody trusts.

## The actual issue (root cause)

It's not that the AI is dumb. The issue is **zero constraints**. When you say "build a website" with no direction, the AI reaches for the most average thing it has ever seen — generic font, generic layout, no photos. Generic in, generic out.

> The fix in one line: good design = constraints + real references + real assets. Give the AI taste *before* it writes code, and the output stops looking like slop.

## What I debugged / explored

I went down the rabbit hole — read the GitHub repos, multiple reviews, and tool comparisons. The goal: find who has actually **solved** this, so I don't have to hire a designer or learn design from scratch. Turns out a whole stack exists for exactly this.

## What I found — the winning stack

| Job | Best tool | Cost |
|-----|-----------|------|
| Base components | shadcn/ui | Free |
| Animations / vibe | Magic UI + Aceternity UI | Free |
| Plug into the AI editor | shadcn MCP | Free |
| "Pick a variation" flow | 21st.dev Magic MCP | Free tier, then ~$10/mo |
| Colors | Realtime Colors | Free |
| Fonts | Fontpair | Free |
| Real images | Unsplash / Picsum | Free |

The company that impressed me most: **21st.dev** (YC W2026) — "the npm for design engineers." Their **Magic MCP** server (repo: [21st-dev/magic-mcp](https://github.com/21st-dev/magic-mcp)) drops straight into Cursor, Windsurf, VS Code, Cline *and* Claude Code. You type a prompt, it shows design options, you pick one, it lands in your project. It's like v0 but living inside your editor.

## The one place to visit every day

If I had to keep just one bookmark for design inspiration, it's **[Mobbin](https://mobbin.com)** — real mobile & web app screens, searchable, updated constantly.

Open it before any design work, scroll till something hits "wow," screenshot it, and hand it to the AI as the vibe reference. For mobile & app design, you're sorted for life. The free plan covers browsing; Pro is ~$10/mo for the full library and search.

![Design inspiration](https://picsum.photos/seed/mobbin/1200/600)

## My new workflow

1. Open **Mobbin** (or Godly) → scroll → screenshot the vibe that makes me go "wow."
2. Lock a palette (Realtime Colors) + a font pairing (Fontpair) + real images (Picsum/Unsplash).
3. Hand it all to the AI: *"Match this screenshot. Use shadcn + Magic UI. These colors, these fonts, these images."*
4. It pulls real components via the MCP → builds the good version. No more slop.

## Conclusion

The reason AI sites look bad isn't the AI — it's the lack of taste handed to it. The whole problem is solved by a free, open stack: **shadcn/ui** as the base, **Magic UI / Aceternity** for animation, an **MCP server** so the AI actually uses them, and **real fonts, colors, and images** instead of defaults.

And the single highest-leverage habit? **Start every design session on Mobbin.** Inspiration first, code second. That one change took my output from "a robot made this" to something I'd actually ship.

---

*Build log #1 — written after a day of research with Claude. Images via Picsum. Special thanks to [smotpro.com](https://smotpro.com) for helping with resources and support. 🙏*

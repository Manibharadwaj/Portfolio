---
title: "From Moodboard to Pattern: The Design Workflow Nobody Teaches You"
author: "Mani Bharadwaj"
date: "2026-06-23"
cover: "/blog/moodboard-to-pattern.jpg"
excerpt: "Most developers skip the design phase entirely — or worse, let AI decide everything. Here's the workflow I use to go from a vague idea to a shipped site that looks intentional, not generated."
tags: ["design", "workflow", "wordpress", "figma", "AI"]
---

I used to open Figma, stare at a blank canvas, and somehow end up with the same layout every time. Hero section. Three columns. Testimonials. Footer. Ship it. Every site I built looked like it came from the same template — because it basically did.

Then I figured out something that changed everything: **the problem was never the tool. It was that I had no pattern to follow.**

> Good design = constraints + real references + a system you follow every time.

Not talent. Not expensive tools. Not some AI that spits out generic layouts. A **pattern**. A blueprint you follow so your sites look custom and intentional — even if you're not a designer.

Here's the exact workflow I use now. Five steps. Start to finish.

---

## Step 1: Talk and Discuss — Nail the Idea

Before you touch anything, you need to know what you're building. Not "a website." That's not an idea. That's a category.

Sit down — with yourself, with your client, with your team — and answer these:

- **What does this site do?** (Sell a SaaS product? Show a portfolio? Book appointments?)
- **Who's it for?** (Developers? Small business owners? Students?)
- **What's the vibe?** (Dark and moody? Clean and corporate? Playful and bold?)
- **What makes it different?** (Why would someone choose this over competitors?)

**Write this down.** Not in your head. On paper. In a doc. Somewhere you can come back to.

This isn't wasted time. This is the thing that separates a site that feels *intentional* from one that feels *assembled*. Every design decision after this point traces back to these answers.

**Bottom line:** If you can't describe the site in one sentence, you're not ready to design yet.

---

## Step 2: Find the Idea and Variations — Steal Like an Artist

Now you go hunting. Not for templates. For **references**.

Open **Mobbin** (or Mobbin, or Pageflows, or even Dribbble — but Mobbin is the one). Search for your site type. "SaaS landing page." "Portfolio." "Agency." Whatever.

Screenshot 3-5 screens that make you go "wow." Not 50. Not 1. **3 to 5.** Any more and you'll get decision paralysis. Any less and you'll copy.

Then take those screenshots and do this:

| What to Look For | Example Questions |
|---|---|
| **Layout** | Full-width hero? Split screen? Card grid? |
| **Section Order** | Hero → Features → Testimonials → CTA? Or something different? |
| **Color Palette** | Dark mode? Pastels? High contrast? Monochrome with one accent? |
| **Typography** | Serif for headings? Sans-serif body? One font family or two? |
| **Spacing** | Tight and dense? Airy and minimal? |
| **Imagery** | Photos? Illustrations? 3D? Abstract? None? |

Now here's the move that makes this work: **paste those screenshots into Claude** and say:

> "I'm building a WordPress site for [what it does]. Here are 3 designs I love. Give me: layout pattern, section order, color palette, typography style, spacing rules to follow."

Claude gives you a **design blueprint** — not a template, a **pattern** you follow while coding. Exact hex codes. Font pairings. Section order. Spacing rules. Everything.

This is not cheating. This is what every senior designer does — they just call it "moodboarding" instead of "asking Claude."

**Alternative — v0.dev (free):**

Go to v0.dev → describe your site idea → it generates a full UI with working code. Type "give me 5 variations of this" → pick the one that hits → take that code → convert it to a WordPress theme via Claude.

Either path works. Mobbin → Claude blueprint → code. Or v0 → variations → code. Both are free. Both produce better results than starting from scratch.

**Bottom line:** You don't need original ideas. You need a curated set of references that you turn into a pattern.

---

## Step 3: Work on the Wireframe — Structure Before Beauty

You've got your pattern. Now map the **skeleton** — before you think about colors, fonts, or images.

A wireframe is just boxes on a page. Nothing pretty. Just structure.

Open Figma (or Penpot, or even a notebook) and lay out:

1. **Hero section** — what goes here? Headline + CTA? Headline + image + CTA?
2. **Feature grid** — 3 columns? 2 + sidebar? Bento grid?
3. **Social proof** — logos? Testimonials? Screenshot carousel?
4. **CTA section** — simple button? Pricing table? Free trial signup?
5. **Footer** — links? newsletter? social icons?

You're not designing yet. You're **deciding what goes where.** That's it.

| Section | Wireframe Question | Decision |
|---|---|---|
| Hero | One column or split? | Split — left text, right visual |
| Features | Grid or list? | 3-column grid |
| Testimonials | Cards or carousel? | Cards — cleaner |
| Pricing | Table or toggle? | Toggle monthly/yearly |
| CTA | Full-width banner? | Full-width, dark background |

**The wireframe is your contract with yourself.** Once it's set, you don't move sections around during the design phase. You already decided. Now you execute.

**Bottom line:** Wireframes are not optional. They're the difference between "designing as you go" (which always ends in a mess) and "following a plan" (which always ends in something coherent).

---

## Step 4: Wireframe to Design — Make It Look Like You Meant It

Now you dress the skeleton. This is where the pattern from Step 2 becomes your rulebook.

Take your Claude blueprint (or v0 output) and apply it to your wireframe:

### Color System

Pick **one** system and stick to it:

| Role | Color | Usage |
|---|---|---|
| **Primary** | `#6C3CE1` (from your blueprint) | CTAs, links, active states |
| **Secondary** | `#F5F0FF` | Light backgrounds, hover states |
| **Neutral Dark** | `#1A1A2E` | Headings, body text |
| **Neutral Light** | `#F8F9FA` | Page background |
| **Accent** | `#FF6B35` | Badges, highlights, one pop of color |

That's it. **Five colors.** Not 15. Not "I'll pick as I go." Five. Written down. Applied consistently.

### Typography System

Two fonts. Maximum.

- **Headings:** Inter Bold, 32-48px
- **Body:** Inter Regular, 16-18px
- **Mono (code):** JetBrains Mono, 14px

### Spacing System

Use multiples of 8. Always.

- Section padding: **80px** (desktop) / **40px** (mobile)
- Card padding: **24px**
- Grid gaps: **24px** or **32px**
- Element spacing: **8px**, **16px**, **24px**, **32px** — pick from these, nothing in between

**Bottom line:** The design phase is not "make it pretty." It's "apply your pattern consistently to every section of the wireframe." That's what makes it look intentional.

---

## Step 5: Content, Template, Foundation, Colors, and Images — The Final Layer

You've got the design. Now fill it with **real content** — not lorem ipsum, not placeholder images.

### Content

Write the copy. All of it. Headlines, subheads, body text, button labels, testimonials. Before you code.

Why? Because content determines layout. A headline that's 8 words fits differently than one that's 20. A testimonial with a name, role, and company needs more space than one with just a name. **Design around content, not the other way around.**

### Foundation

If you're building WordPress (which is what I do), this is where you set up:

- **Theme structure** — `style.css`, `functions.php`, template files
- **Component library** — reusable blocks for cards, buttons, sections
- **Global styles** — your color system and typography system baked into CSS custom properties

### Colors

You already picked them in Step 4. Now implement them as CSS custom properties:

```css
:root {
  --color-primary: #6C3CE1;
  --color-secondary: #F5F0FF;
  --color-dark: #1A1A2E;
  --color-light: #F8F9FA;
  --color-accent: #FF6B35;
  --font-heading: 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 48px;
  --space-6: 80px;
}
```

### Images

Three rules:

1. **No stock photos of people pointing at laptops.** Ever.
2. Use **Unsplash** or **Picsum** for free, high-quality images that don't look generic.
3. Apply a **consistent treatment** — same border radius, same overlay, same aspect ratio across all images on the site. Consistency > perfection.

### Figma Organization

If you use Figma (and you should, even just for organization), structure it like this:

```
📁 Project Name
  📁 01 - References (your Mobbin screenshots)
  📁 02 - Wireframes (your skeleton)
  📁 03 - Design (final mockups)
  📁 04 - Components (buttons, cards, forms)
  📁 05 - Assets (images, icons, logos)
```

This isn't overkill. This is what keeps you from losing your mind when you come back to the project 3 weeks later and can't remember where you put the hero section mockup.

**Bottom line:** Content first, then code. Always. A beautiful site with placeholder text is a prototype, not a product.

---

## The Full Flow, One More Time

1. **Talk and Discuss** — Nail the idea. One sentence. Write it down.
2. **Find References and Variations** — Mobbin → 3-5 screenshots → Claude for blueprint (or v0 for variations).
3. **Wireframe** — Boxes on a page. Section order. Layout decisions. No colors yet.
4. **Wireframe to Design** — Apply your pattern: colors, fonts, spacing. Consistently.
5. **Content and Foundation** — Real copy, real images, CSS custom properties, organized Figma files.

> The reason most sites look generic isn't the tool. It's the lack of a pattern.

You don't need Figma Pro. You don't need a design degree. You don't need an AI that generates entire sites. You need a **workflow** that takes you from "I have a vague idea" to "I have a site that looks like I meant every pixel."

This is that workflow. Now go build.

---

*Workflow by Mani Bharadwaj. References: [Mobbin](https://mobbin.com), [v0.dev](https://v0.dev), [Figma](https://figma.com), [Penpot](https://penpot.com), [Unsplash](https://unsplash.com).*
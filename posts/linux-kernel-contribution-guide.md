---
title: "The Linux Kernel Contribution Game: A Complete Guide for First-Time Contributors"
author: "Mani Bharadwaj"
date: "2026-06-14"
cover: "https://picsum.photos/seed/linuxkernel/1440/720"
excerpt: "Everything I learned about contributing to the Linux kernel — from picking your first issue to getting merged into mainline. No fluff, no gatekeeping, just the real game."
tags: ["linux-kernel", "open-source", "systems-programming", "career", "rust", "c"]
---

You know the operating system on your phone? That runs on Linux.

Netflix, Instagram, Google servers, AWS, Azure — basically every website on the planet — runs on Linux.

Tesla, Mars rovers, every router, every smart TV — all Linux.

Linux is the code that runs the world. **30 million+ lines of code. 29,000+ contributors.** One person started it — Linus Torvalds in 1991 — and he still runs it.

Contributing to Linux means writing code that goes inside this operating system. Your code literally runs on billions of devices worldwide.

Most first contributions are tiny — fixing a typo, removing a blank line, cleaning up formatting. You don't build new features on day one. You clean up what's already there.

Think of Linux as a giant building. The "staging" section is the "under construction" zone. Every driver in staging has a TODO file — literally a to-do list of what needs fixing. The TODO tells you exactly what to fix. It's like a homework assignment.

---

## The Prestige — Why This Matters

Here are some numbers that should wake you up:

- 100% of the top 500 supercomputers run Linux
- 96.3% of the world's top 1 million servers run Linux
- 85% of all smartphones run Linux (Android)
- Every Tesla, every Mars rover, every router, every smart TV — all Linux
- No AI replaces the kernel. If anything, AI needs Linux **more**
- OpenAI is hiring Linux kernel engineers at **$342K–$555K**

A merged Linux kernel patch on your CV carries more weight than almost anything else in open source. Your name is permanently in the git history alongside Linus Torvalds and 31,000+ other people who built the code that runs the world.

---

## Real People Who Got Hired Through Kernel Work

This isn't theoretical. Real humans did this:

- **Jens Axboe** → College dropout, CD-ROM patches → Linux block layer maintainer → now at Meta
- **Gustavo Silva** → A few patches in 2010 → now full-time Linux Foundation kernel engineer
- **Marcin Juszkiewicz** → Hobbyist with Sharp Zaurus → hired by Canonical/Linaro, then Red Hat
- **Jerin Jacob** → Embedded kernel work → grew team from 1 to ~50 at Cavium/Marvell, now Senior Director
- **Pete Zaitcev** → Hobbyist in 1994 → Principal Engineer at Red Hat
- **LF Hernandez** → LKMP mentorship, 10 patches (5 merged) → conference talks
- **toblux** → First patch merged within 48 HOURS by Linus himself
- **lewboski** → First reviewer response in 2 HOURS for v2

---

## Companies That Hire Kernel Developers

| Company | Focus Area | Pay Range |
|---------|-----------|-----------|
| Google | Android kernel, cloud infra | $200K–$400K+ |
| Meta | Data center kernel, BPF | $250K–$450K+ |
| OpenAI | AI workload kernel optimization | $342K–$555K+ equity |
| NVIDIA | GPU drivers, AI/HPC | $184K–$356K |
| Red Hat | Enterprise Linux, subsystem maint. | $150K–$300K+ |
| ARM | ARM64 kernel, KVM | Senior level |
| Canonical | Ubuntu kernel (fully remote!) | Remote, worldwide |
| Qualcomm | ARM SoC, mobile kernel | Senior level |
| Samsung | ARM SoC, Android kernel | Senior level |
| Intel | x86, MM, networking, security | $180K–$350K+ |
| AMD | x86 enablement, GPU/ROCm | $170K–$320K+ |
| The Linux Foundation | Upstream maintenance, security | Fellow, maintainer |
| SiPearl | European HPC CPU (Rhea) | France/Spain/Italy |

---

## The Exact Timeline — From Email to Merged

```
Day 0     YOU SEND THE EMAIL
          |
Hour 1    BOTS RESPOND (not humans!)
          - Intel LKP/0-day bot picks up your patch
          - Builds it across 30+ architectures
          - 60% of build errors caught within 1 HOUR
          - If it compiles clean → silence (that's good)
          |
Day 1-2   More bot testing
          - Boot tests, performance checks
          - Patchwork indexes your patch
          |
Day 3-14  HUMAN REVIEW
          - Greg KH (staging maintainer) or subsystem maintainer reviews
          - He pledged: "1-2 weeks"
          - Other community members may comment too
          |
Day 7-21  FEEDBACK ARRIVES
          - "Fix this indentation"
          - "Add a Fixes: tag"
          - "This looks good, but..."
          - Or: silence (don't panic, maintainers are busy)
          |
Day 7-30  YOU SEND v2, v3 etc.
          - Fix what they asked
          - Re-send with [PATCH v2] in the subject
          - Each round gets faster review
          |
Week 3-8  ACCEPTED
          - Maintainer says "Applied to staging-testing"
          - Or gives Acked-by / Reviewed-by tag
          |
Week 4-10 LINUX-NEXT
          - Your patch enters linux-next for integration testing
          - Cooks here for 1-8 weeks
          |
Week 6-12 MERGE WINDOW
          - Maintainer sends pull request to Linus
          - Linus merges it into mainline
          - YOUR NAME IS IN THE KERNEL FOREVER
```

---

## The Bots — They Respond First

Within 1 hour of sending your patch, these bots automatically grab it:

| Bot/System | What It Does | Response Time |
|-----------|--------------|---------------|
| Intel 0-day / LKP | Builds, boots, tests your patch across many architectures. Reports build errors, boot failures, perf regressions. | 1-24 hours |
| Kernel.org Patchwork | Tracks when your patches are applied to linux-next or mainline. Sends notification email. | When applied |
| NIPA (netdev) | CI/build bot for networking subsystem. Runs checkpatch, build tests, kdoc validation. | Hours |
| Snowpatch | Rust-based CI bridging Patchwork to GitHub Actions. Runs builds/tests. | Hours |

**What this means:** If your patch has a build error, you'll know within 1 HOUR. The bots are FAST. If you get bot emails with errors → fix and resend. If the bots are silent → your code compiles clean. That's good.

---

## The Human Review Process

The kernel uses a **chain-of-trust** system:

1. **Linus Torvalds** → Only person who merges into mainline (~1.3% of patches go through him directly)
2. **Subsystem Maintainers** → Each subsystem has a designated maintainer (networking, staging, MM, etc.)
3. **Lower-level Maintainers** → Subsystem maintainers pull from these
4. **Andrew Morton / -mm tree** → "Maintainer of last resort" for orphan patches

For **STAGING** specifically: Greg Kroah-Hartman is THE sole maintainer. He's the bottleneck. ~60% rejection rate for staging patches. His pledge: **"I will review your patch within 1-2 weeks."**

The review flow for your patch:

1. You email patch to mailing list + CC the maintainer(s)
2. Maintainers and community review on the list
3. If accepted → maintainer applies to their tree
4. Enters linux-next for integration testing
5. During merge window → maintainer sends pull request to Linus
6. Linus merges into mainline

---

## Real Examples — How Long Did It Actually Take?

| Person | What They Fixed | First Response | Time to Merge |
|--------|-----------------|----------------|---------------|
| toblux (2024) | Regression bug in trace_events | Quick | 48 HOURS |
| Jesse (2025) | Typo fix in LED driver | ~1 week | ~1 week |
| lewboski (2026) | sprintf → sysfs_emit in IIO | 2 hours (v2) | ~2 weeks |
| Iman (2025) | cpufreq deadlock fix | Days | Several weeks |
| Abdelrahman | Documentation cleanup | Days | Several weeks (6 versions!) |

**Range: 48 hours to several months.** Simple cleanup = fast. Complex fix = slow.

---

## The Complete Step-by-Step Game Guide

### Step 1: Get the Code (30 min)

```bash
git clone git://git.kernel.org/pub/scm/linux/kernel/git/gregkh/staging.git
cd staging
git checkout staging-testing
```

### Step 2: Find Work (1 hour)

```bash
# See ALL staging drivers that have TODO files
find drivers/staging -name TODO

# Pick one. Let's say r8188fs
cat drivers/staging/r8188fs/TODO

# Run checkpatch to find style issues
perl scripts/checkpatch.pl -f drivers/staging/r8188fs/*.c

# Pick ONE issue. Fix it. Just one.
```

### Step 3: Make the Fix (30 min - 2 hours)

```bash
# Fix the code
# Then compile-test it
make M=drivers/staging/r8188fs

# Commit with proper format
git commit -s -v
# The -s adds "Signed-off-by: Your Name <your@email.com>"
# The -v shows the diff in the commit message for review
```

### Step 4: Pre-Flight Checks (15 min)

```bash
# Generate the patch file
git format-patch -1

# Run checkpatch on YOUR PATCH (not the source file this time)
perl scripts/checkpatch.pl <your-patch.patch>

# If checkpatch says ERROR → fix it, re-commit
# If checkpatch says WARNING only → you're probably fine

# Find WHO to send it to
perl scripts/get_maintainer.pl <your-patch.patch>
# This prints a list of emails — these are your recipients
```

### Step 5: Send the Email (10 min)

```bash
# ALWAYS dry-run first
git send-email --dry-run <your-patch.patch>

# Check: does the email look right? Subject line? Signed-off-by?

# Send for real
git send-email <your-patch.patch>

# THIS IS THE MOMENT. Your patch is now on the Linux kernel mailing list.
# 31,000+ contributors started exactly where you are.
```

### Step 6: Wait and Watch (1-3 weeks)

- **Hour 1:** Bots build your patch. Check your email.
  - Got a bot email with errors? Fix and resend as v2.
  - No bot email? Good — your code compiles clean.
- **Day 3-14:** Wait for human review.
  - Greg KH or a subsystem maintainer reviews it.
  - Don't send follow-ups. Don't ping. Just wait.
  - 1-2 weeks is normal.
- **Day 7-21:** Feedback arrives (or silence).
  - If you get feedback: fix it, send v2.
  - If silence after 2 weeks: send a polite "ping" email.
- **Week 3-8:** If accepted, it enters linux-next.
- **Week 6-12:** Merged into mainline during a merge window.

---

## The Modern Way — Using b4

`b4` is a helper tool that automates a LOT of the process:

```bash
# Install it
pip install b4

# Start a topical branch
b4 prep -n my-first-fix

# Make your changes, commit them

# Find the right recipients AUTOMATICALLY
b4 prep --auto-to-cc

# Run checkpatch and other checks
b4 prep --check

# Send it
b4 send

# Later: collect review tags automatically
b4 trailers -u

# Clean up after acceptance
b4 prep --cleanup
```

`b4` handles: version numbering, changelogs, finding recipients, checkpatch, and collecting review tags. Like a power-up for the whole process.

---

## What NOT to Do (The Killers)

| DON'T | DO INSTEAD |
|-------|-----------|
| Send a GitHub pull request | Send an email patch |
| Fix 10 things in one patch | One logical change per patch |
| Send without Signed-off-by | Always use `git commit -s` |
| Ping after 2 days | Wait 1-2 weeks before pinging |
| Send whitespace-only patches | Fix actual checkpatch warnings |
| Submit to the wrong tree | Use `get_maintainer.pl` |
| Use HTML email | Plain text only, no formatting |
| Get defensive about feedback | Say "thanks, will fix" and send v2 |
| Send during merge window blackout | Submit during -rc2 through -rc6 |
| Ask "why isn't my patch reviewed?" | Be patient, maintainers are busy |

---

## The Honest Timeline Summary

| Scenario | Time to Merge |
|----------|---------------|
| Best case: Simple typo/whitespace fix, right subsystem, no revisions | 2 days |
| Good case: Checkpatch cleanup in staging, 1-2 revisions | 2-4 weeks |
| Normal case: Real bug fix, 2-3 revisions, active subsystem | 4-8 weeks |
| Slow case: Complex feature, multiple revisions, slow maintainer | 2-4 months |

Your realistic expectation for a first staging patch:

- **2-4 weeks** from email to "Applied"
- Then another **4-8 weeks** until it's in mainline Linux

---

## Pro Tips Nobody Tells You

### 1. The Bots Are Your Friends
If LKP sends you an error, that's FREE testing. Fix it and resend. No shame.

### 2. Silence Is Normal
Maintainers are busy. 1-2 weeks of silence is normal. Don't panic.

### 3. Greg KH Reviews Staging Patches Personally
That's like getting code review from the CEO. Treat it with respect.

### 4. Every Revision Gets Faster
v1 might take 2 weeks. v2 might take 3 days. v3 might take 1 day. Reviewers are already familiar with your patch.

### 5. The Community Is Friendlier Than Its Reputation
Multiple first-timers in 2024-2026 said they were "terrified" but found the community "quite friendly and helpful."

### 6. Keep Working While You Wait
Don't gate your productivity on one patch. Submit fix #1, then start fix #2.

### 7. Your Name Is in Git Log Forever
When your patch merges, anyone can `git blame` that line and see your name. That's a CV line that never expires.

### 8. Linux Invented Git but Doesn't Use GitHub PRs
Linus Torvalds created Git in 2005 to manage Linux kernel development. GitHub came 3 years later. Linux said "nah we're good with email" and never switched. The inventor of the game doesn't play by your rules.

### 9. The TODO Files Are Better Than "Good First Issue" Labels
Linux staging drivers have actual TODO files that say "fix this, clean this, convert this." That's a to-do list, not a label. It's way more real.

### 10. The Patch Is the Interview
When you can merge a kernel patch, you've proven you can read real code, find the right file, write a fix, and respond to review. That's worth more than any LeetCode problem.

---

## The Rust Path — Your Secret Weapon

Linux now officially supports Rust (no longer "experimental" as of Dec 2025). It's growing 5x year-over-year.

Why Rust is your advantage:

- Real production drivers already shipping on millions of Android devices
- Nova GPU driver (NVIDIA, written in Rust) being actively upstreamed
- DRM maintainer said graphics is "a year away" from requiring Rust
- Fewer experienced people in Rust kernel = advantage for newcomers
- Community is actively welcoming beginners
- Has actual "good first issue" labels on GitHub: [Rust-for-Linux issues](https://github.com/Rust-for-Linux/linux/issues?q=label%3A%22good+first+issue%22)
- Nova driver has beginner/intermediate/advanced task labels: [Nova TODO](https://kernel.org/doc/html/latest/gpu/nova/core/todo.html)

If you learn Rust, you enter a brand new, fast-growing area of the kernel where newcomers have the most advantage.

---

## Apple vs. Linux vs. Tldraw — Comparison

| | Linux Kernel | Tldraw/Infisical | Apple |
|---|--------------|------------------|-------|
| Prestige | World-class | Solid | World-class |
| Time to first merge | 2 weeks - 4 months | 1-2 weeks | Weeks-months |
| Difficulty | Hard (email, C/Rust) | Easy (GitHub, TS) | Medium-hard |
| Hiring signal | Google, Meta, NVIDIA hire from this | These companies hire contributors | Apple teams find YOU |
| Stack match for you | Need Rust or C | Your exact stack | Swift ecosystem |
| Remote jobs | Canonical remote; most on-site | All remote-friendly | Mostly hybrid Cupertino/London |
| Career upside | Systems/kernel eng | Full-stack/SaaS | Apple ecosystem |
| Process | Email patches | GitHub PRs | GitHub PRs (some) |
| Contributor pipeline | Proven 30+ years | Proven | No formal pipeline |

**Recommendation:** Run Tldraw/Infisical NOW (your stack, fast merge). Start Linux on the side (long-term play, highest ceiling). Apple can be a parallel long-term play (build visible Swift expertise).

---

## The Oldest, Most Starred, Most Contributed Repos

- **Oldest open source project still alive:** The Kermit Project — Born 1981, still maintained
- **Oldest code still running in production:** Dennis Ritchie's `timezone.c` — Written January 10, 1979. Still in modern FreeBSD 15.0 — 46 years of continuous use
- **Oldest tracked open source contribution on GitHub:** June 20, 1972 — Ken Thompson's Unix Research V1 kernel, 4,768 lines of PDP-11 assembly
- **Most starred GitHub repo:** codecrafters-io/build-your-own-x — ~500K stars
- **Most contributors:** torvalds/linux — ~31,829 contributors
- **Most commits:** torvalds/linux — ~1,428,486 commits (~77,000 new commits per year)

---

## Mentorship Programs

### Linux Kernel Mentorship Program (LKMP)
- URL: [wiki.linuxfoundation.org/lkmp](https://wiki.linuxfoundation.org/lkmp)
- Run by: The Linux Foundation, led by Shuah Khan (kernel maintainer)
- Structure: 3 twelve-week full-time + 2 twenty-four-week part-time per year
- Stipend: Location-based
- Requirements: Complete free LFC103 e-course, submit patches + cover letter
- Graduation: Minimum 5-10 patches + final blog report
- Community: #kernel-mentees on OFTC IRC, linux-kernel-mentees mailing list

### Outreachy
- URL: [outreachy.org](https://outreachy.org)
- Open to: Women (cis and trans), trans men, genderqueer, underrepresented groups
- Provides: 3-month paid internships with open-source organizations
- Stipend: ~$7,000
- Linux kernel participates as a mentor org

### Google Summer of Code (GSoC)
- URL: [summerofcode.withgoogle.com](https://summerofcode.withgoogle.com)
- The Linux Foundation participates with kernel-related projects
- Stipend: Varies by country
- Runs: May-August

### LFX Mentorship
- URL: [mentorship.lfx.linuxfoundation.org](https://mentorship.lfx.linuxfoundation.org)
- The Linux Foundation's broader mentorship platform
- LKMP applications go through this

---

## Final Thought

Contributing to the Linux kernel is not about being a genius. It's about being patient, respectful, and persistent.

You don't need a degree. You don't need permission. You don't need to be the best programmer in the world.

You need to:
1. Read the docs
2. Find one small thing to fix
3. Follow the process
4. Respond to feedback kindly
5. Keep going

Your first patch might be a single-line fix. That's fine. Linus Torvalds started with less.

The kernel is the biggest game in town. And the door is wide open.

---

*If this guide helped you, share it with someone who wants to break into systems programming. And if you send your first patch, come back and tell me about it.*

---
title: "From Open Source to Earning: The Complete Guide"
author: "Mani Bharadwaj"
date: "2026-06-14"
cover: "https://picsum.photos/seed/osstoearning/1440/720"
excerpt: "A real-talk, no-BS guide covering everything from contributing to the Linux kernel to landing freelance work and earning through bug bounties. Every platform, every number, every honest take — all in one place."
tags: ["open-source", "career", "freelancing", "bug-bounty", "linux-kernel", "earning"]
---

A real-talk, no-BS guide covering everything from contributing to the Linux kernel to landing freelance work and earning through bug bounties. Every platform, every number, every honest take — all in one place.

---

## The Starting Point: Your OSS Job-Hunt Playbook

It started with a simple idea: **don't apply cold — contribute first, then apply with a merged PR as your resume.**

The `opensource-context` repo contains a curated list of **50 funded, hiring, OSS companies** where you can apply through a PR. The strategy:

1. Pick 5-10 companies that match your stack
2. Lurk 2 weeks — read issues, PRs, Discord
3. Ship 1 small PR (quality > scope)
4. Write a public postmortem
5. Apply through the job link, mention the PR in your cover letter
6. After the PR is merged, ask for a referral

### The Top 10 Picks (Matched to My Stack)

| # | Company | Repo | Why | Apply |
|---|---------|------|-----|-------|
| 1 | Infisical | `Infisical/infisical` | 12 good-first-issues, dedicated "Open Source Engineer" role | [infisical.com/careers](https://infisical.com/careers) |
| 2 | Tldraw | `tldraw/tldraw` | 7 GFIs, remote SE role, pure TypeScript | [jobs.weekday.works](https://jobs.weekday.works/tldraw-software-engineer) |
| 3 | Appwrite | `appwrite/appwrite` | Flutter + RN + Web SDKs match my mobile stack | [careers.appwrite.io](https://careers.appwrite.io/) |
| 4 | OpenHands | `All-Hands-AI/OpenHands` | AI focus, TS SDK + Python agent runtime | [openhands.dev](https://www.openhands.dev) |
| 5 | Directus | `directus/directus` | APAC remote role — my timezone | [directus.io/careers](https://directus.io/careers) |
| 6 | Novu | `novuhq/novu` | TS monorepo, notifications infra | [handbook.novu.co](https://handbook.novu.co/careers-page) |
| 7 | Supabase | `supabase/supabase` | 47+ open roles, Postgres + TS | [supabase.com/careers](https://supabase.com/careers) |
| 8 | Cal.com | `calcom/cal.com` | TS monorepo, open startup | [cal.com/jobs](https://cal.com/jobs) |
| 9 | Plane | `makeplane/plane` | Python/Django + TS | [plane.so/careers](https://plane.so/careers) |
| 10 | Documenso | `documenso/documenso` | Next.js + tRPC + Prisma — my exact stack | [documenso.com](https://documenso.com) |

### The 30-Day Tldraw Execution Plan (The #1 Pick)

- **Week 1:** Read CONTRIBUTING.md, set up dev environment, claim issue #8907
- **Week 2:** Ship the PR (<200 lines, with tests + changelog)
- **Week 3:** Write a public postmortem, start a second PR, DM the maintainer
- **Week 4:** Apply with the PR referenced in the cover letter, ask for a referral

---

## Can You Get Into Apple Through Open Source?

**Yes, but it's NOT like the Infisical/Tldraw playbook.**

People HAVE gotten hired at Apple through OSS visibility:

| Person | What They Did | How Apple Found Them |
|--------|--------------|----------------------|
| Natalia Panferova | SwiftUI blog posts & workarounds | SwiftUI team found her blog, reached out directly |
| Shashikant Jagtap | Built iOS CI/CD tools, open-sourced them | Apple approached him based on visible expertise |
| Ryosuke Niwa | 5,000+ WebKit commits | Natural merit path via WebKit project |
| Cai Yue | Built IceCream library (CloudKit/Realm) | CloudKit team emailed him from Cupertino |

**But here's the catch:** Apple doesn't have a formal contributor-to-hire pipeline. Apple employees need management + Legal approval to contribute to external OSS — and it gets denied 90%+ of the time. Only ~50 Apple employees reportedly have OSS contribution approval.

The real play for Apple:
1. Build visible expertise in Apple's ecosystem (Swift, SwiftUI, CoreML)
2. Publish what you learn (blog posts, libraries, conference talks)
3. Apple teams actively watch for people building things — they find YOU
4. It's a 6-12 month play, not a 30-day play

**Apple's contributor-friendly repos:**

| Repo | Stars | Can You Contribute? |
|------|-------|-------------------|
| `apple/containerization` | 8.6k | ✅ Best entry — has "New to open source?" section |
| `swiftlang/swift` | 70k | ✅ Has FirstPullRequest guide |
| `apple/swift-nio` | 8.5k | ✅ 230 contributors, Apache 2.0 |
| `apple/foundationdb` | 16k | ✅ 290 contributors, merit-based committer path |

---

## The Linux Kernel: The Mountain Everything Else Is a Hill

### Why Linux?

- **100%** of the top 500 supercomputers run Linux
- **96.3%** of the world's top 1 million servers run Linux
- **85%** of all smartphones run Linux (Android)
- Every Tesla, every Mars rover, every router — all Linux
- OpenAI hires Linux kernel engineers at **$342K-$555K**

A merged Linux kernel patch on your CV carries more weight than almost anything else in open source.

### The Prestige Numbers

| Stat | Number |
|------|--------|
| Total contributors ever | ~31,829 |
| Per release | ~2,000 developers |
| First-timers per release | ~250-330 |
| Total commits | ~1,428,486 |
| New commits per year | ~77,000 |

### Real People Who Got Hired Through Kernel Work

- **Jens Axboe** → college dropout, CD-ROM patches → Linux block layer maintainer → now at Meta
- **Gustavo Silva** → a few patches in 2010 → now full-time Linux Foundation kernel engineer
- **Marcin Juszkiewicz** → hobbyist with Sharp Zaurus → hired by Canonical/Linaro, then Red Hat
- **Jerin Jacob** → embedded kernel work → grew team from 1 to ~50 at Cavium/Marvell

### The Rust Path (New & Growing)

Linux now officially supports Rust (no longer "experimental" as of Dec 2025). It's growing **5x year-over-year**:

- Production drivers already shipping on millions of Android devices
- Nova GPU driver (NVIDIA, written in Rust) is being actively upstreamed
- The DRM maintainer said graphics is "a year away" from requiring Rust for new drivers
- [Rust-for-Linux has actual `good first issue` labels on GitHub](https://github.com/Rust-for-Linux/linux/issues?q=label%3A%22good+first+issue%22)

If you learn Rust, you enter a brand new, fast-growing area where newcomers have the most advantage.

### Comparison: Linux vs. Tldraw vs. Apple

| | Linux Kernel | Tldraw/Infisical | Apple |
|---|---|---|---|
| Prestige | World-class | Solid | World-class |
| Time to first merge | 2 weeks - 4 months | 1-2 weeks | Weeks-months |
| Difficulty | Hard (email, C/Rust) | Easy (GitHub PRs, TS) | Medium-hard |
| Hiring signal | Google, Meta, NVIDIA hire from this | These companies hire contributors | Apple teams find YOU |
| Stack match | Need Rust or C | Your exact stack (TypeScript) | Swift ecosystem |
| Remote jobs | Canonical remote; most on-site | All remote-friendly | Mostly hybrid Cupertino |
| Process | Email patches | GitHub PRs | GitHub PRs (some) |

---

## The Linux Kernel Contribution Game Guide

### WTF Is Linux Contribution?

Linux = the code that runs the world. 30M+ lines of code. 29,000+ contributors. One guy started it (Linus Torvalds, 1991) and he still runs it.

"Contributing to Linux" = writing code that goes inside this operating system. Your code literally runs on billions of devices worldwide.

Most first contributions are TINY — fixing a typo, removing a blank line, cleaning up formatting. You don't build new features. You clean up what's already there.

### How It's Different from GitHub

| GitHub (Tldraw, Infisical) | Linux Kernel |
|----------------------------|--------------|
| Submit a PR on GitHub | Send a patch via email using `git send-email` |
| Maintainers review on the web | Maintainers review on mailing lists |
| `good first issue` labels | `drivers/staging/TODO` files + `checkpatch.pl` |
| Merge in days | Merge in weeks to months |
| Any language, any stack | C (primarily) + Rust (growing fast) |
| Web-based, familiar | CLI-based, unfamiliar workflow |

### The Exact Timeline: From Email to Merged

```
Day 0     YOU SEND THE EMAIL
Hour 1    BOTS RESPOND — Intel LKP builds your patch on 30+ architectures
Day 1-2   More bot testing, Patchwork indexes your patch
Day 3-14  HUMAN REVIEW — Greg KH or subsystem maintainer reviews (pledges 1-2 weeks)
Day 7-21  FEEDBACK ARRIVES — fix what they asked, send v2
Day 7-30  REVISIONS — v2, v3, each round gets faster
Week 3-8  ACCEPTED — maintainer applies to tree
Week 4-10 LINUX-NEXT — integration testing
Week 6-12 MERGE WINDOW — Linus merges into mainline
```

### Real First-Patch Timelines

| Person | What They Fixed | Time to Merge |
|--------|----------------|---------------|
| toblux (2024) | Regression bug | **48 hours** |
| Jesse (2025) | Typo fix | **~1 week** |
| lewboski (2026) | sprintf → sysfs_emit | **~2 weeks** |
| Iman (2025) | cpufreq deadlock | **Several weeks** |
| Abdelrahman (2025) | Documentation cleanup (6 versions) | **Several weeks** |

### Step-by-Step: Your First Kernel Patch

```bash
# 1. Clone the staging tree
git clone git://git.kernel.org/pub/scm/linux/kernel/git/gregkh/staging.git
cd staging && git checkout staging-testing

# 2. Find work
find drivers/staging -name TODO
perl scripts/checkpatch.pl -f drivers/staging/<driver>/*.c

# 3. Fix ONE issue, compile-test
make M=drivers/staging/<driver>

# 4. Commit properly
git commit -s -v  # -s adds Signed-off-by

# 5. Pre-flight checks
git format-patch -1
perl scripts/checkpatch.pl <your-patch.patch>
perl scripts/get_maintainer.pl <your-patch.patch>

# 6. Send (dry run first!)
git send-email --dry-run <your-patch.patch>
git send-email <your-patch.patch>
```

### The Modern Way: Using b4

```bash
pip install b4
b4 prep -n my-first-fix           # Start a topical branch
# Make your changes, commit
b4 prep --auto-to-cc              # Find recipients automatically
b4 prep --check                   # Run checkpatch and pre-flight checks
b4 send                            # Send the patch
b4 trailers -u                     # Collect review tags later
b4 prep --cleanup                  # Clean up after acceptance
```

### What NOT to Do

- Don't send a GitHub pull request — use email patches
- Don't fix 10 things in one patch — one logical change per patch
- Don't send without `Signed-off-by` — always use `git commit -s`
- Don't ping after 2 days — wait 1-2 weeks
- Don't send whitespace-only patches — fix actual checkpatch warnings
- Don't submit to the wrong tree — use `get_maintainer.pl`
- Don't use HTML email — plain text only
- Don't get defensive about feedback — say "thanks, will fix" and send v2

### Mentorship Programs

- **LKMP (Linux Kernel Mentorship Program):** 3 positions per cycle, 12-week full-time. Apply at [wiki.linuxfoundation.org/lkmp](https://wiki.linuxfoundation.org/lkmp)
- **Outreachy:** 3-month paid internships for underrepresented groups. ~$7,000 stipend. [outreachy.org](https://outreachy.org)
- **Google Summer of Code:** Linux Foundation participates with kernel projects. [summerofcode.withgoogle.com](https://summerofcode.withgoogle.com)

---

## Freelance Platforms: The Real Deal

### The Hard Truth

There is NO perfect platform that's: free + no interview + no competition + high pay + always-on. You have to pick your tradeoff.

### Platform Comparison

| Platform | Years | Fee to You | Entry Barrier | Competition | Avg Rate | India? |
|----------|-------|-----------|---------------|-------------|----------|--------|
| Upwork | 27 | 10% | Low | VERY HIGH | $25-$150/hr | ✅ |
| Fiverr | 16 | 20% | Low | VERY HIGH | $20-$150+/hr | ✅ |
| Contra | 7 | 0% BUT **$29/mo paywall** | Pay to play | Low | $60-$150/hr | ✅ |
| Toptal | 16 | 0% | VERY HIGH (3% pass) | Low (if in) | $80-$200+/hr | ✅ |
| Turing | 8 | 0% (hidden 50% margin) | Moderate | Low | $30-$100/hr | ✅✅ |
| Arc.dev | 9 | 0% | High | Moderate | $60-$110/hr | ✅ |

### Contra: The Paywall Problem

Contra markets itself as "0% commission" — and that's technically true. They don't take a cut of your earnings. BUT:

- Free tier = **portfolio display only** with LIMITED job access
- To actually SEE and APPLY for most jobs = **Contra Pro at $29/month or $199/year**
- As one reviewer put it: **"You pay 0% on $0. I still have $0."**

The "0% commission" claim is real — but it's meaningless if you can't access the jobs without paying first.

### My Honest Pick

**Start with Upwork** (free, massive volume, build reviews) → **Move clients off-platform** (direct relationship, no fees) → **Apply to Toptal** (if you can pass, $80-$200+/hr guaranteed).

---

## The Bounty Game: Where Real Money Lives

### Bug Bounty (Find a Security Bug, Get Paid)

#### 👑 HackerOne — THE KING

| Stat | Number |
|------|--------|
| Total paid out | **$300M+ lifetime** |
| Paid last year | **$81M** ($220K paid EVERY DAY) |
| Active programs | 1,950+ |
| Top earner lifetime | $4M+ (one person) |
| 30+ people earned | $1M+ each |
| Free to join | ✅ YES |
| Works in India | ✅ India is one of the LARGEST communities |
| Indian hunter multiplier | Up to **16x local dev salary** |

**Typical bounties:** Low: $100-$300 | Medium: $500-$1,000 | High: $1,000-$2,500 | Critical: $3,000-$5,000+

#### Bugcrowd — Second Biggest

| Stat | Number |
|------|--------|
| Total paid out | $50M+ |
| Active programs | 1,000+ |
| Top programs | Amazon, Tesla, OpenAI |
| Free to join | ✅ YES |

#### Intigriti — Best for Beginners

- Fastest triage times (you get feedback quickly)
- 250+ programs
- Free to join
- Best feedback loop for learning

### Crypto Bounties (The Insane Money)

#### Immunefi — Undisputed King

| Program | Max Bounty |
|---------|-----------|
| Uniswap v4 | **$15,500,000** |
| LayerZero | **$15,000,000** |
| Wormhole | **$10,000,000** (actually PAID OUT) |
| Chainlink | **$3,000,000** |

$110M+ total paid. But you need Web3/smart contract security skills.

### Code Bounties (Fix Code, Get Paid)

#### Algora — THE ONLY Daily Active Code Bounty Platform

- Login with GitHub
- Find a bounty issue
- Submit a PR
- Get paid when merged
- No KYC, no paywall
- Active companies: Trigger.dev, Firecrawl, Twenty, Cal.com, Activepieces
- Typical bounties: $50-$10,000+
- **Free to join, free to use**

### Big Tech Bounties

| Company | Max Bounty | Annual Payout |
|---------|-----------|---------------|
| Apple | $5,000,000+ | $35M+ since 2020 |
| Google | $1,500,000 | $17.1M in 2025 alone |
| Meta | $300,000 | $4M in 2025 |
| Microsoft | $250,000 | $16.6M in 2024 |

All free to submit. No paywall.

---

## The Honest Numbers: What People Actually Earn

### Freelance Platform Reality

| Platform | % Who Earn Meaningfully | Reality |
|----------|------------------------|---------|
| Upwork | ~4% | 96% earn almost nothing. The 4% who persist make real money. |
| Fiverr | ~4% | Same power law. 70% earn under $100/month. |
| Toptal | ~100% (of those accepted) | If you pass the 3% filter, you're basically guaranteed work. |
| Turing | ~80% (of those accepted) | Consistent work but they take ~50% of what the client pays. |

### Bug Bounty Reality

| Tier | % of Hunters | Annual Earnings |
|------|--------------|-----------------|
| $0/year | 35-45% | Most people who sign up never earn a bounty |
| $1-$1,000/year | 20-25% | Occasional low-severity findings |
| $1,000-$10,000/year | 15-20% | Regular part-time hunters |
| $10,000-$50,000/year | 8-12% | Dedicated, skilled hunters |
| $50,000-$100,000/year | 3-5% | Experienced, often on private programs |
| $100,000+/year | 1-2% | Elite researchers |

**The top 1% earn more than the bottom 90% combined. Private programs pay 2-4x what public programs pay.**

### AI/ML Premium

Across ALL platforms, AI/ML skills command a **40-60% premium**. On Upwork, an AI/ML specialist earns $100-$200+/hr vs $25-$50/hr for general web dev. Same person, different positioning.

---

## Conclusion: Your Playbook

### The Three Tracks

You don't have to pick one. Run them in parallel:

#### Track 1: OSS → Job (30-Day Play)
- Execute the Tldraw/Infisical plan
- TypeScript, GitHub PRs, fast merge
- Apply with PR referenced in cover letter
- Ask for referral after merge
- **Timeline:** 30-60 days to first application

#### Track 2: Linux Kernel (Long-Term Play)
- Learn Rust on the side (30 min/day)
- Start with staging drivers or Rust-for-Linux good first issues
- Submit your first kernel patch through email
- Build contribution history over 6-12 months
- **Timeline:** 6-12 months to meaningful contributions

#### Track 3: Bounty/Earning (Start Today)
- Sign up for **HackerOne** (free, bug bounty, daily work)
- Sign up for **Algora** (free, code bounty, daily work)
- Sign up for **Intigriti** (free, best for beginners)
- Start on Upwork for freelance income while building skills
- **Timeline:** First bounty within weeks; first freelance client within 1-2 months

### The One Rule

**Don't put all your chips on one track.**

- Track 1 gets you a job fastest (30 days)
- Track 2 gives you the highest ceiling (Linux kernel = career-defining)
- Track 3 puts money in your pocket right now (bounties pay this week)

### The Final Numbers

| Goal | Track | Timeline | Expected Earnings |
|------|-------|----------|-------------------|
| First merged PR | Track 1 | 2-4 weeks | $0 (investment) |
| First job application | Track 1 | 4-8 weeks | Job offer ($40K-$80K+/year) |
| First freelance client | Track 3 | 1-4 weeks | $500-$2,000 |
| First bug bounty | Track 3 | 1-8 weeks | $100-$5,000 |
| First kernel patch | Track 2 | 2-8 weeks | $0 (prestige, not money) |
| Kernel contributor reputation | Track 2 | 6-12 months | Career-defining (Google, Meta, NVIDIA level) |

---

### All Sources and Links

**OSS Job-Hunt:**
- [Infisical Careers](https://infisical.com/careers)
- [Tldraw Software Engineer job](https://jobs.weekday.works/tldraw-software-engineer)
- [Appwrite Careers](https://careers.appwrite.io/)
- [OpenHands](https://www.openhands.dev)
- [Directus Careers](https://directus.io/careers)
- [Novu Careers](https://handbook.novu.co/careers-page)
- [Supabase Careers](https://supabase.com/careers)
- [Cal.com Jobs](https://cal.com/jobs)
- [Plane Careers](https://plane.so/careers)
- [Documenso](https://documenso.com)

**Apple OSS:**
- [Apple GitHub](https://github.com/orgs/apple/repositories)
- [Apple containerization CONTRIBUTING.md](https://github.com/apple/containerization/blob/main/CONTRIBUTING.md)
- [Natalia Panferova interview](https://www.swifttoolkit.dev/posts/dc-natalia)
- [Shashikant Jagtap blog](https://shashikantjagtap.net)

**Linux Kernel:**
- [Kernel HOWTO](https://docs.kernel.org/process/howto.html)
- [KernelNewbies First Patch](https://kernelnewbies.org/FirstKernelPatch_draft)
- [LKMP](https://wiki.linuxfoundation.org/lkmp)
- [Rust-for-Linux good first issues](https://github.com/Rust-for-Linux/linux/issues?q=label%3A%22good+first+issue%22)
- [b4 contributor docs](https://b4.docs.kernel.org/en/latest/contributor/overview.html)
- [toblux's 48-hour kernel patch](https://www.toblux.com/posts/2024/02/linux-kernel-patches.html)
- [lewboski's 2-week contribution](https://lewboski.dev/blog/linux-kernel)

**Freelance Platforms:**
- [Upwork](https://upwork.com) | [Contra](https://contra.com) | [Toptal](https://toptal.com) | [Turing](https://turing.com) | [Arc.dev](https://arc.dev)

**Bounty Platforms:**
- [HackerOne](https://hackerone.com) — $300M+ paid, 1,950+ programs
- [Bugcrowd](https://bugcrowd.com) — $50M+ paid, Amazon/Tesla/OpenAI programs
- [Intigriti](https://intigriti.com) — Best for beginners
- [Immunefi](https://immunefi.com) — Crypto bounties up to $15.5M
- [Algora](https://algora.io) — Code bounties, daily active, GitHub-based
- [Apple Security Bounty](https://security.apple.com/bounty/)
- [Google VRP](https://bughunters.google.com)

**The Oldest, Most Starred, Most Contributed:**
- Oldest still alive: Kermit Project (born 1981)
- Oldest code still running: Dennis Ritchie's timezone.c (1979)
- Oldest tracked contribution: Ken Thompson's Unix V1 (1972) at [github.com/dspinellis/unix-history-repo](https://github.com/dspinellis/unix-history-repo)
- Most starred: `codecrafters-io/build-your-own-x` (~500K stars)
- Most contributors: `torvalds/linux` (~31,829)
- Most commits: `torvalds/linux` (~1,428,486)

---

*The 30-day clock starts when you open your first issue. The bounty clock starts when you sign up. The kernel clock starts when you clone the staging tree. Go.* 🎮

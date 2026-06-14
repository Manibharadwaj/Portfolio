---
title: "The Payment World: Complete Guide for Indian Developers"
author: "Mani Bharadwaj"
date: "2026-06-14"
cover: "https://picsum.photos/seed/paymentworld/1440/720"
excerpt: "Everything you need to know about accepting payments in India — how it works, which gateway to use, when you get paid, and how to implement it in Next.js."
tags: ["payments", "india", "razorpay", "nextjs", "freelancing", "saas"]
---

Everything you need to know about accepting payments in India — how it works, which gateway to use, when you get paid, and how to implement it in Next.js.

---

## How the Payment World Works

### Simple Version

```
Customer clicks "Pay ₹500"
       ↓
Your Next.js app sends "Create order for ₹500" to Payment Gateway
       ↓
Payment Gateway shows payment options (UPI, Card, Net Banking)
       ↓
Customer pays via UPI/Card/whatever
       ↓
Payment Gateway verifies with bank
       ↓
Payment Gateway tells your app "Payment successful ✅"
       ↓
Payment Gateway sends money to your bank account (in 1-3 days)
```

**You never touch the customer's card.** The gateway handles everything. You just say "create order" and "verify payment."

### Detailed Flow

```
┌──────────┐     ┌──────────┐     ┌──────────────┐     ┌──────────┐
│ Customer  │────→│ Your App  │────→│   Razorpay   │────→│   Bank   │
│ (Browser) │←────│ (Next.js) │←────│   (Gateway)  │←────│ (SBI/etc)│
└──────────┘     └──────────┘     └──────────────┘     └──────────┘
     │                │                    │                    │
  1. Clicks     2. Creates order     3. Shows checkout    4. Processes
     "Pay"       on server           page (UPI/Card)     payment
     │                │                    │                    │
     │           5. Gateway calls   6. Gateway sends     7. Money settles
     │              webhook            signature            to your bank
     │                │                    │               (T+1 to T+3)
     │                │                    │
     └────────────────┴────────────────────┘
              8. Your app verifies
                 signature server-side
                 and marks order PAID
```

---

## Which Payment Gateways India Uses

| Gateway | Market Position | Best For | UPI? | Next.js SDK | Docs Quality |
|---------|----------------|----------|------|-------------|-------------|
| **🥇 Razorpay** | #1, 50M+ businesses | Startups, SaaS, Next.js | ✅ | Official React/Node | Excellent |
| **🥈 Cashfree** | Growing fast, cheapest | Marketplaces, payouts | ✅ | Official JS SDK | Good |
| **🥉 PayU** | Enterprise favorite | E-commerce, EMI | ✅ | Community | Adequate |
| **CCAvenue** | Legacy leader | Govt, education | ✅ | No official NPM | Dated |
| **Stripe India** | Best for USD/global | International SaaS | ❌ No UPI | Official Next.js | Best-in-class |
| **PhonePe PG** | UPI-native | UPI-first apps | ✅ | Limited | Growing |

### Developer Experience Rankings

| Gateway | DX Score | API Design | Docs | Sandbox | Community |
|---------|----------|-----------|------|---------|-----------|
| **Stripe** | 5/5 | Best-in-class | Best-in-class | Excellent | Massive |
| **Razorpay** | 5/5 | Stripe-inspired | Excellent | Excellent | Large |
| **Cashfree** | 4/5 | Modern REST | Good | Good | Growing |
| **PayU** | 3.5/5 | Adequate | Adequate | Basic | Moderate |
| **CCAvenue** | 2.5/5 | Dated | Dated | Basic | Small |

**Bottom line:** Razorpay and Stripe tie for developer experience. Razorpay cloned Stripe's philosophy for India. CCAvenue's API feels like 2015.

---

## Fees — What You Actually Pay

### Domestic (India)

| Payment Method | Razorpay | Cashfree | PayU | CCAvenue |
|---------------|----------|----------|------|----------|
| **UPI (under ₹2,000)** | **0%** 🎉 | **0%** 🎉 | **0%** 🎉 | 1.90% |
| **UPI (above ₹2,000)** | 1.5% | 1.75% | 1.99% | 1.90% |
| **Credit/Debit Cards** | 2% | 1.75-1.9% | 1.99-2.5% | 1.90% |
| **Net Banking** | ₹5-15/txn | ₹6-12/txn | ₹5-14/txn | 1.90% |
| **International Cards** | 3-3.5% | 2.5-3.5% | 3.5-3.9% | 3% |
| **Setup Fee** | Free | Free | Free | Free |
| **Annual Fee** | ₹1,999/yr (waivable) | Free | ₹2,999/yr (waivable) | ₹1,200/yr (1st yr free) |
| **Refund Fee** | ₹100/refund | ₹50/refund | ₹100/refund | Not listed |
| **Chargeback Fee** | ₹100/dispute | ₹150/dispute | ₹200/dispute | Not listed |

**Remember:** All fees are **pre-GST**. Add 18% GST on top.

**Example:** Customer pays ₹500 via UPI (under ₹2,000):
- You pay: **₹0** in fees (UPI is free under ₹2K)
- You receive: **₹500** in your bank (after T+2 settlement)

**Example:** Customer pays ₹5,000 via Credit Card:
- Razorpay fee: 2% of ₹5,000 = ₹100
- GST on fee: 18% of ₹100 = ₹18
- Total fee: ₹118
- You receive: ₹5,000 - ₹118 = **₹4,882**

### International (USD/EUR/GBP)

| Feature | Razorpay MoneySaver | Cashfree | CCAvenue | Stripe India |
|---------|---------------------|----------|----------|-------------|
| Fee | **1% flat, 0% FX** | 2.69-2.99% | 3.5% | 4.3% + 2% FX |
| Currencies | 135+ | 140+ | 27 | 135+ |
| e-FIRA | Auto-generated | On-demand | Available | ❌ Not auto |
| Settlement | T+1 in INR | T+2 to T+3 | T+3 to T+5 | T+5 to T+7+ |
| PA-CB License | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No |

**Winner for international:** Razorpay MoneySaver Export Account. 1% flat fee, zero forex markup, auto e-FIRA, T+1 settlement.

---

## When Do You ACTUALLY Get Your Money?

### Settlement Timelines

| Gateway | Claimed | Reality (Cards) | Instant Settlement | International |
|---------|---------|----------------|-------------------|---------------|
| **Cashfree** | T+1 | T+1 to T+2 | Yes (₹5 + 1%) | T+2 to T+3 |
| **Razorpay** | T+2 | T+2 (often T+3) | Yes (₹5 + 1.5%) | T+3 |
| **PayU** | T+2 | T+2 to T+3 | Yes (₹10 + 2%) | T+5 |
| **CCAvenue** | T+2-3 | T+2 to T+5 | Yes (on request) | T+3 to T+5 |

### What T+2 Actually Means

| Customer Pays On | Money Arrives On |
|-----------------|-----------------|
| Monday | Wednesday |
| Tuesday | Thursday |
| Wednesday | Friday |
| Thursday | **Monday** (weekend + bank holiday) |
| Friday | **Tuesday** |
| Saturday | **Tuesday** |
| Sunday | **Tuesday** |

**If there's a bank holiday on Monday, add 1 more day.**

### Instant Settlement (When You Need Money TODAY)

| Gateway | Fee | How Fast |
|---------|-----|----------|
| Razorpay | ₹5 + 1.5% | Within 30 minutes |
| Cashfree | ₹5 + 1% | Within 30 minutes |
| PayU | ₹10 + 2% | Within 30 minutes |

**Worth it when:** You need cash today. Not worth it for every transaction — the fees add up.

---

## UPI — The King of Indian Payments

### Why UPI Matters

| Payment Method | Volume Share | Value Share | Trend |
|---------------|-------------|------------|-------|
| **UPI** | **86%** | ~9.5% | 📈 Dominant and growing |
| Credit Cards | ~5% | High (avg ₹4K) | 📈 Growing at 21% CAGR |
| Debit Cards | Declining | Declining | 📉 -24.4% CAGR |
| Net Banking | Declining | Moderate | 📉 Being replaced by UPI |
| Wallets | Declining | Small | 📉 Consolidating |
| EMI | ~2-3% | Growing | 📈 18-25% AOV lift |

**9 out of 10 digital payments in India are UPI.** If you're building for India, UPI is non-negotiable.

### UPI Rules You Need to Know

| Rule | What It Means |
|------|--------------|
| UPI under ₹2,000 = 0% MDR | You pay zero fees on small UPI transactions |
| UPI over ₹2,000 = 1.5-2% | You pay merchant discount rate |
| UPI AutoPay time restrictions | Only processes before 10 AM, 1-5 PM, after 9:30 PM (since Aug 2025) |
| UPI AutoPay above ₹15,000 | Requires Additional Factor of Authentication (AFA) |
| 24-hour pre-debit notification | Mandatory before every auto-charge |
| Max 3 retries | Per failed recurring payment |
| Card tokenization mandatory | No raw PAN storage since 2022 — gateway handles this |

---

## My Pick: Razorpay

### Why Razorpay Wins for India

1. **Best developer experience** — API designed like Stripe (clean, modern)
2. **Best docs** — excellent Next.js tutorials everywhere
3. **UPI works perfectly** — 86% of Indian payments are UPI
4. **Fastest KYC** — minutes with cKYC/Aadhaar
5. **Subscriptions** — UPI AutoPay + card e-Mandates
6. **International** — MoneySaver Export Account for USD (1% flat, 0% forex)
7. **Free setup** — no annual fee (waivable)
8. **50M+ businesses** — most popular in India for a reason

### When to Use Something Else

| If You Need | Use This |
|-------------|----------|
| Cheapest fees | Cashfree (1.75% vs 2% on cards) |
| Fastest settlement | Cashfree (T+1 default) |
| Marketplace payouts | Cashfree (best Payouts API) |
| International SaaS subscriptions | Stripe (best multi-currency, best billing) |
| Enterprise EMI | PayU (best EMI coverage, LazyPay BNPL) |
| Global customers, non-INR | Stripe (best multi-currency) |

---

## KYC Requirements

### What You Need to Sign Up

| Requirement | Razorpay | Cashfree | PayU |
|-------------|----------|----------|------|
| Aadhaar/DigiLocker | ✅ | ✅ | ✅ |
| PAN | Personal + Business | Via API | Business PAN |
| Bank Verification | ₹1 deposit | Bank statement | IFSC + linking |
| Business Proof | GST/MSME/IEC | 10+ doc types | GST/license |
| GST Certificate | Required or MSME alternative | As business proof | Optional at onboarding |
| Video KYC | Only if cKYC fails | Not mentioned | Not mentioned |
| **Activation Speed** | **Minutes (with cKYC)** | Hours | 1-3 days |

### For Freelancers/Sole Proprietors

You need:
- Personal PAN ✅
- Aadhaar ✅
- Bank details ✅
- Business proof: GST certificate OR MSME/UDYAM registration OR Shop Establishment Certificate ✅

**GST is NOT strictly required** if you have MSME/UDYAM registration.

**Fastest path:** Razorpay with cKYC — activated in minutes.

---

## International Payments (USD from Clients Abroad)

### Razorpay MoneySaver Export Account

| Feature | Details |
|---------|---------|
| Fee | **1% flat** (no forex markup!) |
| Virtual accounts | USD (ACH), GBP (FPS), EUR (SEPA), SWIFT |
| Settlement | T+1 in INR |
| e-FIRA | Auto-generated |
| KYC | Video KYC, minutes |
| Works with | Upwork, Deel, Amazon |

**Example:** Client pays you $1,000

```
$1,000 received
  → 1% fee: $10
  → FX conversion at live rate (no markup)
  → You receive: ~₹83,400 in your bank
  → e-FIRA auto-generated for tax filing
```

### Comparison for Freelancers

| Platform | Fee | FX Markup | Settlement | e-FIRA |
|----------|-----|----------|------------|--------|
| **Razorpay MoneySaver** | 1% flat | 0% | T+1 | Auto |
| Cashfree International | 2.69-2.99% | 1% + GST | T+2-3 | On-demand |
| PayPal | 4.4% + fixed fee | 3-4% hidden | 1-5 days | Manual |
| Wise (TransferWise) | 0.5-1% | Live rate | 1-2 days | Manual |
| Stripe India | 4.3% + 2% FX | 2% | T+5-7+ | ❌ Not auto |

**PayPal is the WORST for freelancers.** 4.4% + fixed fee + 3-4% hidden FX markup = ~8-9% total cost. Avoid.

---

## Recurring Payments & Subscriptions

| Feature | Razorpay | Cashfree | PayU | Stripe India |
|---------|----------|----------|------|-------------|
| UPI AutoPay | ✅ | ✅ | ✅ | ❌ |
| Card e-Mandates | ✅ (Visa/MC/RuPay) | ✅ (Visa/MC/RuPay) | ✅ | Limited |
| Subscriptions Dashboard | Best-in-class | Good | Basic | Excellent |
| Proration | ✅ | ✅ | Limited | ✅ |
| Dunning Management | ✅ | ✅ | Limited | ✅ |
| Smart Retry | ✅ (optimal windows) | ✅ | ❌ | Limited |
| Max UPI Recurring | ₹15K (std) / ₹1L (select) | ₹15K / ₹1L | ₹15K | N/A |

### Key RBI e-Mandate Rules (2025-2026)

- 24-hour pre-debit notification mandatory before every auto-charge
- Customers can pause, revoke, or modify mandates from any UPI app
- UPI AutoPay only processes during non-peak hours (before 10 AM, 1-5 PM, after 9:30 PM)
- Max 3 retries per failed attempt
- Transactions above ₹15,000 require AFA (Additional Factor of Authentication)

---

## Next.js Implementation — Full Code

### Step 1: Install

```bash
npm install razorpay
```

### Step 2: Environment Variables

```env
# .env.local
RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXXXX
RAZORPAY_KEY_SECRET=XXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXXXX

# For webhooks (set this in Razorpay Dashboard too)
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret_here
```

### Step 3: Create Order (Server Side)

```typescript
// app/api/payments/create-order/route.ts
import Razorpay from 'razorpay'
import { NextResponse } from 'next/server'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(request: Request) {
  try {
    const { amount, currency = 'INR' } = await request.json()

    // ⚠️ ALWAYS compute amount server-side from your DB
    // NEVER trust client-sent amounts
    // Amount is in PAISE: ₹500 = 50000

    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert rupees to paise
      currency,
      receipt: `receipt_order_${Date.now()}`,
    })

    return NextResponse.json({ orderId: order.id }, { status: 200 })
  } catch (error) {
    console.error('Order creation failed:', error)
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
}
```

### Step 4: Payment Page (Client Side)

```tsx
// app/payment/page.tsx
'use client'

import Script from 'next/script'
import { useState } from 'react'

declare global {
  interface Window {
    Razorpay: new (options: any) => any
  }
}

export default function PaymentPage() {
  const [loading, setLoading] = useState(false)

  const handlePayment = async () => {
    setLoading(true)

    try {
      // 1. Create order on server
      const res = await fetch('/api/payments/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 500 }), // ₹500
      })
      const { orderId } = await res.json()

      // 2. Open Razorpay checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: 50000, // paise
        currency: 'INR',
        name: 'Your App Name',
        description: 'Product/Service description',
        order_id: orderId,
        handler: async function (response: any) {
          // 3. Verify payment on server
          const verifyRes = await fetch('/api/payments/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(response),
          })
          const data = await verifyRes.json()

          if (data.success) {
            alert('Payment successful! ✅')
            // Redirect to success page or update UI
          } else {
            alert('Payment failed! ❌')
          }
        },
        prefill: {
          name: 'Mani Bharadwaj',
          email: 'manibharadwajcr@gmail.com',
          contact: '9632453556',
        },
        theme: {
          color: '#6366f1',
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error) {
      console.error(error)
      alert('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-3xl font-bold">Pay ₹500</h1>
        <button
          onClick={handlePayment}
          disabled={loading}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </>
  )
}
```

### Step 5: Verify Payment (Server Side) — THE CRITICAL STEP

```typescript
// app/api/payments/verify/route.ts
import { NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(request: Request) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = await request.json()

    // ⚠️ CRITICAL: Always verify the signature server-side
    // This proves the payment is real — NEVER skip this
    const body = `${razorpay_order_id}|${razorpay_payment_id}`

    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest('hex')

    // Use timingSafeEqual — NEVER use === for signature comparison
    const isValid = crypto.timingSafeEqual(
      Buffer.from(expectedSignature),
      Buffer.from(razorpay_signature)
    )

    if (!isValid) {
      return NextResponse.json(
        { success: false, message: 'Invalid signature' },
        { status: 400 }
      )
    }

    // Payment verified! ✅
    // Update your database here: mark order as paid
    // await db.order.update({ where: { id: orderId }, data: { status: 'PAID' } })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Verification failed:', error)
    return NextResponse.json(
      { success: false, message: 'Verification failed' },
      { status: 500 }
    )
  }
}
```

### Step 6: Webhook (For Reliable Payment Updates)

```typescript
// app/api/payments/webhook/route.ts
import { NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(request: Request) {
  try {
    const body = await request.text()
    const signature = request.headers.get('x-razorpay-signature')!

    // Verify webhook signature
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET!)
      .update(body)
      .digest('hex')

    const isValid = crypto.timingSafeEqual(
      Buffer.from(expectedSignature),
      Buffer.from(signature)
    )

    if (!isValid) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    const event = JSON.parse(body)

    // Handle different events
    switch (event.event) {
      case 'payment.captured':
        // ✅ Payment successful — update DB
        const paymentId = event.payload.payment.entity.id
        const orderId = event.payload.payment.entity.order_id
        const amount = event.payload.payment.entity.amount / 100 // Convert paise to rupees
        console.log(`Payment captured: ${paymentId} for ₹${amount}`)
        // await db.order.update({ where: { orderId }, data: { status: 'PAID' } })
        break

      case 'payment.failed':
        // ❌ Payment failed — update DB
        console.log('Payment failed:', event.payload.payment.entity.id)
        // await db.order.update({ where: { orderId }, data: { status: 'FAILED' } })
        break

      case 'refund.processed':
        // 💰 Refund processed — update DB
        console.log('Refund processed:', event.payload.refund.entity.id)
        break

      case 'subscription.charged':
        // 🔄 Recurring payment successful
        console.log('Subscription charged:', event.payload.subscription.entity.id)
        break

      case 'subscription.cancelled':
        // 🚫 Subscription cancelled
        console.log('Subscription cancelled')
        break
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook failed:', error)
    return NextResponse.json({ error: 'Webhook failed' }, { status: 500 })
  }
}
```

### Step 7: Subscription Payment (Recurring)

```typescript
// app/api/payments/create-subscription/route.ts
import Razorpay from 'razorpay'
import { NextResponse } from 'next/server'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(request: Request) {
  try {
    // Create a subscription plan first (or use an existing plan_id)
    const subscription = await razorpay.subscriptions.create({
      plan_id: 'plan_XXXXXXXXXXXX', // Create this in Razorpay Dashboard
      customer_notify: 1,
      total_count: 12, // 12 months
      quantity: 1,
    })

    return NextResponse.json({
      subscriptionId: subscription.id,
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
```

```tsx
// Client side for subscription
const options = {
  key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  subscription_id: subscriptionId, // From create-subscription API
  name: 'Your App Name',
  description: 'Monthly subscription',
  handler: async function (response: any) {
    // Verify subscription payment
    const res = await fetch('/api/payments/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(response),
    })
    const data = await res.json()
    if (data.success) {
      alert('Subscription activated! ✅')
    }
  },
}
```

---

## Critical Gotchas

| Gotcha | What It Means | Fix |
|--------|--------------|-----|
| **Amounts are in PAISE** | ₹500 = `50000` in the API | Always multiply by 100 |
| **Never trust client amounts** | Client could send ₹1 for a ₹500 product | Always compute server-side from your DB |
| **Use timingSafeEqual** | `===` is vulnerable to timing attacks | Always use `crypto.timingSafeEqual` |
| **T+2 means BUSINESS days** | Thursday payment = Monday settlement | Plan cash flow accordingly |
| **UPI AutoPay time restrictions** | Only processes before 10 AM, 1-5 PM, after 9:30 PM | Inform users about this |
| **UPI over ₹15K needs AFA** | Additional Factor of Authentication required | Not your problem — gateway handles it |
| **Card tokenization mandatory** | No raw PAN storage since 2022 | Gateway handles this automatically |
| **GST on fees** | All quoted fees are pre-GST | Add 18% when calculating total cost |
| **Webhooks are source of truth** | Client callbacks can be spoofed | Always update DB from webhooks |
| **Handle "user closed modal"** | Customer closes payment without paying | Show "Payment pending" state, don't assume failure |
| **Razorpay Collect deprecating** | UPI Collect flow deprecated Feb 2026 | Use UPI Intent flow instead |

---

## Your Play — Start to Running

### Day 1: Sign Up

1. Go to [razorpay.com](https://razorpay.com) → Create account
2. Complete KYC (Aadhaar + PAN + bank details) — takes **5-10 minutes**
3. Get your test API keys from Dashboard → Settings → API Keys

### Day 1-2: Test Mode

1. Use `rzp_test_` keys
2. Copy the code from this guide into your Next.js app
3. Make test payments with Razorpay's test cards:

| Card Number | Type | Result |
|-------------|------|--------|
| 4111 1111 1111 1111 | Visa | Success |
| 5111 1111 1111 1118 | Mastercard | Success |
| 4111 1111 1111 1112 | Visa | Failure |

4. Test UPI with `success@razorpay` UPI ID
5. Verify everything works in test mode

### Day 2-3: Go Live

1. Complete full KYC (GST or MSME/UDYAM certificate)
2. Switch to `rzp_live_` keys
3. Set up webhook URL in Razorpay Dashboard (Settings → Webhooks)
4. Make a real ₹1 payment to test
5. **You're live. Taking payments.** ✅

### Day 3-5: When Money Arrives

- First payment → **T+2 settlement** (2-3 business days)
- Need money faster? Enable **instant settlement** (₹5 + 1.5%)
- Money lands in your bank account automatically
- Check Razorpay Dashboard → Settlements → see all settlements

---

## Freelance Platform Payment Comparison

| Platform | How You Get Paid | Fee | Min Withdrawal | Speed | India? |
|----------|-----------------|-----|---------------|-------|--------|
| Upwork | PayPal, bank, Payoneer | 10% | $5 | 5-14 days | ✅ |
| Contra | Local bank (INR), PayPal, Payoneer, USDC | 0% | None | 2-9 days | ✅ |
| Toptal | PayPal, bank, wire | 0% | None | Bi-weekly | ✅ |
| Turing | Bank transfer (USD) | 0% (hidden 50% margin) | None | Bi-monthly | ✅✅ |
| HackerOne | PayPal, bank, Bitcoin | 0% | None | Days-weeks | ✅ |
| Algora | USD escrow, 120+ countries | Not disclosed | Not disclosed | On merge | ✅ |

### Best Method for Indian Freelancers Accepting USD

**Razorpay MoneySaver Export Account:**
- 1% flat fee, zero forex markup
- Virtual accounts in USD (ACH), GBP (FPS), EUR (SEPA), SWIFT
- Auto e-FIRA for tax filing
- T+1 settlement in INR
- Works with Upwork, Deel, direct clients

**Avoid PayPal for receiving:** 4.4% + fixed fee + 3-4% hidden FX = ~8-9% total cost. Razorpay MoneySaver at 1% flat is 8-9x cheaper.

---

## Sources

- [Razorpay](https://razorpay.com) — Official docs, pricing, KYC
- [Razorpay MoneySaver Export Account](https://razorpay.com/blog/razorpay-moneysaver-export-account-freelancers/)
- [Razorpay Next.js Integration Guide](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration/)
- [Cashfree International Payment Gateway](https://www.cashfree.com/international-payment-gateway/)
- [Stripe India Pricing](https://stripe.com/in/pricing)
- [Stripe India International Payments](https://docs.stripe.com/india-accept-international-payments.md)
- [UPI Payment Stats FY2026](https://www.financialexpress.com/business/news/cash-no-more-why-upi-powers-nearly-9-out-of-10-retail-payments-in-india/4256404/)
- [CardPolo: Best Payment Gateway India 2026](https://cardpolo.com/blog/best-payment-gateway-india-2026)
- [Codingclave: Razorpay vs Stripe vs PayU vs Cashfree 2026](https://codingclave.com/blog/razorpay-vs-stripe-vs-payu-vs-cashfree-2026)

---

*The payment world is simple once you understand it: Customer pays → Gateway verifies → Gateway sends money to your bank. Everything else is just choosing the right gateway and implementing the code. Now go build.* 🎮

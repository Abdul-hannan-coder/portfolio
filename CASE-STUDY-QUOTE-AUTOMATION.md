# Case Study — AI Quote Automation for a B2B Parts Supplier

> **How to use this:** This is your flagship proof asset. Send it after a reply, link it in
> outreach follow-ups, and use the Loom script at the bottom to record a 2–3 min walkthrough.
> Anywhere you see **〔FILL IN〕** drop in a real number when you have it — otherwise the
> estimates below are written to be defensible and honest.

---

## At a glance

| | |
|---|---|
| **Client** | A B2B industrial parts supplier *(named or anonymized — your call)* |
| **Industry** | Industrial parts distribution / B2B supply |
| **The problem** | Quoting was fully manual — hours per day, error-prone, didn't scale |
| **What I built** | An end-to-end AI quote system: intake → supplier search → quote → PDF |
| **Result** | Quote turnaround cut from **〔~hours〕 to ~minutes**, fewer errors, more quotes/day |
| **Stack (under the hood)** | Next.js, React, TypeScript, Supabase, n8n, Axonaut |

---

## 1. The situation

The client is a B2B supplier of industrial parts. Their entire business runs on **quotes** — customers send requests, the team finds the right parts at the best supplier price, and sends back a priced quote.

The problem: **every step was manual.**

- Requests arrived by **email, WhatsApp, and phone** — scattered, easy to lose.
- A team member **read each request by hand**, figured out the parts, quantities, and brands.
- They **manually searched suppliers**, compared prices and availability across vendors.
- They **re-typed everything** into spreadsheets and then into a quote document.
- There was **no single view** of what stage each request was at, so management chased status by email.

The result was predictable: **slow turnaround, human errors, lost requests, and a process that broke down as volume grew.** Adding more quotes meant adding more people doing tedious data entry.

---

## 2. The problem (why it mattered)

- **Speed:** Slow quotes lose deals — buyers go with whoever responds first.
- **Errors:** Manual re-typing of part numbers and prices caused costly mistakes.
- **No visibility:** Nobody could see the pipeline — which requests were new, urgent, or stuck.
- **Doesn't scale:** The only way to handle more volume was to hire more people for repetitive work.

> *This is the exact pain most B2B suppliers feel but accept as "just how quoting works."*

---

## 3. The solution — what I built

I built a custom operations platform that takes a quote request from **first inbox to finished PDF**, automating the slow parts and giving the team one place to manage everything.

**The system, in plain terms:**

1. **Automatic intake** — requests from email (and manual entry for WhatsApp/phone) are captured automatically, with customer details, parts, quantities, brands, and urgency stored in one place. Nothing gets lost.
2. **One-click supplier search** — instead of checking vendors by hand, the operator runs a search that pulls supplier offers, **groups them by part**, and highlights the **best price** — comparing condition, country, currency, and availability instantly.
3. **Quote built for them** — selected offers flow straight into the quote. The system calculates tax, applies margin, and verifies totals automatically.
4. **Professional PDF, generated** — the final quote is created as a branded PDF, with the quote ID stored for tracking.
5. **Full pipeline visibility** — a dashboard shows new, urgent, pending, and sent quotes, with a 6-step progress tracker on every request. Management never has to chase status again.
6. **Built for the real team** — bilingual (EN/FR), mobile-friendly, secure logins, supplier directory with bulk import — so it fits how they actually work.

> **Under the hood (footnote, not the pitch):** Custom Next.js/React/TypeScript frontend, Supabase backend & auth, n8n automation for intake and supplier search, Axonaut integration for quote/PDF generation.

---

## 4. The results

> ⚠️ Replace estimates with real figures when you have them — they make this 10× stronger.

- ⏱️ **Quote turnaround: from 〔~X hours〕 down to ~minutes** per request.
- ✅ **Fewer errors** — no more manual re-typing of part numbers and prices.
- 📈 **More quotes handled per day** without adding headcount.
- 👁️ **Full pipeline visibility** — management sees every request's status in real time.
- 🔁 **Scales with volume** — handling more requests no longer means hiring more people.

*(Honest framing if you lack hard numbers: "A process that previously took the team hours per day now runs in minutes, freeing staff from repetitive data entry and letting them respond faster than competitors.")*

---

## 5. In the client's words

> *〔Add a real client quote here. Even a short one is powerful, e.g.:〕*
> *"The system turned our slowest, most error-prone process into something that runs itself. We respond to customers faster and our team finally got their time back."*

---

## 6. Want the same for your team?

If your team still reads quote requests by hand and types them into spreadsheets, the same kind of system can cut that to minutes.

👉 **I'll map your exact workflow for free in a 15-minute call** and show you what's automatable — no obligation.

📧 devs@veliosai.com

---
---

# 🎥 Loom Walkthrough Script (2–3 min)

Record this over the live system. Keep it conversational.

**[0:00 — Hook]**
> "Quick walkthrough of a system I built for a B2B parts supplier. Before this, their team spent hours every day reading quote requests by email and typing everything in by hand. Let me show you what replaced it."

**[0:15 — The problem, on screen]**
> "Requests used to come in by email, WhatsApp, phone — all scattered. Someone read each one, searched suppliers manually, compared prices, and re-typed it all into a quote. Slow and full of errors."

**[0:30 — Intake]**
> "Now, requests land here automatically — customer, parts, quantities, urgency, all captured. Nothing gets lost." *(show the request list / detail view)*

**[1:00 — Supplier search]**
> "Here's the part that saved the most time. One click runs a supplier search, groups offers by part, and highlights the best price across vendors. What took an hour of checking happens in seconds." *(show supplier search results)*

**[1:30 — Quote + PDF]**
> "They pick the best offers, the system calculates tax, margin, and totals automatically, and generates a professional PDF quote — ready to send." *(show quote validation → PDF)*

**[2:00 — Dashboard]**
> "And management gets full visibility — new, urgent, pending, sent — every request's status in real time." *(show dashboard KPIs)*

**[2:20 — Close]**
> "So a process that took hours now takes minutes. If your team handles quotes or orders manually, I can build something like this for you — and I'll map your workflow for free first. Reach out and I'll show you what's possible."

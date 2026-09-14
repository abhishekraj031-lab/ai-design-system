# PRD: Wishlist Engagement & Conversion

**Status:** Draft v1
**Owner:** TBD
**Last updated:** 2026-08-03

---

## Problem Statement

Users add items to their wishlist as an intent-to-purchase signal, but wishlists today are passive storage — nothing brings the user back at the moment they're most likely to convert (a price drop, an approaching occasion, or a complementary item that completes a set). The result: wishlisted items sit unbought, purchase intent decays, and the business loses revenue it already had a strong signal for. Every item in a wishlist is a warm lead with no follow-up.

## Goals

1. Increase wishlist → purchase conversion rate by re-engaging users at high-intent moments (price drop, occasion deadline).
2. Increase average order value by surfacing multi-item collections built from wishlist contents.
3. Reduce "stale" wishlists (items sitting >60 days with no action) by giving users a reason to act.
4. Keep notification volume low enough that opt-out/mute rates stay low — engagement, not spam.

## Non-Goals

- **Price tracking for non-wishlisted items.** This spec only covers items a user has explicitly wishlisted — no general "track any product" feature. (Separate initiative if needed.)
- **Social/shared wishlists** (gifting, shared lists visible to others). Out of scope for v1; may inform occasion reminders later.
- **Push/SMS notification infrastructure.** This spec defines triggers and content; delivery channel setup (push tokens, SMS provider) is an engineering dependency, not designed here.
- **Dynamic/algorithmic pricing or personalized discounting.** Price-drop detection reflects actual merchandising price changes only — this feature does not create or negotiate prices.
- **AI-generated collections v1.** v1 collections use rule-based grouping (category, "frequently bought together" data); a true ML recommendation model is a P2/future consideration.

## User Stories

**Buy encouragement**
- As a wishlist owner, I want to see a clear CTA on each wishlist item so I can buy it without hunting for the product page.
- As a wishlist owner, I want to see urgency signals (low stock, limited-time price) on wishlist items so I know when to act now vs. later.
- As a returning user, I want to see a "your wishlist" nudge with the item count when I open the app, so it stays visible instead of being forgotten.

**Price drop notifications**
- As a wishlist owner, I want to be notified when a wishlisted item's price drops, so I don't miss a better deal.
- As a wishlist owner, I want to see the original price crossed out and the new price on the item card, so I understand the savings at a glance.
- As a wishlist owner, I want price-drop notifications to stop once I buy or remove the item, so I'm not notified about something I no longer care about.

**Occasion reminders**
- As a wishlist owner, I want to tag an item with an occasion and date (birthday, anniversary, holiday), so the app reminds me before it's too late to buy and receive it in time.
- As a wishlist owner, I want the reminder timing to account for shipping time, so "in time" actually means the item arrives before the occasion.
- As a wishlist owner, I want to edit or remove an occasion tag, so I can correct a wrong date or change of plans.
- As a wishlist owner whose occasion date has passed without purchase, I want a clear, low-guilt follow-up (not a nagging notification) so I can decide to buy anyway, reschedule, or dismiss.

**Collection suggestions**
- As a wishlist owner with 2+ related items, I want to see a suggested collection ("complete the look") bundling them, so I can consider buying together.
- As a wishlist owner, I want to see what's included in a suggested collection and the combined price before committing, so I can make an informed choice.
- As a wishlist owner, I want to add a whole collection to cart in one action, so bundled buying doesn't take more steps than buying one item.

## Requirements

### P0 — Must-Have

**Buy encouragement**
- Wishlist item card shows: image, name, current price, primary "Add to Cart" / "Buy" CTA.
- Item card shows a stock-urgency badge when stock is below a defined threshold (e.g., "Only 3 left").
- Acceptance criteria:
  - [ ] Given a wishlist item is in stock, when the user taps the CTA, then the item is added to cart without leaving the wishlist view.
  - [ ] Given an item's stock is below threshold, when the card renders, then an urgency badge is visible.

**Price drop notifications**
- System detects a price decrease on any wishlisted item and triggers a notification within a defined SLA (e.g., within 24h of the price change).
- Item card visually distinguishes price-dropped items (badge, strikethrough original price, new price, % or amount saved).
- Notification deep-links to the wishlist item.
- Acceptance criteria:
  - [ ] Given a wishlisted item's price drops, when the price-check job runs, then a notification is queued for the user.
  - [ ] Given a user opens the wishlist after a price drop, then the item card shows old price (strikethrough), new price, and savings.
  - [ ] Given a user has purchased or removed the item, then no further price-drop notifications are sent for it.

**Occasion reminders**
- User can tag a wishlist item with an occasion type and target date.
- System computes a reminder date = target date − buffer (default buffer configurable; must account for estimated shipping/fulfillment time).
- Notification fires on the computed reminder date, deep-linking to the item.
- User can edit or remove the occasion tag at any time.
- Acceptance criteria:
  - [ ] Given a user sets an occasion date, when the reminder date is reached, then a notification is sent referencing the occasion (e.g., "Mom's birthday is in 5 days — get [item] in time").
  - [ ] Given the target date passes without purchase, when the app is opened, then the item shows a passed-occasion state (not a repeated push notification) with options: buy now, reschedule, dismiss.
  - [ ] Given a user removes the occasion tag, then no reminder is sent for that item.

**Collection suggestions**
- System groups 2+ wishlist items into a suggested collection using rule-based matching (same category/subcategory, "frequently bought together" pairing, or merchandiser-curated sets).
- Collection card shows all included items, combined price, and a single "Add collection to cart" action.
- Collections only surface when a minimum match confidence/rule is met (no forced pairing of unrelated items).
- Acceptance criteria:
  - [ ] Given a wishlist has 2+ items matching a grouping rule, when the wishlist renders, then a collection suggestion appears above/below the item list.
  - [ ] Given a user taps "Add collection to cart," then all items in that collection are added in one action.
  - [ ] Given a wishlist has no items matching any grouping rule, then no collection suggestion is shown (no empty/forced state).

### P1 — Nice-to-Have

- In-app (not just push) notification center entry for price drops and occasion reminders, so users who missed the push still see it.
- Configurable notification preferences (mute price drops, mute occasion reminders, independently).
- "Price history" mini-chart on item detail so users can judge if a drop is meaningful.
- Multiple occasions per item (e.g., item relevant to both a birthday and a gift-exchange).
- Sort/filter wishlist by "recently dropped," "occasion upcoming," "has collection available."

### P2 — Future Considerations

- ML-based collection recommendations (beyond rule-based grouping).
- Shared/collaborative wishlists (occasion reminders sent to a gifter, not just the owner).
- Price-drop threshold customization ("only notify me if it drops >10%").
- Cross-wishlist collections (bundling across multiple users' lists — gift registries).
- Predictive occasion suggestions (e.g., detecting a likely anniversary from past order history) — needs privacy/legal review before scoping.

## Notification Logic Summary

| Trigger | Condition | Timing | Stops when |
|---|---|---|---|
| Price drop | Wishlisted item's price decreases | Within SLA of detected change (e.g. 24h) | Item purchased or removed from wishlist |
| Occasion reminder | User-set occasion date reached minus shipping buffer | Once, on computed reminder date | Item purchased, occasion tag removed/edited, or date passed (switches to passive in-app state, not repeat push) |
| Collection suggestion | Rule-based match among wishlist items | Surfaced passively in wishlist view (not a push notification in v1) | Items purchased or removed such that the match no longer holds |

## Edge Cases

- **Empty wishlist:** show an empty state with a prompt to browse/add items — no notification logic applies.
- **Single-item wishlist:** buy-encouragement and price-drop logic apply normally; collection suggestions are suppressed (need 2+ matching items).
- **Price never drops:** no notification is ever sent for that item; item behaves as a normal wishlist entry indefinitely.
- **Occasion date passed without purchase:** switch to a passive "occasion passed" card state with buy-now/reschedule/dismiss actions — do not keep sending push notifications.
- **Item goes out of stock while wishlisted:** suppress "Add to Cart" CTA, show "Notify me when back in stock" instead (reuses the same notification pipeline as price drop).
- **Item removed from catalog entirely:** show a "no longer available" state; auto-cancel any pending price-drop/occasion notifications for it.
- **Multiple wishlisted items drop in price simultaneously:** batch into a single digest notification rather than one push per item, to avoid spam.

## Success Metrics

**Leading indicators**
- Wishlist → cart conversion rate (target: baseline +X% within 30 days of launch)
- Notification → click-through rate for price-drop and occasion pushes (target: define after baseline is measured; watch for opt-out spikes)
- Collection suggestion impression → "add collection to cart" rate

**Lagging indicators**
- Overall wishlist → purchase conversion rate (30/60/90 day)
- Average order value for orders originating from a collection suggestion vs. single-item wishlist purchase
- Wishlist notification opt-out/mute rate (guardrail metric — should not increase over time)
- Wishlist "staleness" — % of items sitting >60 days with no action (target: decrease)

## Component Breakdown (for ds-team handoff)

These are the distinct UI pieces this spec implies — hand each off individually via `ds-team: build this component — <figma link>` once Figma designs exist:

| Component | Purpose | Key states |
|---|---|---|
| `WishlistCard` | Base item card: image, name, price, CTA | default, out-of-stock, price-dropped, occasion-tagged, removed (undo toast) |
| `PriceDropBadge` | Visual indicator of a price decrease | shows % or amount saved; pairs with strikethrough original price |
| `StockUrgencyBadge` | Low-stock indicator | threshold-based, e.g. "Only N left" |
| `OccasionTagPrompt` | UI for setting/editing an occasion + date on an item | empty (add occasion), set, editing, passed-date |
| `OccasionReminderCard` / passed-date state | In-wishlist card variant when a reminder fires or a date passes | upcoming, passed (buy now / reschedule / dismiss) |
| `CollectionSuggestionCarousel` | Surfaces rule-based bundles from wishlist items | populated, single collection, multiple collections; hidden when no match |
| `NotificationDigestToast` / in-app notification entry | Price-drop / occasion notification surfaced in-app | single item, batched/digest |

## Open Questions

- What is the price-check polling/detection frequency, and is there already price-history data available? *(engineering)*
- What's the default shipping-time buffer for occasion reminders — fixed, or based on the item's actual fulfillment estimate? *(engineering + logistics)*
- What "frequently bought together" or category-matching data already exists to power P0 collection suggestions? *(data/engineering)*
- Which notification channels are available at launch — push only, or also email/in-app? *(engineering, affects P0 vs P1 scope)*
- Is there an existing notification preference center, or does this feature need to create one? *(engineering + design)*
- Any regulatory/consent requirements for occasion-related notifications (e.g., marketing opt-in laws by region)? *(legal)*

## Timeline Considerations

- No hard external deadline specified — recommend phasing:
  - **Phase 1 (P0 core):** Buy-encouragement card + price-drop detection/notification. Delivers the fastest, most measurable conversion lift with the least new logic (no date math, no grouping rules).
  - **Phase 2 (P0 continued):** Occasion reminders (adds date/shipping-buffer logic).
  - **Phase 3 (P0 continued):** Collection suggestions (needs grouping data/rules — likely the longest engineering lead time).
  - **Phase 4 (P1):** Notification preferences, price history, digest batching refinements.
- Dependency: notification delivery infrastructure (push/email) must exist or be built before Phase 1 can ship end-to-end.

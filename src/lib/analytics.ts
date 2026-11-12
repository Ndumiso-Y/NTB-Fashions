import { track } from "@vercel/analytics";

import type { GalleryCategory } from "./gallery";

/**
 * First-party, cookieless measurement for ntombis.com.
 *
 * Everything here goes to Vercel Web Analytics, which is served from this
 * site's own origin (/_vercel/insights/*), sets no cookies and stores no
 * cross-site identifier. There is no GA4, no tag manager and no advertising
 * pixel on this site.
 *
 * TWO RULES GOVERN THIS FILE.
 *
 * 1. No personal information ever leaves the page. Every property below is
 *    drawn from a closed set of literals declared in `EventProperties` — a
 *    page path, a CTA position, a category name. Nothing a visitor types
 *    (name, email address, phone number, occasion, or the vision text) is
 *    read here, and TypeScript rejects a call that tries to pass one.
 *
 * 2. Event names describe what the website can actually observe. The studio is
 *    contacted through WhatsApp, a mail client or a phone call — all of which
 *    happen outside this site — so the site can only ever witness the *handoff*
 *    to that app, never a delivered message. Accordingly no event is named
 *    `enquiry_sent`, `lead_completed` or anything else that would claim a
 *    conversion the site cannot verify. `whatsapp_enquiry` means "a visitor
 *    opened a WhatsApp conversation with the studio", not "a message arrived".
 *
 * 3. No event carries more than TWO properties. Vercel Web Analytics caps
 *    custom-event properties by plan: two on Pro, eight only with the Web
 *    Analytics Plus add-on. Designing to two keeps every event below fully
 *    reportable on a plain Pro plan. A `page` property was dropped for this
 *    reason and is not missed: each `location` value already names where on the
 *    site it fired (`nav_desktop`, `home_final`, `collections_category`,
 *    `process_footer`, `contact_direct`, `site_footer`, `privacy_notice`), and
 *    the page-specific events can only fire on one page anyway.
 *
 * NOTE ON PLAN SUPPORT: custom events are a Pro feature. On the Hobby plan this
 * project currently runs on, page views and Speed Insights are collected but
 * custom events are not, so the events below will not appear in the dashboard
 * until the account is upgraded. The calls are harmless in the meantime and
 * need no code change when that happens.
 */

/** Where a primary call-to-action sits. Home page only — see `primary_cta_click`. */
type PrimaryCtaLocation = "hero_desktop" | "hero_mobile" | "home_final";

/** Which primary call-to-action was pressed. */
type PrimaryCta = "book_consultation" | "view_collections" | "request_consultation";

/** Every place the site hands a visitor to WhatsApp, outside of the two cases
 *  that have events of their own (`gallery_enquiry`, `contact_handoff_opened`). */
type WhatsAppLocation =
  | "nav_desktop"
  | "nav_mobile"
  | "hero_desktop"
  | "hero_mobile"
  | "home_final"
  | "about_footer"
  | "collections_category"
  | "process_footer"
  | "contact_direct";

/** Every place the site hands a visitor to their mail client. */
type EmailLocation = "site_footer" | "contact_direct" | "contact_fallback" | "privacy_notice";

/** Every place the site offers the studio's number as a `tel:` link. */
type PhoneLocation = "site_footer" | "contact_direct" | "contact_fallback" | "privacy_notice";

/** Collection identifiers — the `id` values in src/lib/data.ts. */
const COLLECTION_IDS = [
  "wedding",
  "matric-dance",
  "traditional",
  "suits",
  "event-dresses",
  "coordinated",
] as const;

type CollectionId = (typeof COLLECTION_IDS)[number] | "other";

/**
 * Narrow a collection id to the controlled set. `categories[].id` is typed as a
 * plain `string` in src/lib/data.ts, and the scroll observer reads its id back
 * out of a DOM `data-` attribute, so both are validated here rather than cast:
 * an id that is not one of the six known collections is reported as `"other"`
 * instead of being passed through to the analytics payload verbatim.
 */
export function toCollectionId(id: string | undefined): CollectionId {
  return (COLLECTION_IDS as readonly string[]).includes(id ?? "") ? (id as CollectionId) : "other";
}

type EventProperties = {
  /**
   * A press on one of the home page's headline calls-to-action. Deliberately
   * separate from the channel events below: this one answers "which hero
   * placement earns clicks", while `whatsapp_enquiry` answers "how many
   * WhatsApp handoffs happened anywhere on the site". A hero "Book
   * Consultation" press is both, and reports both.
   */
  primary_cta_click: { location: PrimaryCtaLocation; cta: PrimaryCta };

  /**
   * A visitor opened a WhatsApp conversation with the studio. Intent, not
   * delivery. `collection` is carried only from the per-collection CTAs on
   * /collections, so the studio can see which garment category drives enquiries
   * without needing a second event name for it.
   */
  whatsapp_enquiry: { location: WhatsAppLocation; collection?: CollectionId };

  /** A visitor opened their mail client addressed to the studio. Intent, not delivery. */
  email_enquiry: { location: EmailLocation };

  /**
   * A visitor tapped the studio's phone number. Included so the enquiry-channel
   * mix is not misleading: phone is one of the three channels the site actually
   * offers, and counting only WhatsApp and email would understate it. A tap
   * opens the dialler; whether a call was placed or answered is not observable
   * here.
   */
  phone_enquiry: { location: PhoneLocation };

  /**
   * A gallery tile's "Enquire About Similar Style" was pressed. Reported instead
   * of `whatsapp_enquiry` (not in addition to it) so gallery-driven enquiries
   * stay countable on their own, with the garment category that prompted them.
   * `surface` separates the desktop hover overlay from the touch caption.
   */
  gallery_enquiry: { category: GalleryCategory; surface: "overlay" | "caption" };

  /** The visitor began filling in the consultation form. Fires once per visit to the form. */
  contact_form_started: Record<string, never>;

  /**
   * The composed enquiry was handed to WhatsApp or a mail client. The site
   * cannot see whether the visitor then pressed Send, so this records the
   * handoff only. `stage` separates the first handoff from a later reopen of
   * the same message.
   */
  contact_handoff_opened: { channel: "whatsapp" | "email"; stage: "initial" | "reopen" };

  /**
   * A collection reached the middle of the viewport on /collections. Fires at
   * most once per collection per page view, so it reads as "which collections
   * were actually looked at", not as a scroll-event stream.
   */
  collection_view: { collection: CollectionId };

  /** A gallery category filter was chosen. Not a conversion — it shows which garment types draw interest. */
  gallery_filter_used: { category: GalleryCategory | "All" };

  /** A link into the custom-process explainer. Shows how many visitors want the "how it works" story first. */
  process_cta_click: { location: "home_craft" | "gallery_intro" };
};

export type AnalyticsEvent = keyof EventProperties;

/**
 * Report one event. The properties are exactly what the event's entry in
 * `EventProperties` allows — at most two, per rule 3 above — and nothing else
 * typechecks.
 */
export function trackEvent<K extends AnalyticsEvent>(name: K, properties: EventProperties[K]): void {
  if (typeof window === "undefined") return;
  track(name, properties);
}

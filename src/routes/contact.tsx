import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar, Footer } from "@/components/Layout";
import { brand } from "@/lib/data";
import { pageHead } from "@/lib/seo";
import { trackEvent } from "@/lib/analytics";
import { useEffect, useRef, useState } from "react";
import { MessageSquare } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () =>
    pageHead({
      path: "/contact",
      title: "Book a Consultation | Ntombis Fashion, Rustenburg",
      description:
        "Book a consultation with Ntombis Fashion. Share your occasion, garment type and event date, or contact the Rustenburg studio by WhatsApp, phone or email.",
    }),
});

type EnquiryFields = {
  name: string;
  email: string;
  occasion: string;
  vision: string;
};

type FieldErrors = Partial<Record<keyof EnquiryFields, string>>;

const inputClass =
  "w-full bg-transparent border-b border-brand-green/20 py-3 focus:border-brand-green transition-colors";
const labelClass = "text-[10px] uppercase tracking-widest text-brand-green/70";

/**
 * The enquiry travels to the studio inside a `wa.me` / `mailto:` URL, and both
 * WhatsApp and mail clients silently drop or mangle very long URLs. These caps
 * keep the percent-encoded URL comfortably under ~2000 characters while leaving
 * the vision field long enough for a real style brief (800 characters is
 * roughly two paragraphs).
 */
const LIMITS = { name: 80, email: 120, occasion: 120, vision: 800 } as const;

/**
 * Conservative ceiling on the length of a *fully percent-encoded* handoff URL.
 *
 * The raw LIMITS above bound what the visitor types, but percent-encoding can
 * triple the size of the result: every reserved character (& ? # % = + / : ; @)
 * and every space becomes three characters, and each emoji becomes twelve. So a
 * message well inside the field limits can still produce a URL long enough to
 * be silently truncated by the receiving app.
 *
 * The practical floor across the browsers and OS handlers this site is opened
 * from is roughly 2000-2083 characters (Internet Explorer's 2083-character
 * address limit, and the Windows ShellExecute buffer that desktop mail clients
 * are launched through). Those handlers truncate without warning, which would
 * deliver half an enquiry. 1900 stays under that floor with headroom for a
 * handler that re-encodes characters we already encoded, while still clearing a
 * legitimate enquiry with every field filled to its limit (~1840 characters).
 *
 * Anything above the ceiling is never launched. The message is kept whole and
 * handed to the visitor to copy instead - see MessageFallback.
 */
const MAX_HANDOFF_URL_LENGTH = 1900;

/** True when the encoded URL is short enough to hand to an external app intact. */
function isHandoffSafe(url: string): boolean {
  return url.length <= MAX_HANDOFF_URL_LENGTH;
}

function validate(fields: EnquiryFields): FieldErrors {
  const errors: FieldErrors = {};
  if (!fields.name.trim()) {
    errors.name = "Please enter your full name.";
  } else if (fields.name.length > LIMITS.name) {
    errors.name = `Please keep your name under ${LIMITS.name} characters.`;
  }
  if (!fields.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Please enter a valid email address.";
  } else if (fields.email.length > LIMITS.email) {
    errors.email = `Please keep your email address under ${LIMITS.email} characters.`;
  }
  if (!fields.occasion.trim()) {
    errors.occasion = "Please tell us the occasion.";
  } else if (fields.occasion.length > LIMITS.occasion) {
    errors.occasion = `Please keep the occasion under ${LIMITS.occasion} characters.`;
  }
  if (fields.vision.length > LIMITS.vision) {
    errors.vision = `Please keep your description under ${LIMITS.vision} characters.`;
  }
  return errors;
}

function buildMessage(fields: EnquiryFields): string {
  const lines = [
    "Hello Ntombis Fashion, I would like to book a consultation.",
    "",
    `Name: ${fields.name.trim()}`,
    `Email: ${fields.email.trim()}`,
    `Occasion: ${fields.occasion.trim()}`,
  ];
  if (fields.vision.trim()) {
    lines.push("", "My vision:", fields.vision.trim());
  }
  return lines.join("\n");
}

/**
 * Fallback for a handoff that never landed: the composed message stays on the
 * page in a selectable field, alongside the studio's WhatsApp number and email
 * address, so the visitor can send it manually from any app.
 */
function MessageFallback({
  message,
  copied,
  onCopy,
  note,
}: {
  message: string;
  copied: boolean;
  onCopy: () => void;
  /** Set when a handoff URL exceeded MAX_HANDOFF_URL_LENGTH and was not opened. */
  note?: string | undefined;
}) {
  return (
    <div className="border-t border-brand-green/10 pt-8 text-left">
      <h3 className="text-[10px] uppercase tracking-widest text-brand-green/70 mb-4">Send it yourself instead</h3>
      {note && (
        <p className="text-sm text-brand-green/80 leading-relaxed mb-4">{note}</p>
      )}
      <label htmlFor="enquiry-message" className="sr-only">
        Your enquiry message
      </label>
      <textarea
        id="enquiry-message"
        readOnly
        rows={8}
        value={message}
        onFocus={(e) => e.currentTarget.select()}
        className="w-full bg-brand-cream/60 border border-brand-green/20 p-4 text-sm leading-relaxed text-brand-green/80 resize-none"
      />
      <div className="flex flex-wrap items-center gap-4 mt-4">
        <button
          type="button"
          onClick={onCopy}
          className={
            note
              ? "bg-brand-green text-brand-cream px-6 py-3 text-xs uppercase tracking-widest hover:bg-brand-green/90 transition-all"
              : "border border-brand-green/20 px-5 py-3 text-xs uppercase tracking-widest hover:bg-brand-green/5 transition-all"
          }
        >
          Copy message
        </button>
        <p aria-live="polite" className="text-xs text-brand-green/70">
          {copied ? "Copied to your clipboard." : ""}
        </p>
      </div>
      <p className="text-sm text-brand-green/80 mt-6">
        WhatsApp or call{" "}
        <a
          href={`tel:${brand.contact.phone.replace(/\s+/g, "")}`}
          onClick={() => trackEvent("phone_enquiry", { location: "contact_fallback" })}
          className="underline underline-offset-4"
        >
          {brand.contact.phone}
        </a>
      </p>
      <p className="text-sm text-brand-green/80 mt-2">
        Email{" "}
        <a
          href={`mailto:${brand.contact.email}`}
          onClick={() => trackEvent("email_enquiry", { location: "contact_fallback" })}
          className="underline underline-offset-4"
        >
          {brand.contact.email}
        </a>
      </p>
    </div>
  );
}

function Contact() {
  // There is no server-side mailer or form backend in this project. The site
  // only ever hands the composed message to WhatsApp or the visitor's mail
  // client — it cannot observe whether the visitor then pressed Send, and it
  // cannot tell whether the external app opened at all. So no copy on this page
  // claims the enquiry was sent, delivered or received: the stages are "ready
  // to send" and "the app has been opened", and the message stays on screen to
  // copy if the handoff silently failed.
  const [fields, setFields] = useState<EnquiryFields>({ name: "", email: "", occasion: "", vision: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [stage, setStage] = useState<"form" | "ready" | "opened">("form");
  const [copied, setCopied] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  // `contact_form_started` reports engagement with the form, once per visit to
  // this page. It is deliberately not reset when the visitor starts a second
  // enquiry, so the count reads as "visits where someone began filling the form
  // in" and can be compared directly against page views.
  const formStartReported = useRef(false);

  // When the form is replaced by the "ready"/"sent" panel the element that had
  // focus (the submit button / channel link) disappears, so move focus to the
  // new panel to keep keyboard and screen-reader users oriented.
  useEffect(() => {
    if (stage !== "form") panelRef.current?.focus();
  }, [stage]);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 5000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const update = (key: keyof EnquiryFields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!formStartReported.current) {
      formStartReported.current = true;
      trackEvent("contact_form_started", {});
    }
    setFields((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = Object.keys(nextErrors)[0];
      if (firstInvalid) {
        (e.currentTarget.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      }
      return;
    }
    setStage("ready");
  };

  const message = buildMessage(fields);
  const whatsappHref = `${brand.contact.whatsapp}?text=${encodeURIComponent(message)}`;
  const mailtoHref = `mailto:${brand.contact.email}?subject=${encodeURIComponent(
    `Consultation enquiry: ${fields.occasion.trim()}`,
  )}&body=${encodeURIComponent(message)}`;
  const hasErrors = Object.values(errors).some(Boolean);

  // Percent-encoding can push either URL past what WhatsApp and mail clients
  // carry intact, so each channel is gated on the length of its *final* encoded
  // URL rather than on the raw field limits. An oversized URL is never opened:
  // that channel's launcher is withheld and the visitor is given the whole
  // message to copy instead. The message itself is never truncated.
  const whatsappSafe = isHandoffSafe(whatsappHref);
  const mailtoSafe = isHandoffSafe(mailtoHref);
  const oversizedNote =
    whatsappSafe && mailtoSafe
      ? undefined
      : `Your message is too long to pre-fill ${
          !whatsappSafe && !mailtoSafe
            ? "in WhatsApp or your email app"
            : !whatsappSafe
              ? "in WhatsApp"
              : "in your email app"
        } without the link being cut short, so nothing was opened there and nothing has been sent. Your full message is below, unchanged — copy it and paste it into a new message to the studio.`;

  // Clipboard access can be denied (permissions, insecure context, older
  // browsers). The message is also rendered in a selectable field below, so a
  // failure here still leaves the visitor able to copy it by hand.
  const copyMessage = () => {
    const writing = navigator.clipboard?.writeText(message);
    if (!writing) return;
    writing.then(
      () => setCopied(true),
      () => setCopied(false),
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main id="main-content" className="pt-48 md:pt-56 pb-24 container-custom">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase mb-4 block text-brand-green/70">BOOK A CONSULTATION</span>
          <h1 className="text-4xl md:text-6xl mb-8">Tell Us About the Garment <br /> You Want to Create</h1>
          <p className="text-xl text-brand-green/70 mb-16 leading-relaxed">
            Share the occasion, garment type, event date, and any style direction you already have in mind. For style references, browse the{" "}
            <Link to="/gallery" className="underline underline-offset-4">gallery</Link>.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              {stage === "opened" ? (
                <div ref={panelRef} tabIndex={-1} className="bg-white p-12 border border-brand-green/10 animate-fade-in" role="status">
                  <h2 className="text-2xl mb-4 font-serif text-center">WhatsApp or your email app has been opened</h2>
                  <p className="text-brand-green/70 text-sm leading-relaxed mb-4 text-center">
                    Your message is waiting there with your details already filled in. <strong className="font-semibold text-brand-green">It has not been sent yet</strong> — press <strong className="font-semibold text-brand-green">Send</strong> in that app to complete your enquiry. Ntombis Fashion only receives it once you do.
                  </p>
                  <p className="text-brand-green/70 text-sm leading-relaxed mb-8 text-center">
                    If nothing opened, reopen it below, or copy your message and send it to the studio yourself.
                  </p>
                  <div className="flex flex-col items-center gap-4 mb-10">
                    {whatsappSafe && (
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent("contact_handoff_opened", { channel: "whatsapp", stage: "reopen" })}
                        className="text-xs uppercase tracking-widest underline underline-offset-4"
                      >
                        Reopen in WhatsApp
                      </a>
                    )}
                    {mailtoSafe && (
                      <a
                        href={mailtoHref}
                        onClick={() => trackEvent("contact_handoff_opened", { channel: "email", stage: "reopen" })}
                        className="text-xs uppercase tracking-widest underline underline-offset-4"
                      >
                        Reopen in email
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setFields({ name: "", email: "", occasion: "", vision: "" });
                        setErrors({});
                        setCopied(false);
                        setStage("form");
                      }}
                      className="text-xs uppercase tracking-widest underline underline-offset-4"
                    >
                      Start a new enquiry
                    </button>
                  </div>
                  <MessageFallback message={message} copied={copied} onCopy={copyMessage} note={oversizedNote} />
                </div>
              ) : stage === "ready" ? (
                <div ref={panelRef} tabIndex={-1} className="bg-white p-12 border border-brand-green/10 text-center animate-fade-in" role="status">
                  <h2 className="text-2xl mb-4 font-serif">Your message is ready to send</h2>
                  <p className="text-brand-green/70 text-sm leading-relaxed mb-8">
                    {whatsappSafe || mailtoSafe ? (
                      <>
                        Nothing has been sent yet. Pick a channel below — your details are already filled in, and you will still need to press <strong className="font-semibold text-brand-green">Send</strong> in WhatsApp or your email app.
                      </>
                    ) : (
                      <>
                        Nothing has been sent yet. Your message is longer than a WhatsApp or email link can carry safely, so copy it below and paste it into a new message to the studio.
                      </>
                    )}
                  </p>
                  {(whatsappSafe || mailtoSafe) && (
                    <div className="space-y-4">
                      {whatsappSafe && (
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            trackEvent("contact_handoff_opened", { channel: "whatsapp", stage: "initial" });
                            setStage("opened");
                          }}
                          className="block w-full bg-brand-green text-brand-cream py-5 uppercase tracking-[0.2em] text-sm hover:bg-brand-green/90 transition-all"
                        >
                          Open WhatsApp to send
                        </a>
                      )}
                      {mailtoSafe && (
                        <a
                          href={mailtoHref}
                          onClick={() => {
                            trackEvent("contact_handoff_opened", { channel: "email", stage: "initial" });
                            setStage("opened");
                          }}
                          className="block w-full border border-brand-green/20 text-brand-green py-5 uppercase tracking-[0.2em] text-sm hover:bg-brand-green/5 transition-all"
                        >
                          Open email to send
                        </a>
                      )}
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => setStage("form")}
                    className="mt-8 text-xs uppercase tracking-widest underline underline-offset-4"
                  >
                    Edit my details
                  </button>
                  {oversizedNote && (
                    <div className="mt-10">
                      <MessageFallback message={message} copied={copied} onCopy={copyMessage} note={oversizedNote} />
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-8">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className={labelClass}>Full Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={LIMITS.name}
                      value={fields.name}
                      onChange={update("name")}
                      aria-invalid={errors.name ? true : undefined}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      className={inputClass}
                    />
                    {errors.name && <p id="contact-name-error" className="text-xs text-red-700">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className={labelClass}>Email Address</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      autoComplete="email"
                      inputMode="email"
                      required
                      maxLength={LIMITS.email}
                      value={fields.email}
                      onChange={update("email")}
                      aria-invalid={errors.email ? true : undefined}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      className={inputClass}
                    />
                    {errors.email && <p id="contact-email-error" className="text-xs text-red-700">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-occasion" className={labelClass}>Occasion (e.g. Wedding, Matric Dance)</label>
                    <input
                      type="text"
                      id="contact-occasion"
                      name="occasion"
                      autoComplete="off"
                      required
                      maxLength={LIMITS.occasion}
                      value={fields.occasion}
                      onChange={update("occasion")}
                      aria-invalid={errors.occasion ? true : undefined}
                      aria-describedby={errors.occasion ? "contact-occasion-error" : undefined}
                      className={inputClass}
                    />
                    {errors.occasion && <p id="contact-occasion-error" className="text-xs text-red-700">{errors.occasion}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-vision" className={labelClass}>Describe your vision (optional)</label>
                    <textarea
                      id="contact-vision"
                      name="vision"
                      rows={4}
                      maxLength={LIMITS.vision}
                      value={fields.vision}
                      onChange={update("vision")}
                      aria-invalid={errors.vision ? true : undefined}
                      aria-describedby={errors.vision ? "contact-vision-error contact-vision-count" : "contact-vision-count"}
                      className="w-full bg-transparent border border-brand-green/20 p-4 focus:border-brand-green transition-colors resize-none"
                    ></textarea>
                    <p id="contact-vision-count" aria-live="polite" className="text-[10px] tracking-widest text-brand-green/60">
                      {fields.vision.length} / {LIMITS.vision} characters
                    </p>
                    {errors.vision && <p id="contact-vision-error" className="text-xs text-red-700">{errors.vision}</p>}
                  </div>
                  {hasErrors && (
                    <p role="alert" className="text-xs text-red-700">
                      Please correct the highlighted fields before continuing.
                    </p>
                  )}
                  <button type="submit" className="w-full bg-brand-green text-brand-cream py-5 uppercase tracking-[0.2em] text-sm hover:bg-brand-green/90 transition-all">
                    Prepare My Enquiry
                  </button>
                  <p className="text-xs text-brand-green/60 leading-relaxed">
                    This page has no mailbox of its own. It composes your message and opens WhatsApp or your email app, where you press Send.
                  </p>
                </form>
              )}
            </div>

            <div className="space-y-12">
              <div className="p-8 bg-brand-green text-brand-cream">
                <MessageSquare className="mb-6" size={32} aria-hidden="true" />
                <h2 className="text-xl mb-4 font-serif">Prefer to speak directly?</h2>
                <p className="text-brand-cream/70 text-sm leading-relaxed mb-8">
                  Send a WhatsApp enquiry with your name, occasion, event date, and garment type.
                </p>
                <a
                  href={brand.contact.whatsapp}
                  onClick={() => trackEvent("whatsapp_enquiry", { location: "contact_direct" })}
                  className="inline-block border border-brand-cream/30 px-6 py-3 text-xs uppercase tracking-widest hover:bg-brand-cream hover:text-brand-green transition-all"
                >
                  WhatsApp Us
                </a>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-[10px] uppercase tracking-widest text-brand-green/70">Follow our journey</h3>
                <div className="flex flex-col space-y-2 text-sm text-brand-green/70 cursor-not-allowed">
                   <span>Instagram (Coming Soon)</span>
                   <span>TikTok (Coming Soon)</span>
                   <span>Facebook (Coming Soon)</span>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-[10px] uppercase tracking-widest text-brand-green/70">Get In Touch</h3>
                <p className="text-sm text-brand-green/80">
                  <a
                    href={`tel:${brand.contact.phone.replace(/\s+/g, '')}`}
                    onClick={() => trackEvent("phone_enquiry", { location: "contact_direct" })}
                    className="hover:underline"
                  >
                    {brand.contact.phone}
                  </a>
                </p>
                <p className="text-sm text-brand-green/80">
                  <a
                    href={`mailto:${brand.contact.email}`}
                    onClick={() => trackEvent("email_enquiry", { location: "contact_direct" })}
                    className="hover:underline"
                  >
                    {brand.contact.email}
                  </a>
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-[10px] uppercase tracking-widest text-brand-green/70">Visit Our Studio</h3>
                <p className="text-sm text-brand-green/80">{brand.contact.address}</p>
                <div className="w-full h-48 bg-brand-green/10 mt-4 relative overflow-hidden">
                  <iframe
                    title={`Map showing the Ntombis Fashion studio at ${brand.contact.address}`}
                    width="100%"
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy" 
                    allowFullScreen 
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(brand.contact.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

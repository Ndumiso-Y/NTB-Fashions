import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar, Footer } from "@/components/Layout";
import { brand } from "@/lib/data";
import { pageHead } from "@/lib/seo";
import { trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () =>
    pageHead({
      path: "/privacy",
      title: "Privacy Notice | Ntombis Fashion",
      description:
        "How Ntombis Fashion handles information on ntombis.com: what the website measures, what you share when you enquire, the services we rely on, and your privacy rights.",
    }),
});

/**
 * Every statement on this page describes something that is actually true of
 * this website and can be checked in the source:
 *
 *  - no cookies are set (the site has no session, no login and no cookie-based
 *    CSRF token - request protection is header-based, see src/start.ts);
 *  - the only measurement is Vercel Web Analytics and Vercel Speed Insights,
 *    both served from this site's own origin (src/components/SiteAnalytics.tsx);
 *  - the enquiry form has no backend - it composes a message in the browser and
 *    hands it to WhatsApp or a mail client (src/routes/contact.tsx);
 *  - the third parties named below are exactly the ones the pages request.
 *
 * Nothing here is invented: no registration number, no information officer, no
 * fixed retention period, no certification. If any of those are added later they
 * must be added as verified facts, not as boilerplate.
 */
const LAST_UPDATED = "1 September 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-brand-green/10 pt-10">
      <h2 className="text-2xl md:text-3xl mb-6">{title}</h2>
      <div className="space-y-4 text-brand-green/80 leading-relaxed">{children}</div>
    </section>
  );
}

function Privacy() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main id="main-content" className="pt-48 md:pt-56 pb-24 container-custom">
        <div className="max-w-3xl">
          <span className="text-xs tracking-[0.3em] uppercase mb-4 block text-brand-green/70">PRIVACY</span>
          <h1 className="text-4xl md:text-6xl mb-8">Privacy Notice</h1>
          <p className="text-xl text-brand-green/70 mb-4 leading-relaxed">
            This notice explains, in plain language, what happens to information when you use{" "}
            <span className="whitespace-nowrap">ntombis.com</span> or contact the {brand.fullName} studio.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-brand-green/60 mb-16">
            Last updated: {LAST_UPDATED}
          </p>

          <div className="space-y-14">
            <Section title="Who this notice is from">
              <p>
                {brand.fullName} is a custom clothing studio based at {brand.contact.address}, South Africa. We
                are responsible for the information described here, and you can reach us at any time using the
                details at the end of this page.
              </p>
              <p>
                This notice covers the {brand.fullName} website. It does not cover WhatsApp, your email
                provider, your mobile network or any other service you use to reach us &mdash; those are run by
                other companies under their own privacy terms.
              </p>
            </Section>

            <Section title="This website does not use cookies">
              <p>
                We do not place cookies on your device, and we do not use advertising or social media tracking
                pixels. There is no Google Analytics, no tag manager, and no Meta, TikTok or similar pixel on
                this site. Nothing here follows you to other websites, and nothing builds a profile of you.
              </p>
              <p>
                Because no cookies or similar identifiers are stored on your device, this site does not ask you
                to accept or reject any.
              </p>
            </Section>

            <Section title="Basic website usage information">
              <p>
                Our website is hosted by Vercel. Like any web host, Vercel processes the technical details that
                every web request carries &mdash; your IP address, the page requested, the time, your browser
                type and the page you came from &mdash; in order to deliver the page to you and to keep the
                service secure and available.
              </p>
              <p>
                We also use <strong className="font-medium text-brand-green">Vercel Web Analytics</strong> to
                understand how the website is used: which pages are visited, roughly where in the world visitors
                come from (country level), and which device type and browser they use. It is designed to work
                without cookies and without a persistent identifier, so we cannot recognise you as the same
                person across separate visits, and we cannot single you out as an individual. What we see are
                counts and trends, not people.
              </p>
              <p>
                The analytics scripts are served from our own web address rather than from a separate tracking
                domain, so using this site does not hand your visit to a third-party advertising network.
              </p>
            </Section>

            <Section title="Performance measurement">
              <p>
                We use <strong className="font-medium text-brand-green">Vercel Speed Insights</strong> to
                measure how quickly pages actually load and respond for real visitors &mdash; how long the main
                image takes to appear, how soon the page reacts to a tap, and whether the layout shifts while
                loading. These are timing measurements tied to a page address, not to a person, and we use them
                only to keep the site fast on real phones and connections.
              </p>
            </Section>

            <Section title="Interactions we count">
              <p>
                So that we can tell which parts of the site are useful, we count a small number of actions:
                which main call-to-action was pressed, which collection or gallery category was viewed or
                filtered, and when someone starts the enquiry form or opens WhatsApp, their email app or their
                phone dialler to contact us.
              </p>
              <p>
                These counts record only <em>that</em> an action happened and where on the site it happened.
                They never include your name, email address, phone number, or anything you have typed &mdash;
                not the occasion you entered, and not the description of your garment. Nothing you write on this
                website is sent to our analytics.
              </p>
              <p>
                One thing worth being clear about: when you open WhatsApp or your email app from this site, we
                can see that the app was opened, but we cannot see whether you went on to press Send, and we
                never see the contents of your message through the website. Only the message you actually send
                reaches us, in WhatsApp or in our inbox.
              </p>
            </Section>

            <Section title="Information you give us">
              <p>
                The <Link to="/contact" className="underline underline-offset-4">consultation form</Link> asks
                for your name, your email address, the occasion, and &mdash; optionally &mdash; a description of
                the garment you have in mind.
              </p>
              <p>
                This form has no mailbox of its own and no database behind it. Everything you type stays in your
                browser: the page assembles it into a message and then opens WhatsApp or your email app with
                that message ready to send. The website itself never stores your details and never transmits
                them to us on its own. We receive your enquiry only once you press Send in that app.
              </p>
              <p>
                When you do contact us &mdash; through WhatsApp, email, a phone call, or in person at the studio
                &mdash; we keep what you share so that we can answer you and, if you go ahead, design and make
                your garment. That may include your contact details, the occasion and date, your style
                preferences, and measurements taken during a fitting.
              </p>
            </Section>

            <Section title="How we use what you share">
              <p>We use the information you give us to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>reply to your enquiry and discuss your garment;</li>
                <li>prepare quotes, take measurements, and arrange fittings;</li>
                <li>make and deliver the garment you have ordered; and</li>
                <li>keep the records a small business needs for its own orders and accounts.</li>
              </ul>
              <p>
                We do not sell, rent or trade your information, and we do not share it with advertising
                networks. We share it with other people only where it is genuinely needed to do the work &mdash;
                for example a courier delivering a finished garment &mdash; or where the law requires it.
              </p>
            </Section>

            <Section title="Other services this website relies on">
              <p>Loading a page here may also involve the following:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="font-medium text-brand-green">Vercel</strong> &mdash; hosting, web
                  analytics and performance measurement, as described above.
                </li>
                <li>
                  <strong className="font-medium text-brand-green">Google Fonts</strong> &mdash; the typefaces
                  used across the site are requested from Google&rsquo;s font servers, which means your browser
                  contacts Google to fetch them.
                </li>
                <li>
                  <strong className="font-medium text-brand-green">Google Maps</strong> &mdash; the{" "}
                  <Link to="/contact" className="underline underline-offset-4">contact page</Link> embeds a map
                  of the studio. That map is loaded from Google and is subject to Google&rsquo;s own privacy
                  terms.
                </li>
              </ul>
              <p>
                Each of these receives the technical details that come with any web request, such as your IP
                address and browser type. We do not send them any information about you, and we do not use them
                to track you.
              </p>
            </Section>

            <Section title="When you leave this website">
              <p>
                The WhatsApp, email and phone links on this site hand you over to another app. From that point
                your conversation with us is carried by WhatsApp (operated by Meta), by your email provider, or
                by your mobile network, and it is governed by their privacy terms as well as this one. We still
                treat whatever you send us there according to this notice.
              </p>
            </Section>

            <Section title="Keeping information, and keeping it safe">
              <p>
                We keep enquiry and order information only for as long as we have a reason to &mdash; while we
                are talking to you, while your garment is being made, and afterwards for as long as we may need
                it for aftercare, for a repeat commission, or to meet our record-keeping obligations. When there
                is no longer a reason to keep it, we delete it or dispose of it securely.
              </p>
              <p>
                Access to enquiries, measurements and order records is limited to the people at{" "}
                {brand.fullName} who need them to do the work. The website itself is served over an encrypted
                connection (HTTPS). No system can be guaranteed completely secure, but we take reasonable care
                with what you trust us with.
              </p>
            </Section>

            <Section title="Your privacy rights">
              <p>
                South Africa&rsquo;s Protection of Personal Information Act (POPIA) gives you rights over the
                information we hold about you. You may ask us to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>tell you what information about you we hold;</li>
                <li>correct anything that is wrong or out of date;</li>
                <li>delete information we no longer have a reason to keep; or</li>
                <li>stop using your information for a particular purpose.</li>
              </ul>
              <p>
                Email us at{" "}
                <a
                  href={`mailto:${brand.contact.email}`}
                  onClick={() => trackEvent("email_enquiry", { location: "privacy_notice" })}
                  className="underline underline-offset-4"
                >
                  {brand.contact.email}
                </a>{" "}
                and we will deal with your request. If you are not satisfied with how we have handled it, you
                may complain to the Information Regulator of South Africa.
              </p>
            </Section>

            <Section title="Changes to this notice">
              <p>
                If we change how this website measures usage, or add or remove a service it depends on, we will
                update this page and change the date at the top.
              </p>
            </Section>

            <Section title="Contact us">
              <p>
                {brand.fullName}
                <br />
                {brand.contact.address}
              </p>
              <p>
                Email{" "}
                <a
                  href={`mailto:${brand.contact.email}`}
                  onClick={() => trackEvent("email_enquiry", { location: "privacy_notice" })}
                  className="underline underline-offset-4"
                >
                  {brand.contact.email}
                </a>
                <br />
                Phone{" "}
                <a
                  href={`tel:${brand.contact.phone.replace(/\s+/g, "")}`}
                  onClick={() => trackEvent("phone_enquiry", { location: "privacy_notice" })}
                  className="underline underline-offset-4"
                >
                  {brand.contact.phone}
                </a>
              </p>
            </Section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

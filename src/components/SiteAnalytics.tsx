import { Analytics, type BeforeSend, type BeforeSendEvent } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Vercel Web Analytics + Speed Insights, mounted once for the whole site.
 *
 * Both components render `null` and only touch the DOM inside `useEffect`, so
 * the server markup is unchanged and hydration is unaffected. Each injects its
 * script exactly once (guarded internally by a `document.head.querySelector`
 * on the script src), and this component is mounted in a single place —
 * `RootComponent` in src/routes/__root.tsx — so neither script can be doubled.
 *
 * In production both load from this site's own origin (`/_vercel/insights/...`
 * and `/_vercel/speed-insights/...`), which Vercel proxies. That is why they
 * add no third-party host, set no cookie, and are not blocked as trackers.
 *
 * Route reporting is driven by the router rather than by the scripts' own
 * history hooks: passing `route` switches Web Analytics to manual page views,
 * so each client-side navigation reports exactly one view, with the route
 * pattern (`/gallery`) alongside the resolved path.
 */

/**
 * Query parameters allowed through to analytics. Everything else is dropped
 * before the URL leaves the page. The site never puts visitor input in a query
 * string, so this is belt-and-braces: it means that even a hand-edited or
 * mis-built link such as `/contact?email=someone@example.com` cannot deposit a
 * personal detail in the analytics payload.
 */
const ALLOWED_QUERY_PARAMS = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
  "ref",
]);

function sanitizeUrl(rawUrl: string): string {
  try {
    const url = new URL(rawUrl, window.location.origin);
    for (const key of Array.from(url.searchParams.keys())) {
      if (!ALLOWED_QUERY_PARAMS.has(key)) url.searchParams.delete(key);
    }
    url.hash = "";
    return url.toString();
  } catch {
    // Unparseable URL: report the path only rather than guessing.
    return window.location.pathname;
  }
}

/** Web Analytics page-view / custom-event payloads. */
const analyticsBeforeSend: BeforeSend = (event: BeforeSendEvent) => ({
  ...event,
  url: sanitizeUrl(event.url),
});

/** Speed Insights web-vital payloads. Same treatment; the package does not
 *  export its event type, so it is spelled out here. */
const speedInsightsBeforeSend = (event: { type: "vital"; url: string; route?: string }) => ({
  ...event,
  url: sanitizeUrl(event.url),
});

export function SiteAnalytics() {
  // Both values are read off the *matched* route rather than off
  // `state.location`, and that matters: during a client-side navigation the
  // router updates `location` before the new matches resolve, so a snapshot
  // exists in which `location.pathname` is already the destination while
  // `matches` still describes the page being left. Reading `path` from
  // `location` and `route` from `matches` therefore reported two page views
  // per navigation - once for the mismatched pair, once for the settled one.
  // Deriving both from the same match keeps them consistent, so exactly one
  // page view is reported per navigation.
  //
  // `routeId` is the route pattern and `pathname` the resolved URL. Every route
  // on this site is static, so the two are equal today; the distinction stays
  // correct if a parameterised route is ever added.
  const route = useRouterState({
    select: (s) => s.matches[s.matches.length - 1]?.routeId ?? s.location.pathname,
  });
  const path = useRouterState({
    select: (s) => s.matches[s.matches.length - 1]?.pathname ?? s.location.pathname,
  });

  return (
    <>
      <Analytics
        mode={import.meta.env.PROD ? "production" : "development"}
        route={route}
        path={path}
        beforeSend={analyticsBeforeSend}
      />
      <SpeedInsights route={route} beforeSend={speedInsightsBeforeSend} />
    </>
  );
}

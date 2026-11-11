import { useEffect } from "react";
import { brandDetails } from "../data/brand";
import { seoFor, notFoundSeo } from "../data/seo";

const setMeta = (selector: string, attr: string, value: string) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

/** Keeps the title, description and canonical URL in step with client-side navigation. */
export const usePageSeo = (path: string | null) => {
  useEffect(() => {
    const seo = (path && seoFor(path)) || notFoundSeo;
    const url = `${brandDetails.siteUrl}${path && path !== "/" ? path : "/"}`;
    document.title = seo.title;
    setMeta('meta[name="description"]', "content", seo.description);
    setMeta('meta[property="og:title"]', "content", seo.title);
    setMeta('meta[property="og:description"]', "content", seo.description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('link[rel="canonical"]', "href", url);
  }, [path]);
};

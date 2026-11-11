// Writes a fully rendered HTML file for every page, so search engines and
// AI assistants that don't run JavaScript still see the content.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const serverEntry = path.join(root, "dist-server", "entry-server.js");
const SITE = "https://www.ntombis.com";

const { render, routes } = await import(pathToFileURL(serverEntry).href);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const escape = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const today = new Date().toISOString().slice(0, 10);

for (const route of routes) {
  const url = `${SITE}${route.path === "/" ? "/" : route.path}`;
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(route.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${escape(route.description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${escape(route.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${escape(route.description)}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${escape(route.title)}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${escape(route.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace('<div id="root"></div>', `<div id="root">${render(route.path)}</div>`);
  const file = route.path === "/" ? "index.html" : `${route.path.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), html);
  console.log(`prerendered ${route.path} -> dist/${file}`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${SITE}${r.path}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
fs.rmSync(path.join(root, "dist-server"), { recursive: true, force: true });
console.log("wrote dist/sitemap.xml");

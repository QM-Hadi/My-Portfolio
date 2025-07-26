import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.5 }
];

const sitemap = new SitemapStream({
  hostname: 'https://my.portfolio-one-peach-47.vercel.app'
});

const writeStream = createWriteStream(
  join(__dirname, '../public/sitemap.xml')
);

sitemap.pipe(writeStream);

links.forEach(link => {
  sitemap.write({
    ...link,
    lastmod: new Date().toISOString()
  });
});

sitemap.end();

console.log('✅ Sitemap generated successfully');
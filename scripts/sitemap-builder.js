const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Your website routes
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
  path.join(__dirname, '../public/sitemap.xml')
);

sitemap.pipe(writeStream);

links.forEach(link => {
  sitemap.write({
    ...link,
    lastmod: new Date().toISOString()
  });
});

sitemap.end();

streamToPromise(sitemap)
  .then(() => console.log('✅ Sitemap generated successfully'))
  .catch(err => console.error('❌ Sitemap error:', err));
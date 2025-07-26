const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// List all your website routes here
const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.5 }
  // Add more routes as needed
];

// Create sitemap stream
const sitemap = new SitemapStream({ 
  hostname: 'https://my.portfolio-one-peach-47.vercel.app',
  lastmodDateOnly: true // Removes time from date formatting
});

// Create write stream to public folder
const writeStream = createWriteStream(
  path.resolve(__dirname, '../public/sitemap.xml')
);

// Pipe the sitemap to the write stream
sitemap.pipe(writeStream);

// Add all links to the sitemap
links.forEach(link => {
  sitemap.write({
    ...link,
    lastmod: new Date().toISOString().split('T')[0] // YYYY-MM-DD format
  });
});

// Finalize
sitemap.end();

// Handle completion
streamToPromise(sitemap)
  .then(() => console.log('Sitemap generated successfully!'))
  .catch(err => console.error('Sitemap generation failed:', err));
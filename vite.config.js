import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { writeFileSync } from 'fs';
import { SitemapStream } from 'sitemap';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'sitemap-generator',
      closeBundle: async () => {
        const links = [
          { url: '/', changefreq: 'monthly', priority: 1.0 },
          { url: '/about', changefreq: 'monthly', priority: 0.8 },
          { url: '/projects', changefreq: 'monthly', priority: 0.8 },
          { url: '/contact', changefreq: 'monthly', priority: 0.5 }
        ];
        
        const stream = new SitemapStream({
          hostname: 'https://my.portfolio-one-peach-47.vercel.app'
        });
        
        const chunks = [];
        for (const link of links) {
          stream.write(link);
        }
        stream.end();
        
        for await (const chunk of stream) {
          chunks.push(chunk);
        }
        
        writeFileSync('./public/sitemap.xml', chunks.join(''));
        console.log('✅ Sitemap generated successfully');
      }
    }
  ]
});
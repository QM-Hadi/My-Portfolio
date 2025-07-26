import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { execSync } from 'child_process';

// Generate sitemap during production build
if (process.env.NODE_ENV === 'production') {
  try {
    console.log('Generating sitemap...');
    execSync('node scripts/sitemap-builder.js');
  } catch (error) {
    console.error('Sitemap generation failed:', error.message);
  }
}

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInclude: ['**/*.xml', '**/*.html']
  }
});
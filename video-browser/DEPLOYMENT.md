# Deployment Guide

## Quick Deployment Options

### Option 1: Vercel (Recommended)
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   cd video-browser
   vercel
   ```

### Option 2: Netlify
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Option 3: GitHub Pages
1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```

2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update vite.config.ts with base URL:
   ```ts
   export default defineConfig({
     base: '/health-chatbot/',
     // ... rest of config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Option 4: Static Hosting (Any Provider)
1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the contents of the `dist` folder to your hosting provider

## Important Notes

- The app is a Single Page Application (SPA), so make sure your hosting provider is configured to redirect all routes to `index.html`
- For production, consider adding environment variables for API endpoints if you integrate with a real backend
- The build output is in the `dist` folder
- Videos are embedded via YouTube iframes, ensure your hosting allows iframe embedding

## Production Checklist

- [ ] Build succeeds without errors
- [ ] All videos load correctly
- [ ] Search functionality works
- [ ] Like/unlike persists in localStorage
- [ ] Responsive design works on all devices
- [ ] Accessibility features are functional
- [ ] No console errors in production build

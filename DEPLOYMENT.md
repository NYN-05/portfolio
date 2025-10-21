# 🚀 Deployment Guide

This guide covers deploying your portfolio to various platforms.

## Vercel (Recommended) ⭐

Vercel is the easiest deployment option and is made by the creators of Next.js.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure settings (usually auto-detected)
   - Click "Deploy"

3. **Configure Environment Variables** (if needed)
   - Go to Project Settings → Environment Variables
   - Add your environment variables from `.env.local.example`

4. **Custom Domain** (optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Automatic Deployments
- Every push to `main` branch triggers a new deployment
- Pull requests get preview deployments

---

## Netlify

### Steps:

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18.x or higher

2. **Deploy**
   - Connect your Git repository
   - Configure build settings
   - Deploy

3. **Environment Variables**
   - Add in Site Settings → Environment Variables

---

## GitHub Pages

**Note:** GitHub Pages requires additional configuration for Next.js dynamic features.

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "scripts": {
       "deploy": "next build && next export && touch out/.nojekyll && gh-pages -d out -t true"
     }
   }
   ```

3. **Update next.config.js**
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     basePath: '/your-repo-name',
   };
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

---

## Docker

### Dockerfile

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### Build and Run

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## Self-Hosted (VPS)

### Prerequisites
- Ubuntu 20.04+ or similar
- Node.js 18+
- Nginx
- PM2 (process manager)

### Steps:

1. **Install Dependencies**
   ```bash
   # Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # PM2
   sudo npm install -g pm2
   
   # Nginx
   sudo apt-get install nginx
   ```

2. **Clone and Build**
   ```bash
   cd /var/www
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   npm install
   npm run build
   ```

3. **Start with PM2**
   ```bash
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Enable SSL with Certbot**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

---

## Pre-Deployment Checklist

Before deploying to production, ensure:

### Content
- [ ] All placeholder text replaced with your content
- [ ] Personal information updated (name, bio, etc.)
- [ ] Projects added with images
- [ ] Skills and technologies updated
- [ ] Social media links configured
- [ ] Contact form configured

### Configuration
- [ ] Environment variables set
- [ ] Domain configured (if using custom domain)
- [ ] Site URL updated in `.env` and metadata
- [ ] `robots.txt` updated with your domain
- [ ] Sitemap configured with your domain
- [ ] Favicon replaced

### Testing
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Dark/light mode toggle works
- [ ] Forms validate and submit
- [ ] Responsive design on mobile/tablet
- [ ] All links work (internal and external)
- [ ] Images load properly
- [ ] No console errors

### Performance
- [ ] Build completes without errors
- [ ] Lighthouse scores > 90
- [ ] Images optimized
- [ ] No unused dependencies

### SEO
- [ ] Meta tags configured
- [ ] Open Graph images set
- [ ] Analytics configured
- [ ] Sitemap submitted to Google Search Console

---

## Post-Deployment

### 1. Test Your Site
- Visit your deployed URL
- Test all functionality
- Check on different devices and browsers

### 2. Submit to Search Engines
- Google Search Console: [search.google.com/search-console](https://search.google.com/search-console)
- Bing Webmaster Tools: [www.bing.com/webmasters](https://www.bing.com/webmasters)

### 3. Monitor Performance
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Configure error tracking (Sentry)
- Monitor analytics

### 4. Keep Updated
```bash
# Update dependencies regularly
npm update
npm audit fix

# Test and redeploy
npm run build
git commit -am "Update dependencies"
git push
```

---

## Troubleshooting

### Build Failures
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working
- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding new variables

### Images Not Loading
- Check image paths (case-sensitive on Linux)
- Ensure images are in `public/` directory
- Verify image domains in `next.config.js`

### 404 Errors After Deployment
- Check `basePath` in `next.config.js`
- Verify routing configuration
- Check server logs

---

## Need Help?

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Issues](https://github.com/yourusername/portfolio/issues)

---

## 🎉 Congratulations!

Your portfolio is now live and accessible to the world! Don't forget to:
- Share it on LinkedIn, Twitter, and other platforms
- Add the link to your resume
- Keep it updated with new projects
- Monitor analytics and user feedback

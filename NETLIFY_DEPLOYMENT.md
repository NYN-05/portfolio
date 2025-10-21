# 🚀 Netlify Deployment Guide

## Prerequisites Checklist

Before deploying to Netlify, ensure you have:

- ✅ GitHub account
- ✅ Netlify account (free tier is fine)
- ✅ Your code pushed to GitHub
- ✅ All environment variables ready (if any)
- ✅ Profile image added (`public/images/profile.jpg`)
- ✅ Resume PDF added (`public/resume.pdf`)
- ✅ Project builds successfully locally (`npm run build`)

---

## 📦 Step-by-Step Deployment

### Step 1: Push Code to GitHub

```bash
# Initialize git repository (if not done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Ready for deployment"

# Add your GitHub repository
git remote add origin https://github.com/NYN-05/portfolio.git

# Push to main branch
git branch -M main
git push -u origin main
```

**Verify:** Check that your code is visible on GitHub.

---

### Step 2: Connect Netlify to GitHub

1. **Go to Netlify:**
   - Visit [app.netlify.com](https://app.netlify.com/)
   - Sign in with your GitHub account

2. **Import Project:**
   - Click "Add new site" → "Import an existing project"
   - Select "GitHub"
   - Authorize Netlify to access your repositories
   - Choose your portfolio repository

---

### Step 3: Configure Build Settings

Netlify should auto-detect Next.js. Verify these settings:

**Build settings:**
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Node version:** 18.x or higher

**Advanced settings:**
If needed, add these environment variables:
```
NODE_VERSION=18
```

---

### Step 4: Deploy

1. Click **"Deploy site"**
2. Wait 2-3 minutes for build to complete
3. Your site will be live at: `random-name.netlify.app`

---

### Step 5: Configure Custom Domain (Optional)

**Option A: Use Netlify Subdomain**
1. Go to "Site settings" → "Domain management"
2. Click "Options" → "Edit site name"
3. Change to: `jhashanknayan.netlify.app`

**Option B: Use Custom Domain**
1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. Go to "Domain management" → "Add custom domain"
3. Follow DNS configuration instructions
4. Netlify provides free SSL automatically

---

## 🔧 Environment Variables (If Needed)

If you have any API keys or secrets:

1. Go to "Site settings" → "Environment variables"
2. Add your variables:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=your_form_id
   NEXT_PUBLIC_GA_ID=your_analytics_id
   ```

---

## 🐛 Common Issues & Solutions

### Issue 1: Build Fails
**Solution:** 
```bash
# Test locally first
npm run build

# If it works locally, check Netlify build logs
# Common fixes:
- Ensure all dependencies are in package.json
- Check Node version matches (18+)
```

### Issue 2: Images Not Loading
**Solution:**
- Ensure images are in `public/` folder
- Check image paths are correct
- Verify `next.config.js` has proper image domains

### Issue 3: 404 on Routes
**Solution:**
- Ensure `netlify.toml` is in root directory
- Check Next.js App Router is properly configured

### Issue 4: Environment Variables Not Working
**Solution:**
- Prefix with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding new variables

---

## 📊 Post-Deployment Checklist

After deployment, verify:

- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Dark/light mode toggle works
- [ ] Contact form works (if configured)
- [ ] Resume downloads
- [ ] Images load properly
- [ ] Links work (social media, projects)
- [ ] Mobile responsive design
- [ ] No console errors

---

## 🔄 Continuous Deployment

Every time you push to GitHub `main` branch:
- Netlify automatically rebuilds
- Changes go live in 2-3 minutes
- No manual deployment needed!

**Workflow:**
```bash
# Make changes locally
git add .
git commit -m "Update about page"
git push

# Netlify automatically deploys!
```

---

## 🎯 Performance Optimization

### Enable These Netlify Features:

1. **Asset Optimization**
   - Go to "Build & deploy" → "Post processing"
   - Enable "Bundle CSS" and "Minify JS"

2. **Netlify Analytics** (Optional - Paid)
   - Or use free Google Analytics

3. **Forms** (For contact form)
   - Add `netlify` attribute to your form
   - Or use Formspree integration

---

## 📱 Test Your Deployment

### Desktop Testing:
- Chrome DevTools (F12)
- Test all breakpoints
- Check console for errors

### Mobile Testing:
- Use Chrome DevTools device emulation
- Test on real devices
- Check touch interactions

### Performance Testing:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- Aim for 90+ Lighthouse score

---

## 🌐 Your Deployment URLs

**Netlify Default:**
```
https://[your-site-name].netlify.app
```

**Custom Domain (if configured):**
```
https://jhashanknayan.com
```

---

## 💡 Pro Tips

1. **Preview Deploys:** Every pull request gets a preview URL
2. **Branch Deploys:** Deploy different branches for testing
3. **Rollback:** Can rollback to previous deploys instantly
4. **Split Testing:** A/B test different versions
5. **Edge Functions:** Add serverless functions if needed

---

## 🆘 Need Help?

- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com/)
- **Netlify Support:** [answers.netlify.com](https://answers.netlify.com/)
- **Next.js on Netlify:** [docs.netlify.com/frameworks/next-js](https://docs.netlify.com/frameworks/next-js/)

---

## ✅ Final Pre-Deployment Checklist

Before deploying, make sure:

- [ ] `npm run build` works without errors
- [ ] All personal info is updated
- [ ] Social media links are correct
- [ ] Projects data is filled in
- [ ] Profile image is added
- [ ] Resume PDF is added
- [ ] Test dark/light mode
- [ ] Test all pages locally
- [ ] Code is committed to GitHub
- [ ] `.env.local` is in `.gitignore` (don't commit secrets!)

---

## 🎉 You're Ready!

Your portfolio will be live at:
```
https://jhashanknayan.netlify.app
```

**Estimated deployment time:** 3-5 minutes

Good luck with your deployment! 🚀

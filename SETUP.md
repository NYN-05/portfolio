# Quick Setup Guide

## 🚀 Getting Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

### 3. Customize Your Portfolio

#### Update Personal Information
1. **Home Page** - Edit `src/app/page.tsx`
   - Line 31: Change "Your Name"
   - Line 38: Update role/title
   - Line 48: Modify tagline

2. **About Page** - Edit `src/app/about/page.tsx`
   - Line 27: Update name
   - Lines 29-44: Update bio

3. **Contact Page** - Edit `src/app/contact/page.tsx`
   - Add your email, GitHub, LinkedIn, Twitter links

#### Add Your Projects
Edit `src/data/projects.json`:
```json
{
  "id": "unique-id",
  "title": "Project Name",
  "description": "Short description",
  "longDescription": "Detailed description with multiple paragraphs",
  "image": "/images/projects/your-image.jpg",
  "technologies": ["React", "Node.js", "MongoDB"],
  "github": "https://github.com/username/repo",
  "demo": "https://your-project-demo.com",
  "featured": true,
  "category": "web"
}
```

#### Update Skills
Edit `src/data/skills.json` to add/remove/modify your skills.

#### Add Project Images
Place your project screenshots in `public/images/projects/`

### 4. Configure Environment Variables (Optional)

Copy the example file:
```bash
copy .env.local.example .env.local
```

Edit `.env.local` and add your API keys for:
- Email service (Formspree/Resend)
- Google Analytics
- Sanity CMS (if using blog)

### 5. Customize Theme Colors

Edit `tailwind.config.ts` to change colors:
```typescript
colors: {
  primary: {
    50: '#eff6ff',
    // ... customize all shades
  }
}
```

### 6. Build and Deploy

#### Build for Production
```bash
npm run build
```

#### Deploy to Vercel
1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

## 🎨 Customization Tips

### Change Favicon
Replace `public/favicon.svg` with your own icon (SVG or PNG)

### Add Google Analytics
1. Get tracking ID from Google Analytics
2. Add to `.env.local`: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
3. Uncomment analytics code in `src/app/layout.tsx`

### Enable Contact Form
1. Sign up for [Formspree](https://formspree.io/)
2. Create a form and get endpoint URL
3. Update endpoint in `src/components/ContactForm.tsx` line 34

### Add Blog Posts (Optional)
1. Set up [Sanity CMS](https://www.sanity.io/)
2. Configure credentials in `.env.local`
3. Implement blog post fetching in `src/lib/api.ts`

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Styling Issues
```bash
# Restart dev server after Tailwind config changes
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## ✅ Checklist Before Deployment

- [ ] Update all personal information (name, bio, etc.)
- [ ] Add your projects to `projects.json`
- [ ] Add project images
- [ ] Update skills in `skills.json`
- [ ] Configure contact form
- [ ] Update social media links
- [ ] Replace favicon
- [ ] Update `robots.txt` with your domain
- [ ] Update sitemap with your domain
- [ ] Test all pages and links
- [ ] Test responsive design on mobile
- [ ] Test dark/light mode
- [ ] Run `npm run build` successfully
- [ ] Configure environment variables in Vercel

## 🎉 You're Ready!

Your portfolio is now ready to showcase your work to the world!

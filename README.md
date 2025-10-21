# Developer Portfolio Website

A modern, fully responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Smooth Animations**: Beautiful transitions and animations powered by Framer Motion
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and structured data
- **Performance**: Optimized for fast loading and excellent Lighthouse scores
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support
- **Contact Form**: Integrated form handling with Formspree
- **Dynamic Projects**: Project showcase with filtering by category
- **Blog Section**: Ready-to-use blog layout (can integrate with Sanity CMS)

## 📁 Project Structure

```
portfolio-website/
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── projects/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── TechStack.tsx
│   │   ├── ContactForm.tsx
│   │   └── ThemeToggle.tsx
│   ├── lib/
│   │   ├── types.ts
│   │   ├── utils.ts
│   │   └── api.ts
│   ├── data/
│   │   ├── projects.json
│   │   └── skills.json
│   └── styles/
│       └── globals.css
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Set up environment variables:**

Create a `.env.local` file in the root directory:

```env
# Formspree (for contact form)
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id_here

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id_here
```

3. **Customize the content:**

- Update personal information in `src/data/projects.json` and `src/data/skills.json`
- Modify component text in `src/app/` pages
- Replace social media links in `src/components/Footer.tsx` and `src/components/Navbar.tsx`
- Add your resume PDF to `public/resume.pdf`
- Add project images to `public/images/projects/`

4. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Add environment variables in Vercel dashboard
5. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 🎨 Customization

### Colors

Modify the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: { ... },
  secondary: { ... },
  accent: { ... },
}
```

### Fonts

Update the font in `src/app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";
```

### Content

- **Projects**: Edit `src/data/projects.json`
- **Skills**: Edit `src/data/skills.json`
- **About**: Edit `src/app/about/page.tsx`
- **Blog**: Add posts in `src/app/blog/page.tsx` or integrate a CMS

## 📝 Contact Form Setup

This portfolio uses Formspree for form handling. To set it up:

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Copy your form ID
4. Add it to `.env.local` as `NEXT_PUBLIC_FORMSPREE_ID`

Alternatively, you can use:
- [Resend](https://resend.com/)
- [EmailJS](https://www.emailjs.com/)
- Your own API endpoint

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Jhashank Nayan**

- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@NYN-05](https://github.com/NYN-05)
- LinkedIn: [Jhashank Nayan](https://www.linkedin.com/in/jhashanknayan/)

## ⭐️ Show your support

Give a ⭐️ if you like this project!

## 📸 Screenshots

Add screenshots of your portfolio here!

---

Made with ❤️ using Next.js and Tailwind CSS

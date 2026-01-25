import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import "@/styles/globals.css";

const geistSans = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jhashanknayan.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Jhashank Nayan | Software Developer",
    template: "%s | Jhashank Nayan",
  },
  description:
    "Software Developer passionate about creating elegant solutions to complex problems. Specializing in web development with React, Next.js, and TypeScript.",
  keywords: [
    "Software Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Jhashank Nayan" }],
  creator: "Jhashank Nayan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Jhashank Nayan | Software Developer",
    description:
      "Software Developer passionate about creating elegant solutions to complex problems.",
    siteName: "Jhashank Nayan Portfolio",
    images: [
      {
        url: `${siteUrl}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Jhashank Nayan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhashank Nayan | Software Developer",
    description:
      "Software Developer passionate about creating elegant solutions to complex problems.",
    images: [`${siteUrl}/og-image.svg`],
    creator: "@Metalgear63097",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    url: "https://yourwebsite.com",
    title: "Jhashank Nayan | Software Developer",
    description:
      "Software Developer passionate about creating elegant solutions to complex problems.",
    siteName: "Jhashank Nayan Portfolio",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
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
    images: ["https://yourwebsite.com/og-image.jpg"],
    creator: "@yourusername",
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
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16 md:pt-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

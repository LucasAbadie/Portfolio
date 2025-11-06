import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import FloatingCursor from "@/components/FloatingCursor";
import type { Metadata } from "next";

/**
 * Font Configuration
 * Using Inter font from Google Fonts with Latin subset
 */
const inter = Inter({ subsets: ["latin"] });

/**
 * Metadata Configuration
 * SEO and social sharing metadata for the portfolio
 */
export const metadata: Metadata = {
  title: "Lucas Abadie - Portfolio",
  description: "Découvrez mes projets en développement web, game dev et création numérique.",
  generator: "Lucas ABADIE",
  keywords: [
    "portfolio",
    "développeur",
    "game dev",
    "Next.js",
    "Unreal Engine",
    "Unity",
    "Toulouse",
    "projets",
  ],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Lucas Abadie - Portfolio",
    description: "Mes projets en développement et création numérique.",
    url: "https://lucasabadie.fr/",
    siteName: "Lucas Abadie",
    images: [
      {
        url: "/image.png",
        alt: "Lucas Abadie Portfolio Preview",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

/**
 * Root Layout Component
 *
 * Defines the base HTML structure for the entire application.
 * Includes global providers (Theme), Google reCAPTCHA script, and custom cursor.
 *
 * @param children - Page content to render
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Google reCAPTCHA v2 Invisible - Used for contact form spam protection */}
        <script
          src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit"
          async
          defer
        ></script>
      </head>
      <body className={`${inter.className} bg-black`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
        <FloatingCursor />
      </body>
    </html>
  );
}

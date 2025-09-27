import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import FloatingCursor from "@/components/FloatingCursor";
import type { Metadata } from "next"; // Import Metadata type

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    // Add Metadata type
    title: "Lucas Abadie - Portfolio",
    description:
        "Découvrez mes projets en développement web, game dev et création numérique.",
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
    // Add manifest and icons metadata
    manifest: "/site.webmanifest",
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
            { url: "/favicon.svg", type: "image/svg+xml" },
        ],
        apple: "/apple-touch-icon.png", // Assumes apple-touch-icon.png exists in /public
    },
    // Add Open Graph metadata
    openGraph: {
        title: "Lucas Abadie - Portfolio",
        description:
            "Mes projets en développement et création numérique.",
        url: "https://lucasabadie.fr/", // Replace with your actual website URL
        siteName: "Lucas Abadie",
        images: [
            {
                url: "/image.png", // Path to your image in the public folder
                alt: "Lucas Abadie Website Preview", // Optional: Alt text for the image
            },
        ],
        locale: "fr_FR", // Optional: Specify locale
        type: "website", // Optional: Specify content type
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <body
                className={`${inter.className} bg-black mx-auto max-w-[1440px]`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                >
                    {children}
                </ThemeProvider>
                <FloatingCursor />
            </body>
        </html>
    );
}

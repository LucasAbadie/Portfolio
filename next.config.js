/**
 * Next.js Configuration
 *
 * Configures the Next.js application for optimal performance and static export.
 * This portfolio is built as a static site and deployed without a Node.js server.
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,

  /**
   * Image Optimization Configuration
   * Configured for static export with WebP and AVIF support
   */
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000, // Cache images for 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true, // Required for static export (no image optimization server)
  },

  /**
   * Experimental Features
   * Enable performance optimizations and disable scroll restoration
   */
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["motion", "framer-motion", "@tabler/icons-react"],
    scrollRestoration: false, // Prevent auto-scroll on page refresh
  },

  /**
   * Compiler Options
   * Remove console.log statements in production builds
   */
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  /**
   * Output Mode
   * Export as static HTML/CSS/JS for deployment on static hosting
   */
  output: "export",
};

module.exports = nextConfig;

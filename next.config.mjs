/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  // output: 'export',
  experimental: {
    appDir: true, // Vérifie si activé
  },
  reactStrictMode: false, // Désactive StrictMode si besoin
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
};

export default nextConfig;
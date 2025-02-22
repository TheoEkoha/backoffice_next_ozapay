const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Retirer l'option output: 'export'
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
};

module.exports = nextConfig;
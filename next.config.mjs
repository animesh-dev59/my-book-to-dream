/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        // "i.iib.co.com"  "i.iib.co.com" "i.iib.co.com"
      },
    ],
  },
};

export default nextConfig;
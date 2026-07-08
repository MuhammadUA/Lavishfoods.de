/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lavishfoods.com.pk',
      },
    ],
  },
};

export default nextConfig;

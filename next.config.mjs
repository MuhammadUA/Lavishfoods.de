/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lavishfoods.com.pk' },
      { protocol: 'https', hostname: 'wddhkskdmjfbionlvuaz.supabase.co' },
    ],
  },
};

export default nextConfig;

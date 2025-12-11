/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.nahara.co.in",
      },
    ],
  },
};

export default nextConfig;

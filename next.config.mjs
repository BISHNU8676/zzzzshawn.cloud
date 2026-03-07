/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Avoid TimeoutError when optimizing slow remote images (e.g. NASA APOD)
    imgOptTimeoutInSeconds: 30,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

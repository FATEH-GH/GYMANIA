/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v2.exercisedb.io",
        port: "",
        pathname: "/image/**",
      },
    ],
  },
};

module.exports = nextConfig;

//(https://v2.exercisedb.io/image/FvR3XRFrdIuLM7)

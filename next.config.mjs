/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei", "gsap", "@gsap/react", "lenis"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "omegamedsurge.in",
      },
    ],
  },
};

export default nextConfig;


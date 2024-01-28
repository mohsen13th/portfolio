
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: "export", // <=== enables static exports
    reactStrictMode: true,
    basePath: "/portfolio",
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "moviesapi.ir",
          port: "",
          pathname: "/images/**",
        },
      ],
    },
  };
  
  export default nextConfig;
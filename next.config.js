//  @type {import('next').NextConfig} 
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    basePath: "/portfolio",
  };

module.exports = nextConfig
module.exports = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'moviesapi.ir',
            port: '',
            pathname: '/images/**',
        }, ],
    },
}

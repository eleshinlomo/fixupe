const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval';
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data:;
      connect-src 'self' ${BASE_URL};
      font-src 'self' https://fonts.gstatic.com;
      frame-src 'none';
      object-src 'none';
    `.replace(/\s{2,}/g, ' ').trim(),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "oaidalleapiprodscus.blob.core.windows.net",
      // Add other domains if needed
    ],
  },

  async headers() {
    return [
      {
        source: '/(.*)', // Apply headers to all routes
        headers: securityHeaders,
      },
    ];
  },

  async rewrites() {
   
    const selectedBackend = BASE_URL

    return [
      {
        source: '/api/:path*',
        destination: `${selectedBackend}/api/:path*`, // Dynamic rewrite based on environment
      },
    ];
  },
};

module.exports = nextConfig;

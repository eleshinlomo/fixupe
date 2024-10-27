const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval';
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data:;
      connect-src 'self' http://localhost:8000 https://myafrosbackend-production.up.railway.app;
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

}

module.exports = nextConfig;

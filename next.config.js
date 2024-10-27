const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval';
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data:;
      connect-src 'self' http://localhost:8000 http://localhost:8001 https://prod-backend-1.com https://prod-backend-2.com;
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
    const backendURLs = {
      development: ['http://localhost:8000', 'http://localhost:8001'],
      production: ['https://prod-backend-1.com', 'https://prod-backend-2.com'],
    };

    const env = process.env.NODE_ENV || 'development';
    const selectedBackend = backendURLs[env][0]; // Use the first backend by default

    return [
      {
        source: '/api/:path*',
        destination: `${selectedBackend}/api/:path*`, // Dynamic rewrite based on environment
      },
    ];
  },
};

module.exports = nextConfig;

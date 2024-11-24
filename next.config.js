const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval';
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' https://*.ytimg.com https://i.ytimg.com;
      connect-src 'self' ;
      font-src 'self' https://fonts.gstatic.com;
      frame-src 'self' youtube.com www.youtube.com;
      object-src 'self';
    `.replace(/\s{2,}/g, ' ').trim(),
  },
  {
    key: 'Permissions-Policy',
    value: 'picture-in-picture=*', // Allow Picture-in-Picture from all origins
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

  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)', 
  //       headers: securityHeaders,
  //     },
  //   ];
  // },



}

module.exports = nextConfig;

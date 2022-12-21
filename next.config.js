/** @type {import('next').NextConfig} */

// I plan on fixing the script-src * thing later. I'm not a fan, but it's screwing with GTM...
const ContentSecurityPolicy = `
  default-src 'self' reprogle.org *.reprogle.org;
  font-src *;
  child-src 'self';
  frame-src 'self' *.cloudflare.com;
  script-src * 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  connect-src 'self' vitals.vercel-insights.com *.google-analytics.com google-analytics.com discord.com *.instagram.com *.twitter.com *.linkedin.com;
`;

const securityHeaders = [
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];

module.exports = {
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/twitter',
        destination: 'https://www.twitter.com/natereprogle'
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/natereprogle/'
      },
    ]
  }
  },
  reactStrictMode: true,
  swcMinify: true,
};

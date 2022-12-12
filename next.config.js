/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self' reprogle.org *.reprogle.org;
  font-src *;
  child-src 'self';
  frame-src 'self';
  script-src: 'self' 'unsafe-inline' static.cloudflareinsights.com google-analytics.com;
  style-src-elem: 'self' fonts.googleapis.com;
  connect-src: 'self' vitals.vercel-insights.com;
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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
};

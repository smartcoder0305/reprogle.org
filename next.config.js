/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
default-src 'self' reprogle.org *.reprogle.org;
font-src *;
child-src 'self';
frame-src 'self';
`;

const securityHeaders = [
  {
    key: "Permissions-Policy",
    value: "none",
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

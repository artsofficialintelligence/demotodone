/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            // Allow Spotify and SoundCloud iframes to load
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://open.spotify.com https://w.soundcloud.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

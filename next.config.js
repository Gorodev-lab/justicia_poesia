/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    return 'uchiti-v2-assertive-' + Date.now();
  },
  env: {
    NEXT_PUBLIC_DEPLOY_ID: 'UCHITI_V2_ASSERTIVE',
  },
  reactStrictMode: true,
};

export default nextConfig;

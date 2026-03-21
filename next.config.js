/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    return 'huchiti-v2-assertive-' + Date.now();
  },
  env: {
    NEXT_PUBLIC_DEPLOY_ID: 'HUCHITI_V2_ASSERTIVE',
  },
  reactStrictMode: true,
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        // basePath: 'https://wiseskus-fa-is-api-sp.azurewebsites.net/api/V1/search',
        basePath: 'https://wiseskus-fa-is-api-sp.azurewebsites.net/api/V1/search_alpha',
    },
    images: {
        domains: ['raw.githubusercontent.com'],
    },
};

export default nextConfig;

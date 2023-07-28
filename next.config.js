/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/signin',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;

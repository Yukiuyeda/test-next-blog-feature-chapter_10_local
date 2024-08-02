/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.jp',
                port: '',
                pathname: '/800x400.png'
            }
        ]
    }
};

export default nextConfig;

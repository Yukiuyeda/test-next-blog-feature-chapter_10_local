/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.jp',
                port: '',
                pathname: '/800x400.png'
            },
            {
                protocol: 'https',
                hostname: 'pnvhswegqgcpzmgrctab.supabase.co',
                port: '',
                
            }
        ]
    }
};

export default nextConfig;

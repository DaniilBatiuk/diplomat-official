import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '', // Оставляем пустым, если порт не используется
        pathname: '/**', // Используем маску для любых путей
      },
    ],
  },
}

export default nextConfig

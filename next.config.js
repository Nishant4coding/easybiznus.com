/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'hi'],
        defaultLocale: 'en',
    },
    images: {
        domains: ['shoemato.s3.ap-south-1.amazonaws.com','static.nike.com','shoemato-web.s3.ap-south-1.amazonaws.com'],
    },
}

module.exports = nextConfig

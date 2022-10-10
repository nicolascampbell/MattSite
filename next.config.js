/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	assetPrefix: '/nicolascampbell/',
};

module.exports = nextConfig;

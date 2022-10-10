/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	assetPrefix: '/MattSite/',
};

module.exports = nextConfig;

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withPWA = require("next-pwa");

// ------------------------------------------------------------------------------

// base next config
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
			{
				protocol: "http",
				hostname: "**",
			},
		],
	},
	reactStrictMode: true,
	transpilePackages: ["@pusher/push-notifications-web"],
	i18n: {
		locales: ["en-US", "zh-CN"],
		defaultLocale: "en-US",
		localeDetection: false,
	},
	compiler: {
		removeConsole: false,
	},
	experimental: {
		webpackBuildWorker: true,
		forceSwcTransforms: true,
	},
};

// ------------------------------------------------------------------------------

// for PWA
const pwaConf = withPWA({
	sw: "service-worker.js",
	dest: "public",
	register: true,
	skipWaiting: true,
	importScripts: ["https://js.pusher.com/beams/service-worker.js"],
	cacheOnFrontEndNav: true,
	disable: process.env.NODE_ENV === "development",
})(nextConfig);

const vanillaConf = createVanillaExtractPlugin()(nextConfig);
const webpackPwa = pwaConf.webpack;
const webpackVanilla = vanillaConf.webpack;

const webpack = (config, options) => {
	// Grab the existing rule that handles SVG imports
	const fileLoaderRule = config.module.rules.find((rule) =>
		rule.test?.test?.(".svg"),
	);

	config.module.rules.push(
		// Reapply the existing rule, but only for svg imports ending in ?url
		{
			...fileLoaderRule,
			test: /\.svg$/i,
			resourceQuery: /url/, // *.svg?url
		},
		// Convert all other *.svg imports to React components
		{
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			resourceQuery: { not: /url/ }, // exclude if *.svg?url
			use: ["@svgr/webpack"],
		},
	);

	// Modify the file loader rule to ignore *.svg, since we have it handled now.
	fileLoaderRule.exclude = /\.svg$/i;

	config = webpackVanilla(config, options);
	return webpackPwa(config, options);
};

const finalConfig = Object.assign({}, pwaConf, vanillaConf);

// async function rewrites() {
// 	return {
// 		beforeFiles: [
// 			{
// 				source: "/app/:path*",
// 				destination: `${process.env.NEXT_PUBLIC_APP_BACKEND_HOST}/:path*`,
// 			},
// 		],
// 	};
// }

finalConfig.webpack = webpack;
// finalConfig.rewrites = rewrites;

// ------------------------------------------------------------------------------

module.exports = finalConfig;

// ------------------------------------------------------------------------------


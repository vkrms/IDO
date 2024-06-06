import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import  withPWA from "next-pwa";
import { types } from "util";

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
	typescript: {
		ignoreBuildErrors: true,
	},
	transpilePackages: [
		"@pusher/push-notifications-web",
		'mui-tel-input',
	],
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

		//html loader
		{
			test: /\.html$/i,
			issuer: /\.[jt]sx?$/,
			use: ["html-loader"],
		}
	);

	// Modify the file loader rule to ignore *.svg, since we have it handled now.
	fileLoaderRule.exclude = /\.svg$/i;

	config = webpackVanilla(config, options);
	return webpackPwa(config, options);
};

const finalConfig = Object.assign({}, pwaConf, vanillaConf);

finalConfig.webpack = webpack;

// ------------------------------------------------------------------------------

export default finalConfig;

// ------------------------------------------------------------------------------


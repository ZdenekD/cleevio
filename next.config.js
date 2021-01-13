module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            exclude: /node_modules|vendor/,
            use: [{loader: '@svgr/webpack'}],
        });

        return config;
    },
    env: {
        API: process.env.API,
        TOKEN: process.env.TOKEN,
    },
    poweredByHeader: false,
};

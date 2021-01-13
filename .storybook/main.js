module.exports = {
    stories: ['../src/**/*.stories.js'],
    addons: [
        '@storybook/addon-storysource',
        '@storybook/addon-viewport/register',
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
    ],
    webpackFinal: async config => {
        config.module.rules = config.module.rules.map(rule => rule.test.toString().search('svg') > 0
            ? {
                ...rule,
                test: RegExp(rule.test.toString().replace('svg|', '').replace(/\//g, '')),
            }
            : rule
        );

        config.module.rules.push({
            test: /\.svg$/,
            exclude: /node_modules|vendor/,
            use: [{loader: '@svgr/webpack'}],
        });

        return config;
    }
};

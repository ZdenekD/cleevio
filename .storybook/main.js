const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.js'],
    addons: [
        '@storybook/addon-storysource',
        '@storybook/addon-viewport/register',
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
    ],
};

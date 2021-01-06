import {addDecorator, addParameters} from '@storybook/react';
import React from 'react';

const viewports = {
    320: {
        name: '320',
        styles: {
            width: '320px',
            height: '640px',
        },
    },
    640: {
        name: '640',
        styles: {
            width: '640px',
            height: '768px',
        },
    },
    960: {
        name: '960',
        styles: {
            width: '960px',
            height: '768px',
        },
    },
    1280: {
        name: '1280',
        styles: {
            width: '1280px',
            height: '1024px',
        },
    },
};

addDecorator(storyFn => <>{storyFn()}</>);
addParameters({viewport: {viewports}});

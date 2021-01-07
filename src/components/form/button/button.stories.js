import Button from './button';

export default {title: 'Components/Form/Button'};

export const base = () => (<Button>Content</Button>);

export const disabled = () => (<Button disabled>Content</Button>);

export const plus = () => (<Button icon="plus">Content</Button>);

export const arrow = () => (<Button icon="arrow">Content</Button>);

export const loading = () => (<Button icon="loader">Content</Button>);

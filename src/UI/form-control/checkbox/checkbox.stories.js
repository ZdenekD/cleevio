import Checkbox from '.';

export default {title: 'UI/FormControl/Checkbox'};

export const base = () => (
    <>
        <Checkbox name="checkbox" label="Label" />
        <Checkbox checked name="checkbox" label="Label" />
    </>
);

export const disabled = () => (
    <>
        <Checkbox disabled name="checkbox" label="Label" />
        <Checkbox disabled checked name="checkbox" label="Label" />
    </>
);

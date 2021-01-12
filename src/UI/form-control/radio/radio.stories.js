import Radio from '.';

export default {title: 'UI/FormControl/Radio'};

export const base = () => (
    <>
        <Radio name="radio" label="Label" />
        <Radio name="radio" label="Label" />
        <Radio checked name="radio" label="Label" />
    </>
);

export const disabled = () => (
    <>
        <Radio disabled name="radio" label="Label" />
        <Radio disabled checked name="radio" label="Label" />
    </>
);

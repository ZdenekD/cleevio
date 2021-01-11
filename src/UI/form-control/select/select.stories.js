import Select from '.';

const data = [
    {
        value: 'value1',
        label: 'Value 1',
    },
    {
        value: 'value2',
        label: 'Value 2',
    },
    {
        value: 'value3',
        label: 'Value 3',
    },
];

export default {title: 'UI/FormControl/Select'};

export const base = () => (
    <Select name="Select" data={data} />
);

export const disabled = () => (
    <Select disabled name="Select" data={data} />
);

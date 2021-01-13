import Input from '.';

export default {title: 'UI/FormControl/Input'};

export const base = () => (
    <Input name="input" label="Input" placeholder="Type here ..." />
);

export const error = () => (
    <Input
        name="input"
        label="Input"
        value="Text value"
        error="This is some error message"
    />
);

export const disabled = () => (
    <Input disabled name="input" label="Input" value="Text value" />
);

import Input from '../form-control/input';

export default {title: 'UI/Datepicker'};

export const base = () => (
    <Input
        required
        name="Datepicker"
        label="Date"
        type="date"
    />
);

export const disabled = () => (
    <Input
        required
        disabled
        name="Datepicker"
        label="Date"
        type="date"
        value={new Date()}
    />
);

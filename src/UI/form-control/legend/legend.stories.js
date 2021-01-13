import Legend from '.';
import Checkbox from '../checkbox';

export default {title: 'UI/FormControl/Legend'};

export const base = () => (
    <>
        <Legend>Label for group of components</Legend>
        <Checkbox name="checkbox1" label="I'm checkbox no. 1" />
        <Checkbox name="checkbox2" label="I born like a checkbox" />
    </>
);

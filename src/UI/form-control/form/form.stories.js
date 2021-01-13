import Form from '.';
import Fieldset from '../fieldset';
import Input from '../input';
import Checkbox from '../checkbox';
import Radio from '../radio';
import Legend from '../legend';

export default {title: 'UI/FormControl/Form'};

export const base = () => (
    <Form>
        <Fieldset>
            <Input name="input" label="Input" />
        </Fieldset>
        <Fieldset>
            <Legend>Checkboxes</Legend>
            <Checkbox name="checkbox" label="Check me" />
            <Checkbox name="better_checkbox" label="No, check me" />
            <Checkbox name="best" label="I'm the best, check me" />
        </Fieldset>
        <Fieldset>
            <Legend>Radios</Legend>
            <Radio name="radio" label="Hello" />
            <Radio name="radio" label="World" />
        </Fieldset>
    </Form>
);

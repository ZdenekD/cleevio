import Fieldset from '.';
import Input from '../input';

export default {title: 'UI/FormControl/Fieldset'};

export const Base = () => (
    <>
        <Fieldset>
            <Input name="input" label="Input" />
            <Input name="another_input" label="Another input" placeholder="Type here ..." />
        </Fieldset>
        <Fieldset>
            <Input name="just_another_input" label="Input" />
            <Input name="last_input" label="Last input" placeholder="Type here ..." />
        </Fieldset>
    </>
);

import {useForm} from 'react-hook-form';
import Form from '..';
import Fieldset from '../../../UI/form-control/fieldset';
import Input from '../../../UI/form-control/input';
import Button from '../../../UI/form-control/button';

const TripForm = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Fieldset>
                <Input
                    ref={register}
                    name="start_date"
                    label="Start date"
                    type="date"
                />
                <Input
                    ref={register}
                    name="end_date"
                    label="End data"
                    type="date"
                />
            </Fieldset>
            <Fieldset>
                <Input
                    ref={register}
                    name="company_name"
                    label="Company name"
                />
                <Input
                    ref={register}
                    name="city"
                    label="City"
                />
                <Input
                    ref={register}
                    name="street"
                    label="Street"
                />
                <Input
                    ref={register}
                    name="zip"
                    label="Zip code"
                />
            </Fieldset>
            <Button type="submit">Save</Button>
        </Form>
    );
};

export default TripForm;

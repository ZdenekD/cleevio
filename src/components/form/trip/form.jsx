import React from 'react';
import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';
import useFetch from '../../../hooks/useFetch';
import create from '../../../api/trip/create';
import Form from '..';
import Message from '../../../UI/message';
import Fieldset from '../../../UI/form-control/fieldset';
import Legend from '../../../UI/form-control/legend';
import Select from '../../../UI/form-control/select';
import Input from '../../../UI/form-control/input';
import Radio from '../../../UI/form-control/radio';
import Button from '../../../UI/form-control/button';
import regex from '../../../helpers/regex';

const Submit = styled.div`
    width: 100%;
    margin-top: auto;
    padding: 1rem 0 3rem;
    display: flex;
    justify-content: center;
    border-top: 1px solid var(--color-gray-lighten-4);

    button {
        width: 100%;
        max-width: 200px;
    }
`;
const ToggleSection = styled.div`
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--color-gray-lighten-3);
`;
const TripForm = ({data}) => {
    const [countriesList, setCountriesList] = React.useState([]);
    const [isSend, setSend] = React.useState(false);
    const [country, setCountry] = React.useState();
    const {data: countries, error} = useFetch(countriesList.length < 1 ? 'country' : null);
    const {register, errors, handleSubmit, watch, setValue} = useForm({mode: 'onBlur'});
    const isOpen = watch('covid') === 'Yes';
    const handleCountryChange = value => {
        setCountry(value.label);
    };
    const onSubmit = async values => {
        const body = {
            start_date: values.start_date,
            end_date: values.end_date,
            company_name: values.company_name || '',
            address: {
                street: values.street || '',
                city: values.city || '',
                country: country || '',
                zip: values.zip || '',
            },
            covid: values.covid === 'Yes',
            covid_test_date: values.covid_test_date || '',
        };

        setSend(true);
        await create(body);
        setSend(false);
    };

    React.useEffect(() => {
        if (data) {
            setValue('start_date', data.start_date);
            setValue('end_date', data.end_date);
            setValue('company_name', data.company_name);
            setValue('city', data.address.city);
            setValue('street', data.address.street);
            setValue('zip', data.address.zip);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    React.useEffect(() => {
        if (countries?.length > 0) {
            setCountriesList(countries);
        }
    }, [countries]);

    return (
        <>
            {error && (<Message isOpen variant="danger">{error}</Message>)}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Fieldset>
                    <Legend required>Where do you want to go?</Legend>
                    <Select
                        name="country"
                        label="Choose a country"
                        data={countriesList}
                        defaultLabel="Select country ..."
                        variant='flags'
                        disabled={isSend}
                        onChange={handleCountryChange}
                    />
                </Fieldset>
                <Fieldset>
                    <Input
                        ref={register({
                            reguired: {
                                value: true,
                                message: 'Start date is required field',
                            },
                        })}
                        required
                        name="start_date"
                        label="Start date"
                        type="date"
                        disabled={isSend}
                        error={errors.start_date?.message}
                    />
                    <Input
                        ref={register({
                            reguired: {
                                value: true,
                                message: 'End date is required field',
                            },
                        })}
                        required
                        name="end_date"
                        label="End data"
                        type="date"
                        disabled={isSend}
                        error={errors.end_date?.message}
                    />
                </Fieldset>
                <Fieldset>
                    <Input
                        ref={register({
                            minLength: {
                                value: 2,
                                message: 'Minimum length of the value is 2',
                            },
                            pattern: {
                                value: regex.text,
                                message: 'There is some invalid characters in the field',
                            },
                        })}
                        name="company_name"
                        label="Company name"
                        placeholder="Type here ..."
                        disabled={isSend}
                        error={errors.company_name?.message}
                    />
                    <Input
                        ref={register({
                            reguired: {
                                value: true,
                                message: 'City is required field',
                            },
                            minLength: {
                                value: 2,
                                message: 'Minimum length of the value is 2',
                            },
                            pattern: {
                                value: regex.text,
                                message: 'There is some invalid characters in the field',
                            },
                        })}
                        required
                        name="city"
                        label="City"
                        placeholder="Type here ..."
                        disabled={isSend}
                        error={errors.city?.message}
                    />
                    <Input
                        ref={register({
                            reguired: {
                                value: true,
                                message: 'Street is required field',
                            },
                            minLength: {
                                value: 5,
                                message: 'Minimum length of the value is 5',
                            },
                            pattern: {
                                value: regex.text,
                                message: 'There is some invalid characters in the field',
                            },
                        })}
                        required
                        name="street"
                        label="Street"
                        placeholder="Type here ..."
                        disabled={isSend}
                        error={errors.street?.message}
                    />
                    <Input
                        ref={register({
                            pattern: {
                                value: regex.zip,
                                message: 'There is some invalid characters in the field. Valid format is e.g. 12345 or 123 45',
                            },
                        })}
                        name="zip"
                        label="Zip code"
                        placeholder="Type here ..."
                        disabled={isSend}
                        error={errors.zip?.message}
                    />
                </Fieldset>
                <Fieldset>
                    <Legend required>
                        Have you been recently tested for <strong>COVID-19</strong>?
                    </Legend>
                    <Radio ref={register} required name="covid" label="Yes" disabled={isSend} />
                    <Radio ref={register} required name="covid" label="No" disabled={isSend} />

                    {isOpen && (
                        <ToggleSection>
                            <Input
                                ref={register}
                                name="covid_test_date"
                                label="Date of receiving test results"
                                type="date"
                                disabled={isSend}
                                error={errors.covid_test_date?.message}
                            />
                        </ToggleSection>
                    )}
                </Fieldset>
                <Submit>
                    <Button type="submit" icon={isSend ? 'loader' : 'check'} disabled={isSend}>Save</Button>
                </Submit>
            </Form>
        </>
    );
};

TripForm.propTypes = {data: PropTypes.object};

export default TripForm;

import React from 'react';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';
import {useForm, Controller} from 'react-hook-form';
import styled from 'styled-components';
import useFetch from '../../../hooks/useFetch';
import create from '../../../api/trip/create';
import update from '../../../api/trip/update';
import Form from '../../../UI/form-control/form';
import Alert from '../../../UI/alert';
import Fieldset from '../../../UI/form-control/fieldset';
import Legend from '../../../UI/form-control/legend';
import Select from '../../../UI/form-control/select';
import Input from '../../../UI/form-control/input';
import Radio from '../../../UI/form-control/radio';
import Button from '../../../UI/form-control/button';
import regex from '../../../helpers/regex';
import formatDate from '../../../helpers/formatDate';

const Submit = styled.div`
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    border-top: 1px solid var(--color-gray-lighten-4);

    @media (min-width: 300px) {
        padding: 1rem 0;
    }

    @media (min-width: 900px) {
        padding-bottom: 3rem;
    }

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
const TripForm = ({data, variant = 'create'}) => {
    const [countriesList, setCountriesList] = React.useState([]);
    const [isDisabled, setDisabled] = React.useState(false);
    const {data: countries, error} = useFetch(countriesList.length < 1 ? 'country' : null);
    const router = useRouter();
    const {query} = useRouter();
    const {register, errors, control, handleSubmit, watch, setValue} = useForm({mode: 'onBlur'});
    const isOpen = watch('covid') === 'Yes';
    const getCountryCode = value => countriesList.find(country => country.label === value);
    const onSubmit = async values => {
        setDisabled(true);

        const body = {
            start_date: values.start_date,
            end_date: values.end_date,
            company_name: values.company_name || '',
            address: {
                street: values.street || '',
                city: values.city || '',
                country: values.country || '',
                zip: values.zip || '',
            },
            covid: values.covid === 'Yes',
            covid_test_date: values.covid_test_date || '',
        };

        if (variant === 'create') {
            await create(body);
        }

        if (variant === 'update') {
            await update(query.id, body);
        }

        router.push('/');
    };

    React.useEffect(() => {
        if (data) {
            setValue('start_date', data.start_date);
            setValue('end_date', data.end_date);
            setValue('company_name', data.company_name);
            setValue('country', data.address.country);
            setValue('city', data.address.city);
            setValue('street', data.address.street);
            setValue('zip', data.address.zip);
            setValue('covid', data.covid ? 'Yes' : 'No');
            setValue('covid_test_date', data.covid_test_date);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    React.useEffect(() => {
        if (countries?.length > 0) {
            setCountriesList(countries);
        }
    }, [countries]);

    React.useEffect(() => {
        setDisabled(variant === 'view');
    }, [variant]);

    return (
        <>
            {error && (<Alert isOpen variant="danger">{error}</Alert>)}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Fieldset>
                    <Legend required>Where do you want to go?</Legend>
                    <Controller
                        name="country"
                        control={control}
                        defaultValue=""
                        rules={{
                            reguired: {
                                value: true,
                                message: 'Country is required field',
                            },
                        }}
                        render={prop => (
                            <Select
                                ref={register}
                                required
                                name="country"
                                data={countriesList}
                                defaultLabel="Select country ..."
                                variant='flags'
                                value={data && {
                                    value: getCountryCode(data?.address.country)?.value,
                                    label: data?.address.country,
                                }}
                                disabled={isDisabled}
                                onChange={value => value && prop.onChange(value.label)}
                            />
                        )}
                    />

                </Fieldset>
                <Fieldset>
                    <Controller
                        name="start_date"
                        control={control}
                        defaultValue=""
                        rules={{
                            reguired: {
                                value: true,
                                message: 'Date is required field',
                            },
                        }}
                        render={prop => (
                            <Input
                                ref={register}
                                required
                                name={prop.name}
                                label="Start date"
                                type="date"
                                value={data?.start_date}
                                disabled={isDisabled}
                                error={errors.start_date?.message}
                                onChange={value => value && prop.onChange(formatDate(value))}
                            />
                        )}
                    />
                    <Controller
                        name="end_date"
                        control={control}
                        defaultValue=""
                        rules={{
                            reguired: {
                                value: true,
                                message: 'Date is required field',
                            },
                        }}
                        render={prop => (
                            <Input
                                ref={register}
                                required
                                name={prop.name}
                                label="End date"
                                type="date"
                                value={data?.end_date}
                                disabled={isDisabled}
                                error={errors.end_date?.message}
                                onChange={value => prop.onChange(formatDate(value))}
                            />
                        )}
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
                        disabled={isDisabled}
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
                        disabled={isDisabled}
                        error={errors.city?.message}
                    />
                    <Input
                        ref={register({
                            reguired: {
                                value: true,
                                message: 'Street is required field',
                            },
                            minLength: {
                                value: 3,
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
                        disabled={isDisabled}
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
                        disabled={isDisabled}
                        error={errors.zip?.message}
                    />
                </Fieldset>
                <Fieldset>
                    <Legend required>
                        Have you been recently tested for <strong>COVID-19</strong>?
                    </Legend>
                    <Radio ref={register} required name="covid" label="Yes" disabled={isDisabled} />
                    <Radio ref={register} required name="covid" label="No" disabled={isDisabled} />

                    {isOpen && (
                        <ToggleSection>
                            <Controller
                                name="covid_test_date"
                                control={control}
                                defaultValue=""
                                rules={{
                                    reguired: {
                                        value: true,
                                        message: 'Date is required field',
                                    },
                                }}
                                render={prop => (
                                    <Input
                                        ref={register}
                                        required
                                        name={prop.name}
                                        label="Date of receiving test results"
                                        type="date"
                                        value={data?.covid_test_date}
                                        disabled={isDisabled}
                                        error={errors.covid_test_date?.message}
                                        onChange={value => value && prop.onChange(formatDate(value))}
                                    />
                                )}
                            />
                        </ToggleSection>
                    )}
                </Fieldset>
                {variant !== 'view' && (
                    <Submit>
                        <Button type="submit" icon={isDisabled ? 'loader' : 'check'} disabled={isDisabled}>Save</Button>
                    </Submit>
                )}
            </Form>
        </>
    );
};

TripForm.propTypes = {
    data: PropTypes.object,
    variant: PropTypes.oneOf([
        'create',
        'update',
        'view',
    ]),
};

export default TripForm;

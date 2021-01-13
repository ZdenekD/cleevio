import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Confirm from '../../UI/confirm';
import Button from '../../UI/form-control/button';
import remove from '../../api/trip/delete';

const truncate = css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const pipeline = css`
    position: relative;

    &::before {
        width: 1px;
        height: 1rem;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        background: var(--color-gray-lighten-3);
        content: '';
    }
`;
const Component = styled.article`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(24px, 48px) minmax(100px, 2fr) 7fr minmax(min-content, 4fr);
    grid-template-areas:
        "flag country date controls"
        "flag company address controls";
    column-gap: 1rem;
    align-items: center;
    background: var(--color-gray-lighten-5);
    border-radius: var(--border-radius);

    ${props => (props.variant === 'list' && `
        margin-top: 1rem;
        padding: 0.75rem 1rem;

        &:first-of-type {
            margin-top: 2rem;
        }
    `)}

    ${props => (props.variant === 'grid' && `
        width: 100%;
        max-width: 45vw;
        margin-bottom: 1rem;
        padding: .75rem;
        grid-template-columns: 32px auto;
        grid-template-areas:
            "flag country"
            "company company"
            "address address"
            "date date"
            "controls controls";
    `)}
`;
const Flag = styled.figure`
    grid-area: flag;

    ${props => (props.variant === 'grid') && `
        max-width: 32px;
    `}
`;
const Country = styled.div`
    padding-right: 1rem;
    grid-area: country;
    ${truncate}
    ${props => (props.variant === 'list' && pipeline)}

`;
const Date = styled.div`
    grid-area: date;
    color: var(--color-gray);
`;
const Company = styled.div`
    padding-right: 1rem;
    grid-area: company;
    ${truncate}

    ${props => (props.variant === 'list' && pipeline)}
`;
const Address = styled.address`
    grid-area: address;
    color: var(--color-gray);
    ${truncate}
`;
const Label = styled.div`
    margin-top: 1rem;
    color: var(--color-gray);
`;
const Controls = styled.div`
    display: flex;
    grid-area: controls;

    ${props => (props.variant === 'list' && `
        justify-content: flex-end;

        a {
            margin-left: 1rem;
        }
    `)}

    ${props => (props.variant === 'grid' && `
        margin-top: 1rem;
        flex-direction: column;

        a {
            margin-top: 1rem;

            &:first-of-type {
                margin-top: 0;
            }
        }
    `)}
`;
const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Trip = ({data, variant = 'list', target}) => {
    const [isConfirm, setConfirm] = React.useState(false);
    const {
        id,
        address,
        company_name: companyName,
        start_date: startDate,
        end_date: endDate,
    } = data;

    const handleConfirm = () => {
        setConfirm(true);
    };
    const handleRemove = async () => {
        await remove(id);
        setConfirm(false);
    };

    return (
        <>
            {isConfirm && (
                <Confirm isOpen>
                    <Buttons>
                        <Button onClick={handleRemove}>Yes, remove this item</Button>
                        <Button styles={'margin-left: 1rem;'} onClick={() => setConfirm(false)}>No, I don&apos;t want remove it</Button>
                    </Buttons>
                </Confirm>
            )}
            <Component variant={variant}>
                <Flag variant={variant}>
                    {address.country_code ? (
                        <Image src={`/flags/${address.country_code}.svg`} alt={`${address.country} flag`} width="48" height="48" />
                    ) : (
                        <Image src="/placeholder.svg" alt={`${address.country} flag placeholder`} width="48" height="48" />
                    )}
                </Flag>
                <Country variant={variant}><strong>{address?.country}</strong></Country>
                <Date>
                    {variant === 'grid' && (
                        <Label>Date</Label>
                    )}
                    {startDate} - {endDate}
                </Date>
                <Controls variant={variant}>
                    {variant === 'list' && (
                        <Button variant='danger' icon='trash' title="Delete this trip" onClick={handleConfirm} />
                    )}

                    {(!target || target === 'edit') && (
                        <Link href={{
                            pathname: '/trip/edit/[id]',
                            query: {id},
                        }}>
                            <Button asLink href='/trip/edit' variant='secondary' icon='edit' title="Edit trip">
                                {variant === 'grid' ? ('Edit trip') : ''}
                            </Button>
                        </Link>
                    )}

                    {(!target || target === 'view') && (
                        <Link href={{
                            pathname: '/trip/view/[id]',
                            query: {id},
                        }}>
                            <Button asLink href='/trip/view' variant='secondary' icon='arrow' title="View trip">
                                {variant === 'grid' ? ('View trip') : ''}
                            </Button>
                        </Link>
                    )}
                </Controls>
                <Company variant={variant}>
                    {variant === 'grid' && (
                        <Label>Company</Label>
                    )}
                    {companyName}
                </Company>
                <Address>{address?.city} | {address?.street}, {address?.zip}</Address>
            </Component>
        </>
    );
};

Trip.propTypes = {
    data: PropTypes.object,
    variant: PropTypes.oneOf(['list', 'grid']),
    target: PropTypes.oneOf(['edit', 'view']),
};

export default Trip;

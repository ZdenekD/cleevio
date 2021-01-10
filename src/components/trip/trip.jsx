import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../UI/form-control/button';

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
const Wrapper = styled.article`
    margin-top: 2rem;
    padding: 10px 20px;
    display: grid;
    grid-template-columns: minmax(24px, 48px) minmax(min-content, 2fr) 6fr minmax(min-content, 4fr);
    grid-template-areas:
        "flag country date controls"
        "flag company address controls";
    column-gap: 1rem;
    align-items: center;
    background: var(--color-gray-lighten-5);
    border-radius: var(--border-radius);

    @media (max-width: 1200px) {
        grid-template-columns: min-content;
        grid-template-areas:
            "flag country"
            "company company"
            "address address"
            "date date"
            "controls controls"
    }
`;
const Flag = styled.figure`
    grid-area: flag;
`;
const Country = styled.div`
    padding-right: 1rem;
    grid-area: country;
    ${truncate}
    ${pipeline}
`;
const Date = styled.div`
    grid-area: date;
    color: var(--color-gray);
`;
const Company = styled.div`
    padding-right: 1rem;
    grid-area: company;
    ${truncate}
    ${pipeline}
`;
const Address = styled.address`
    grid-area: address;
    color: var(--color-gray);
    ${truncate}
`;
const Controls = styled.div`
    grid-area: controls;
`;

const Trip = ({data}) => {
    const {
        id,
        address,
        company_name: companyName,
        start_date: startDate,
        end_date: endDate,
    } = data;

    const handleDelete = () => {
        console.log('Clicked delete');
    };

    return (
        <Wrapper>
            <Flag>
                {address.country_code ? (
                    <Image src={`/flags/${address.country_code}.svg`} alt={`${address.country} flag`} width="48" height="48" />
                ) : (
                    <Image src="/placeholder.svg" alt={`${address.country} flag placeholder`} width="48" height="48" />
                )}
            </Flag>
            <Country><strong>{address?.country}</strong></Country>
            <Date>{startDate} - {endDate}</Date>
            <Controls>
                <Button icon='trash' onClick={handleDelete} />
                <Link href={{
                    pathname: '/trip/edit/[id]',
                    query: {id},
                }}>
                    <a href={`/trip/edit/${id}`}>Edit</a>
                </Link>
                <Link href={{
                    pathname: '/trip/view/[id]',
                    query: {id},
                }}>
                    <a href={`/trip/view/${id}`}>Detail</a>
                </Link>
            </Controls>
            <Company>{companyName}</Company>
            <Address>{address?.city} | {address?.street}, {address?.zip}</Address>
        </Wrapper>
    );
};

Trip.propTypes = {data: PropTypes.object};

export default Trip;

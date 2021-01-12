import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from 'styled-components';
import {components} from 'react-select';

const Flag = styled.div`
    margin-right: .5rem;
    display: flex;
    align-items: center;
`;
const Value = props => {
    const {data} = props;

    return (
        <components.SingleValue {...props}>
            <Flag>
                <Image src={`/flags/${data.value}.svg`} alt={`${data.label} flag`} width="24" height="24" />
            </Flag>
            {data.label}
        </components.SingleValue>
    );
};

Value.propTypes = {data: PropTypes.object};

export default Value;

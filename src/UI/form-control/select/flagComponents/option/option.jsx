import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from 'styled-components';
import {components} from 'react-select';

const Flag = styled.div`
    margin-right: .5rem;
    display: flex;
    align-items: center;
`;
const Option = props => {
    const {data} = props;

    return (
        <components.Option {...props}>
            <Flag>
                <Image src={`/flags/${data.value}.svg`} alt={`${data.label} flag`} width="24" height="24" />
            </Flag>
            {data.label}
        </components.Option>
    );
};

Option.propTypes = {data: PropTypes.object};

export default Option;

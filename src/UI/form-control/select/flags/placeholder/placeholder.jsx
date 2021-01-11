import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from 'styled-components';
import {components} from 'react-select';

const Flag = styled.div`
    margin-right: .5rem;
    display: flex;
    align-items: center;
`;
const Placeholder = props => {
    const {children} = props;

    return (
        <components.SingleValue {...props}>
            <Flag>
                <Image src="/globe.svg" alt="" width="22" height="22" />
            </Flag>
            {children}
        </components.SingleValue>
    );
};

Placeholder.propTypes = {children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])};

export default Placeholder;

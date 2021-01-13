import PropTypes from 'prop-types';
import styled from 'styled-components';

const Component = styled.span`
    margin-bottom: 1rem;
    display: block;
    color: var(--color-black);
`;
const Required = styled.span`
    display: inline-block;
    vertical-align: sup;
    color: var(--color-red-lighten-3);
    font-size: .75rem;
`;
const Legend = ({children, required}) => (
    <Component>
        {children} {required && (<Required>*</Required>)}
    </Component>
);

Legend.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
    required: PropTypes.bool,
};

export default Legend;

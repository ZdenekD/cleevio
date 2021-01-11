import PropTypes from 'prop-types';
import styled from 'styled-components';

const Component = styled.aside`
    padding: 2rem 2rem 0;
    border-left: 1px solid var(--color-gray-lighten-4);

    p {
        margin-bottom: 2rem;
        color: var(--color-gray);
    }
`;
const Aside = ({children}) => (
    <Component>
        {children}
    </Component>
);

Aside.propTypes = {children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])};

export default Aside;

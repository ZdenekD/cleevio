import PropTypes from 'prop-types';
import styled from 'styled-components';

const Component = styled.fieldset`
    width: 100%;
    max-width: 680px;
    margin-top: 1rem;
    padding: 1rem;
    background-color: var(--color-gray-lighten-5);
    transition: background 0.2s ease-in-out;
    border-radius: var(--border-radius);

    &:focus-within,
    &:hover {
        background-color: var(--color-gray-lighten-4);
        transition: background 0.3s ease-in-out;
    }

    &:first-of-type {
        margin-top: 2rem;
    }

    &:last-of-type {
        margin-bottom: 2rem;
    }
`;
const Fieldset = ({children}) => (
    <Component>
        {children}
    </Component>
);

Fieldset.propTypes = {children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])};

export default Fieldset;

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.fieldset`
    margin-top: 1rem;
    padding: 1rem;
    background-color: var(--color-gray-lighten-5);
    transition: background 0.2s ease-in-out;
    border-radius: 10px;

    &:focus-within,
    &:hover {
        background-color: var(--color-gray-lighten-4);
        transition: background 0.3s ease-in-out;
    }
`;

const Fieldset = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);

Fieldset.propTypes = {children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])};

export default Fieldset;

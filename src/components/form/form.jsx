import PropTypes from 'prop-types';
import styled from 'styled-components';

const Component = styled.form`
    width: 100%;
    max-width: 680px;
    min-height: 100%;
    margin: 0 auto;
`;

const Form = ({children, onSubmit}) => (
    <Component onSubmit={onSubmit}>
        {children}
    </Component>
);

Form.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
    onSubmit: PropTypes.func,
};

export default Form;

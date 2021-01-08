import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.aside`
    padding: 2rem 2rem 0;
    border-left: 1px solid #f1f1f2;

    p {
        margin-bottom: 2rem;
        color: #63666a;
    }
`;

const Aside = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);

Aside.propTypes = {children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])};

export default Aside;

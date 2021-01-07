import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.aside`
    padding: 36px;
    border-left: 1px solid #f1f1f2;

    h2 {
        margin-bottom: 36px;
        font-size: 24px;
        line-height: 36px;
    }

    p {
        margin-bottom: 2rem;
        color: #63666a;
    }
`;

const Aside = ({title, children}) => (
    <Wrapper>
        <h2>{title}</h2>
        {children}
    </Wrapper>
);

Aside.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

export default Aside;

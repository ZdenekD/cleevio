import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
    padding: 36px 36px 0;
    display: grid;
    grid-template-rows: 84px auto;

    h1 {
        margin-bottom: 32px;
        padding-bottom: 18px;
        font-size: 24px;
        line-height: 33px;
        border-bottom: 1px solid #f1f1f2;
    }
`;

const Content = ({title, children}) => (
    <Wrapper>
        <h1>{title}</h1>
        {children}
    </Wrapper>
);

Content.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

export default Content;

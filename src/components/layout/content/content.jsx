import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
    padding: 0 2rem;
`;

const Content = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);

Content.propTypes = {children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])};

export default Content;

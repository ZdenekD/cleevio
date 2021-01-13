import PropTypes from 'prop-types';
import styled from 'styled-components';

const Component = styled.section`
    padding: 0 2rem;
    grid-area: content;
    position: relative;
`;
const Content = ({children}) => (
    <Component>
        {children}
    </Component>
);

Content.propTypes = {children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])};

export default Content;

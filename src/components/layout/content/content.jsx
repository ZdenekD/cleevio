import PropTypes from 'prop-types';
import styled from 'styled-components';

const Component = styled.section`
    padding: 2rem 2rem 0;
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

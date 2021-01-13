import PropTypes from 'prop-types';
import styled from 'styled-components';
import useWindowSize from '../../../hooks/useWindowSize';

const Component = styled.aside`
    padding: 2rem 2rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-area: aside;
    position: relative;
    border-left: 1px solid var(--color-gray-lighten-4);

    p {
        margin-bottom: 2rem;
        color: var(--color-gray);
    }
`;
const Aside = ({children}) => {
    const {width} = useWindowSize();

    return (
        <>
            {width > 1200 && (
                <Component>
                    {children}
                </Component>
            )}
        </>
    );
};

Aside.propTypes = {children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])};

export default Aside;

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Component = styled.div`
    max-width: 680px;
    padding: 1rem;
    position: fixed;
    top: 2vw;
    left: 50%;
    z-index: var(--zindex-modal);
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0,.15);
    color: var(--color-gray);
    box-shadow: 0 4px 16px rgba(0, 0, 0, .1);
    border-radius: var(--border-radius);
`;
const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--zindex-overlay);
    background: rgba(0, 0, 0, .25);
`;
const Confirm = ({
    children,
    isOpen = false,
}) => (
    <>
        {isOpen && (
            <>
                <Overlay />
                <Component>
                    {children}
                </Component>
            </>
        )}
    </>
);

Confirm.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
    isOpen: PropTypes.bool,
};

export default Confirm;

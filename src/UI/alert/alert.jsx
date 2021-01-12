import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../form-control/button';

const Component = styled.div`
    ${props => (props.variant === 'info' && `
        --alert-background: var(--color-blue-lighten-3);
        --alert-color: var(--color-blue);
        --alert-border: var(--color-blue-lighten-2);
    `) || (props.variant === 'warning' && `
        --alert-background: var(--color-yellow-lighten-3);
        --alert-color: var(--color-gray);
        --alert-border: var(--color-yellow-lighten-2);
    `) || (props.variant === 'danger' && `
        --alert-background: var(--color-red-lighten-4);
        --alert-color: var(--color-red-darken-1);
        --alert-border: var(--color-red-lighten-3);
    `)}

    min-width: 200px;
    max-width: 680px;
    padding: 1rem 2rem 1rem 1rem;
    position: fixed;
    top: 2vw;
    right: 2vw;
    z-index: var(--zindex-modal);
    background-color: var(--alert-background, var(--color-gray-lighten-3));
    color: var(--alert-color, var(--color-gray));
    border-radius: var(--border-radius);
    border: 1px solid var(--alert-border, var(--color-gray-lighten-2));
`;
const styles = `
    min-width: 2rem;
    min-height: 2rem;
    padding: 0;
    position: absolute;
    top: 5px;
    right: 0;
    color: var(--color-gray);
    font-size: 2rem;
`;
const Alert = ({
    variant,
    children,
    isOpen = false,
}) => {
    const [isOpened, setIsOpened] = React.useState(isOpen);
    const handleClick = () => {
        setIsOpened(false);
    };

    return (
        <>
            {isOpened && (
                <Component variant={variant}>
                    <Button variant="transparent" styles={styles} onClick={handleClick}>&times;</Button>
                    {children}
                </Component>
            )}
        </>
    );
};

Alert.propTypes = {
    variant: PropTypes.oneOf([
        'info',
        'warning',
        'danger',
    ]),
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
    isOpen: PropTypes.bool,
};

export default Alert;

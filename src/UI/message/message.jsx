import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../form-control/button';

const Component = styled.div`
    ${props => (props.variant === 'info' && `
        --message-background: var(--color-blue-lighten-3);
        --message-color: var(--color-blue);
    `) || (props.variant === 'warning' && `
        --message-background: var(--color-yellow-lighten-3);
        --message-color: var(--color-gray);
        --message-border: var(--color-yellow);
    `) || (props.variant === 'danger' && `
        --message-background: var(--color-red-lighten-3);
        --message-color: var(--color-red-darken-1);
    `)}

    width: 100%;
    max-width: 680px;
    margin: 1rem;
    padding: 1rem 2rem 1rem 1rem;
    position: relative;
    background-color: var(--message-background, var(--color-gray-lighten-3));
    color: var(--message-color, var(--color-gray));
    border-radius: var(--border-radius);
    border: 1px solid var(--message-border, currentColor);
`;
const styles = `
    min-width: 2rem;
    min-height: 2rem;
    padding: 0;
    position: absolute;
    top: .5rem;
    right: 0;
    color: var(--color-gray);
    font-size: 2rem;
`;
const Message = ({
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

Message.propTypes = {
    variant: PropTypes.oneOf([
        'info',
        'warning',
        'danger',
    ]),
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
    isOpen: PropTypes.bool,
};

export default Message;

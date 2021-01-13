import {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../../icon';

const Component = styled.button`
    ${props => (props.variant === 'primary' && `
        --button-background: var(--color-yellow);
        --button-hover-background: var(--color-yellow-darken-1);
        --button-outline-color: rgba(254,197,39,.5);
    `) || (props.variant === 'secondary' && `
        --button-background: var(--color-gray-lighten-4);
        --button-hover-background: var(--color-gray-lighten-2);
        --button-color: var(--color-gray);
        --button-outline-color: rgba(249,249,250,.5);
        --button-icon-color: var(--color-gray);
    `) || (props.variant === 'danger' && `
        --button-background: var(--color-red-lighten-5);
        --button-hover-background: var(--color-red-lighten-4);
        --button-outline-color: rgba(211, 57, 39, .5);
        --button-icon-color: var(--color-red);
    `) || (props.variant === 'info' && `
        --button-background: var(--color-blue);
        --button-hover-background: var(--color-blue-darken-1);
        --button-outline-color: rgba(59,130,246,.5);
        --button-disabled-color: var(--color-white);
    `) || (props.variant === 'transparent' && `
        --background-background: transparent;
        --button-hover-background: transparent;
        --button-outline-color: transparent;
    `)}
    min-width: 48px;
    min-height: 48px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--button-background);
    color: var(--button-color, rgba(0, 0, 0, 0.75));
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    text-align: left;
    cursor: pointer;
    transition-property: background-color, box-shadow;
    transition-duration: var(--transition-duration-out);
    transition-timing-function: var(--transition-timing);
    border-radius: var(--border-radius);

    ${props => (props.icon && `
        display: flex;
        justify-content: space-between;
    `)}

    &:focus {
        box-shadow: 0 0 0 4px var(--button-outline-color);
    }

    &:not([disabled]):focus,
    &:not([disabled]):hover {
        background-color: var(--button-hover-background);
        color: rgba(0, 0, 0, 1);
        transition-duration: var(--transition-duration-in);
    }

    &:disabled {
        color: var(--button-disabled-color, var(--color-gray));
        opacity: 0.5;
        pointer-events: none;
    }

    span {

        + i {
            margin-left: 15px;
        }
    }

    i {
        color: var(--button-icon-color, var(--button-color));

        svg {
            fill: var(--button-icon-color, var(--button-color));
        }
    }

    ${({styles}) => styles}
`;
const Link = styled.a`
    text-decoration: none;
`;
const Button = forwardRef(({
    type = 'button',
    disabled,
    variant = 'primary',
    title,
    icon,
    styles,
    href,
    asLink,
    children,
    onClick,
}, ref) => (
    <Component
        ref={ref}
        type={!asLink ? type : undefined}
        disabled={disabled}
        variant={variant}
        icon={icon}
        styles={styles}
        aria-label={title}
        href={href}
        as={asLink && Link}
        onClick={onClick}
    >
        {children && (
            <span>{children}</span>
        )}

        {icon && (
            <Icon variant={icon} />
        )}
    </Component>
));

Button.displayName = 'Button';

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit']),
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf([
        'primary',
        'secondary',
        'danger',
        'info',
        'transparent',
    ]),
    title: PropTypes.string,
    icon: PropTypes.oneOf([
        'plus',
        'cross',
        'arrow',
        'loader',
        'trash',
        'edit',
        'star',
        'check',
        'hamburger',
    ]),
    styles: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    href: PropTypes.string,
    asLink: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;

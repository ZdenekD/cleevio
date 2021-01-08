import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import Icon from '../../icon';

const getVariants = ({variant}) => {
    const styles = {
        primary: css`
            background-color: #f8d964;
            color: rgba(0, 0, 0, 0.75);

            &:focus {
                box-shadow: 0 0 0 4px rgba(254,197,39,.5);
            }

            &:not([disabled]):focus,
            &:not([disabled]):hover {
                background-color: #fec527;
                color: rgba(0, 0, 0, 1);
            }
        `,
        secondary: css`
            background-color: #f9f9fa;
            color: #76787b;
        `,
    };

    return styles[variant];
};

const Wrapper = styled.button`
    min-width: 200px;
    padding: 15px 20px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    text-align: left;
    cursor: pointer;
    transition-property: background color box-shadow;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    border-radius: 10px;
    ${getVariants}

    &:focus,
    &:hover {
        transition-property: background color box-shadow;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
    }

    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }

    ${props => (props.icon ? `
        display: flex;
        justify-content: space-between;
    ` : '')}

    i {
        margin-left: 20px;
    }
`;

const Button = ({
    type = 'button',
    disabled,
    variant = 'primary',
    label,
    icon,
    children,
}) => (
    <Wrapper
        type={type}
        disabled={disabled}
        variant={variant}
        icon={icon}
        aria-label={label}
    >
        {children}
        {icon && (
            <Icon type={icon} />
        )}
    </Wrapper>
);

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit']),
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['primary', 'secondary']),
    label: PropTypes.string,
    icon: PropTypes.oneOf([
        'plus',
        'arrow',
        'loader',
    ]),
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.number,
    ]),
};

export default Button;

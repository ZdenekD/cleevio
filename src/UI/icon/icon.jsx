import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import Arrow from '../../assets/images/icons/arrow.svg';
import Edit from '../../assets/images/icons/edit.svg';
import Check from '../../assets/images/icons/check.svg';
import Star from '../../assets/images/icons/star.svg';
import Trash from '../../assets/images/icons/trash.svg';
import rotate from '../../helpers/keyframes';

const getIcons = ({variant}) => {
    const styles = {
        plus: css`
            &::before,
            &::after {
                position: absolute;
                left: 50%;
                content: '';
                background-color: currentColor;
            }

            &::before {
                width: 100%;
                height: 2px;
                top: 50%;
                transform: translate(-50%, -50%);
            }

            &::after {
                width: 2px;
                height: 100%;
                top: 0;
                transform: translateX(-50%);
            }
        `,
        cross: css`
            transform: rotate(45deg);

            &::before,
            &::after {
                position: absolute;
                left: 50%;
                content: '';
                background-color: currentColor;
            }

            &::before {
                width: 100%;
                height: 2px;
                top: 50%;
                transform: translate(-50%, -50%);
            }

            &::after {
                width: 2px;
                height: 100%;
                top: 0;
                transform: translateX(-50%);
            }
        `,
        loader: css`
            animation: ${rotate} 0.8s linear infinite;
            border-radius: 50%;
            border-width: 1px 1px 0;
            border-style: solid;
            border-color: currentColor;
        `,
        hamburger: css`
            border-top: 2px solid currentColor;
            border-bottom: 2px solid currentColor;

            &::before {
                width: 100%;
                height: 2px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                content: '';
                background-color: currentColor;
            }
        `,
    };

    return styles[variant];
};

const Component = styled.i`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    ${getIcons}

    svg {
        max-width: 100%;
        max-height: 100%;
    }

    ${({styles}) => styles}
`;

const defaultStyles = `
    width: 16px;
    height: 16px;
`;

const Icon = ({variant, styles = defaultStyles}) => (
    <Component variant={variant} styles={styles}>
        {variant === 'arrow' && <Arrow />}
        {variant === 'trash' && <Trash />}
        {variant === 'edit' && <Edit />}
        {variant === 'check' && <Check />}
        {variant === 'star' && <Star />}
    </Component>
);

Icon.propTypes = {
    variant: PropTypes.oneOf([
        'plus',
        'cross',
        'arrow',
        'loader',
        'trash',
        'edit',
        'check',
        'star',
        'hamburger',
    ]),
    styles: PropTypes.string,
};

export default Icon;

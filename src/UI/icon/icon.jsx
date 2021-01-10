import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {rotate} from '../../helpers/keyframes';

const getIcons = ({type}) => {
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
        arrow: css`

        `,
        loader: css`
            animation: ${rotate} 0.8s linear infinite;
            border-radius: 50%;
            border-width: 1px 1px 0;
            border-style: solid;
            border-color: currentColor;
        `,
    };

    return styles[type];
};

const Wrapper = styled.i`
    display: block;
    position: relative;
    ${getIcons}
    ${({styles}) => styles}
`;

const defaultStyles = `
    width: 16px;
    height: 16px;
`;

const Icon = ({type, styles = defaultStyles}) => (
    <Wrapper type={type} styles={styles} />
);

Icon.propTypes = {
    type: PropTypes.oneOf([
        'plus',
        'arrow',
        'loader',
        'trash',
        'edit',
    ]),
    styles: PropTypes.string,
};

export default Icon;

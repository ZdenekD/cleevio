import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const getIcons = ({name}) => {
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
                width: 16px;
                height: 2px;
                top: 50%;
                transform: translate(-50%, -50%);
            }

            &::after {
                width: 2px;
                height: 16px;
                top: 0;
                transform: translateX(-50%);

            }
        `,
        arrow: css`

        `,
        loader: css`
            border-radius: 50%;
            border-width: 1px 1px 0;
            border-style: solid;
            border-color: currentColor;
        `,
    };

    return styles[name];
};

const Wrapper = styled.i`
    width: 16px;
    height: 16px;
    position: relative;
    ${getIcons}
`;

const Icon = ({name}) => (
    <Wrapper name={name} />
);

Icon.propTypes = {
    name: PropTypes.oneOf([
        'plus',
        'arrow',
        'loader',
    ]),
};

export default Icon;

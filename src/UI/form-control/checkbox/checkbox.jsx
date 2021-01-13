import {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useId} from 'react-id-generator';
import Icon from '../../icon';
import prefix from '../../../helpers/prefix';

const Component = styled.input`
    + i {
        width: 16px;
        height: 16px;
        margin-right: 12px;
        display: inline-flex;
        position: relative;
        appearance: none;
        background-color: var(--color-white);
        vertical-align: middle;
        transition-property: background-color border-color;
        transition-duration: var(--transition-duration-out);
        transition-timing-function: var(--transition-timing);
        cursor: pointer;
        border-radius: 4px;
        border: 1px solid var(--color-gray-lighten-1);

        svg {
            max-width: 70%;
            max-height: 70%;
            visibility: hidden;
        }
    }

    &:checked {

        + i {
            background-color: var(--color-black);
            transition-duration: var(--transition-duration-in);
            border-color: var(--color-black);

            svg {
                visibility: visible;
                fill: var(--color-white);
            }
        }
    }

    &:disabled {

        + i {
            pointer-events: none;
        }
    }
`;
const Label = styled.label`
    padding: 12px;
    display: inline-flex;
    background-color: var(--color-gray-lighten-3);
    color: var(--color-gray);
    transition-property: color background-color;
    transition-duration: var(--transition-duration-out);
    transition-timing-function: var(--transition-timing);
    cursor: pointer;
    border-radius: var(--border-radius);

    &:focus,
    &:hover {
        background-color: var(--color-gray-lighten-2);
        color: var(--color-black);
        transition-duration: var(--transition-duration-in);
    }

    &[disabled] {
        background-color: var(--color-gray-lighten-4);
        pointer-events: none;
        opacity: 0.5;
    }

    + label {
        margin-left: 1rem;
    }
`;
const Checkbox = forwardRef(({
    name,
    label,
    checked,
    required,
    disabled,
}, ref) => {
    const [id] = useId(1, prefix);

    return (
        <>
            <Label htmlFor={id} disabled={disabled}>
                <Component ref={ref} id={id} name={name} type="checkbox" checked={checked} disabled={disabled} required={required} className="_visuallyhidden" value={label} />
                <Icon variant="check" />
                {label}
            </Label>
        </>
    );
});

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default Checkbox;

import {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getId from '../../../helpers/getId';

const Component = styled.input`
    width: 16px;
    height: 16px;
    margin-right: 12px;
    padding: 2px;
    display: inline-flex;
    position: relative;
    appearance: none;
    background-color: var(--color-white);
    background-clip: content-box;
    vertical-align: middle;
    transition-property: background-color border-color;
    transition-duration: var(--transition-duration-out);
    transition-timing-function: var(--transition-timing);
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid var(--color-gray-lighten-1);

    &:checked {
        background-color: var(--color-black);
        transition-duration: var(--transition-duration-in);
        border-color: var(--color-black);
    }

    &:disabled {
        background-color: var(--color-gray-lighten-4);
        pointer-events: none;
    }
`;
const Label = styled.label`
    padding: 12px;
    background-color: var(--color-gray-lighten-5);
    color: var(--color-gray);
    transition-property: color background-color;
    transition-duration: var(--transition-duration-out);
    transition-timing-function: var(--transition-timing);
    cursor: pointer;
    border-radius: var(--border-radius);

    &:focus,
    &:hover {
        background-color: var(--color-gray-lighten-4);
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

const Radio = forwardRef(({
    name,
    label,
    required,
    disabled,
}, ref) => {
    const id = getId();

    return (
        <>
            <Label htmlFor={id} disabled={disabled}>
                <Component ref={ref} id={id} name={name} type="radio" disabled={disabled} required={required} aria-label={label} />
                {label}
            </Label>
        </>
    );
});

Radio.displayName = 'Radio';

Radio.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default Radio;

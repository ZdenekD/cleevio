import {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useId} from 'react-id-generator';
import prefix from '../../../helpers/prefix';

const Component = styled.input`
    width: 16px;
    height: 16px;
    margin-right: 12px;
    padding: 2px;
    display: inline-block;
    position: relative;
    appearance: none;
    background-color: var(--color-white);
    vertical-align: middle;
    transition-property: background-color border-color;
    transition-duration: var(--transition-duration-out);
    transition-timing-function: var(--transition-timing);
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid var(--color-gray-lighten-1);

    &:checked {
        background-color: var(--color-black);
        background-clip: content-box;
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
    display: inline-block;
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
const Radio = forwardRef(({
    name,
    label,
    required,
    disabled,
}, ref) => {
    const [id] = useId(1, prefix);

    return (
        <>
            <Label htmlFor={id} disabled={disabled}>
                <Component ref={ref} id={id} name={name} type="radio" disabled={disabled} required={required} value={label} />
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

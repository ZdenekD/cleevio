import {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getId from '../../../helpers/getId';

const Component = styled.input`
    width: 100%;
    padding: 10px 20px;
    display: block;
    background-color: var(--color-white);
    color: var(--color-gray);
    line-height: 20px;
    transition-property: border-color box-shadow;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    border-radius: 10px;
    border: 1px solid var(--color-gray-lighten-4);

    &:focus {
        transition-property: border-color box-shadow;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
        box-shadow: 0 0 0 2px rgba(59,130,246,0.5);
    }

    &:focus,
    &:hover {
        transition-property: border-color box-shadow;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
        border-color: var(--color-gray-lighten-3);
    }

    &:disabled {
        background-color: var(--color-gray-lighten-4);
        pointer-events: none;
        border-color: var(--color-gray-lighten-2);
    }

    &::placeholder {
        color: var(--color-gray-lighten-1);
    }

    ${props => (props.hasError ? `
        &,
        &:focus,
        &:hover {
            border-color: var(--color-red);
        }

        &:focus {
            box-shadow: 0 0 0 2px rgba(211,57,39,0.5);
        }
    ` : '')}

    + label,
    + input {
        margin-top: 1rem;
    }
`;
const Label = styled.label`
        margin-bottom: 1rem;
        display: block;
        color: var(--color-black);
`;

const Input = forwardRef(({
    name,
    label,
    type = 'text',
    placeholder,
    required,
    disabled,
    hasError,
}, ref) => {
    const id = getId();

    return (
        <>
            <Label htmlFor={id}>{label}</Label>
            <Component
                ref={ref}
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                hasError={hasError}
            />
        </>
    );
});

Input.displayName = 'Input';

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    hasError: PropTypes.bool,
};

export default Input;

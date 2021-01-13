import {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useId} from 'react-id-generator';
import Datepicker from '../../datepicker';
import prefix from '../../../helpers/prefix';

const Control = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-areas:
        "label message"
        "input input";

    &:first-of-type {
        margin-top: 0;
    }
`;
const Component = styled.input`
    width: 100%;
    padding: 10px 1rem;
    display: block;
    grid-area: input;
    background-color: var(--color-white);
    color: var(--color-gray);
    line-height: 20px;
    transition-property: border-color, box-shadow;
    transition-duration: var(--transition-duration-out);
    transition-timing-function: var(--transition-timing);
    border-radius: var(--border-radius);
    border: 1px solid var(--color-gray-lighten-4);

    &:focus {
        box-shadow: 0 0 0 2px rgba(59,130,246,0.5);
    }

    &:focus,
    &:hover {
        transition-duration: var(--transition-duration-in);
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
`;
const Label = styled.label`
    margin-bottom: .5rem;
    display: block;
    grid-area: label;
    color: var(--color-black);
    line-height: 20px;
`;
const Required = styled.span`
    display: inline-block;
    vertical-align: sup;
    color: var(--color-red-lighten-2);
    font-size: .75rem;
`;
const Message = styled.span`
    display: block;
    grid-area: message;
    position: relative;
    color: var(--color-red);
    font-size: .8rem;
    line-height: 20px;
    text-align: right;
`;
const Input = forwardRef(({
    name,
    label,
    type = 'text',
    placeholder,
    value,
    required,
    disabled,
    error,
    onChange,
}, ref) => {
    const [id] = useId(1, prefix);

    return (
        <>
            <Control>
                <Label htmlFor={id}>{label} {required && (<Required>*</Required>)}</Label>

                {error && (<Message>{error}</Message>)}

                {type === 'date' && (
                    <Datepicker
                        name={name}
                        label={label}
                        value={value}
                        required={required}
                        disabled={disabled}
                        onChange={onChange}
                    />
                )}

                {type !== 'date' && (
                    <Component
                        ref={ref}
                        id={id}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        disabled={disabled}
                        hasError={error}
                    />
                )}
            </Control>
        </>
    );
});

Input.displayName = 'Input';

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;

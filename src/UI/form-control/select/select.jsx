import {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useId} from 'react-id-generator';
import Component from 'react-select';
import flagComponents from './flagComponents';
import prefix from '../../../helpers/prefix';

const styles = {
    control: (style, state) => ({
        ...style,
        minHeight: 0,
        padding: '2px 1rem',
        lineHeight: '20px',
        boxShadow: 'none',
        cursor: 'pointer',
        borderRadius: state.menuIsOpen ? 'var(--border-radius) var(--border-radius) 0 0' : 'var(--border-radius)',
        borderColor: 'var(--color-gray-lighten-3)',

        '&:hover': {boxShadow: 'none'},
    }),
    valueContainer: style => ({
        ...style,
        padding: 0,
    }),
    singleValue: style => ({
        ...style,
        margin: 0,
        display: 'flex',
        alignItems: 'center',
    }),
    input: style => ({
        ...style,
        marginLeft: '30px',
    }),
    indicatorSeparator: () => ({display: 'none'}),
    dropdownIndicator: style => ({
        ...style,
        padding: '8px 0 8px 1rem',
    }),
    menu: style => ({
        ...style,
        marginTop: 0,
        boxShadow: 'none',
        borderRadius: '0 0 var(--border-radius) var(--border-radius)',
        border: '1px solid var(--color-gray-lighten-3)',
        borderTop: 'none',
    }),
    menuList: style => ({
        ...style,
        padding: 0,
    }),
    option: (style, state) => ({
        ...style,
        padding: '.75rem 1rem',
        display: 'flex',
        alignItems: 'center',
        background: state.isSelected || state.isFocused ? 'var(--color-gray-lighten-4)' : 'var(--color-white)',
        color: 'var(--color-black)',
        transition: 'background 0.3s linear',
        cursor: 'cell',
        borderTop: '1px solid var(--color-gray-lighten-3)',

        '&:hover': {transition: 'background 0.05s linear'},

        '&:first-of-type': {borderTop: 'none'},
    }),
};
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
const Select = forwardRef(({
    name,
    label,
    defaultValue,
    required,
    disabled,
    data,
    value,
    variant = 'simple',
    onChange,
}, ref) => {
    const [id] = useId(1, prefix);
    const components = variant === 'flags' ? flagComponents : null;

    return (
        <>
            <Label htmlFor={id}>{label} {required && (<Required>*</Required>)}</Label>
            <Component
                ref={ref}
                required={required}
                id={id}
                name={name}
                label={defaultValue}
                placeholder={defaultValue}
                aria-label={defaultValue}
                options={data}
                value={value}
                styles={styles}
                isDisabled={disabled}
                components={components}
                onChange={onChange}
            />
        </>
    );
});

Select.displayName = 'Select';

Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    data: PropTypes.array,
    value: PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
    }),
    variant: PropTypes.oneOf(['simple', 'flags']),
    onChange: PropTypes.func,
};

export default Select;

import {forwardRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useId} from 'react-id-generator';
import prefix from '../../../helpers/prefix';

const Component = styled.select`
    width: 100%;
    padding: 10px 1rem;
    display: block;
    background-color: var(--color-white);
    color: var(--color-gray);
    line-height: 20px;
    transition-property: border-color box-shadow;
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
`;
const Select = forwardRef(({
    name,
    data,
    defaultLabel = 'Select',
}, ref) => {
    const [id] = useId(1, prefix);

    return (
        <>
            <Component ref={ref} name={name} id={id}>
                <option>{defaultLabel}</option>
                {data?.length > 0 && data.map(item => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </Component>
        </>
    );
});

Select.displayName = 'Select';

Select.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.array,
    defaultLabel: PropTypes.string,
};

export default Select;

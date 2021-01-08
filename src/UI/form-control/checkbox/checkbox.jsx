import PropTypes from 'prop-types';
import getId from '../../../helpers/id';

const Checkbox = ({
    name,
    label,
    required,
    disabled,
}) => {
    const id = getId();

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={name} type="checkbox" disabled={disabled} required={required} />
        </>
    );
};

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default Checkbox;

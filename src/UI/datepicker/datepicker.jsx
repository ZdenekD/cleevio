import {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {useId} from 'react-id-generator';
import DayPicker from 'react-day-picker/DayPickerInput';
import Component from './styled-components';
import prefix from '../../helpers/prefix';

const Datepicker = ({
    name,
    label,
    required,
    disabled,
    onChange,
}) => {
    const [id] = useId(1, prefix);
    const input = forwardRef((props, ref) => (
        <input {...props} ref={ref} disabled={disabled} required={required} id={id} name={name} aria-label={label} />
    ));

    input.displayName = 'DatepickerInput';

    return (
        <Component>
            <DayPicker
                fixedWeeks
                name={name}
                component={input}
                format="dd.mm.yyyy"
                firstDayOfWeek={1}
                keepFocus={false}
                placeholder = 'dd. mm. yyyy'
                onDayChange={onChange}
            />
        </Component>
    );
};

Datepicker.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Datepicker;

import styled from 'styled-components';

const Component = styled.div`
    width: 100%;
    grid-area: input;

    input {
        width: 100%;
        padding: 10px 1rem;
        display: block;
        background-color: var(--color-white);
        color: var(--color-gray);
        line-height: 20px;
        border-radius: var(--border-radius);
        border: 1px solid var(--color-gray-lighten-4);

        &:focus {
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
        }

        &:focus,
        &:hover {
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
    }

    .DayPicker {
        display: inline-block;
        background: var(--color-white);
        border: 1px solid var(--color-gray-lighten-3);
        border-top: none;
    }

    .DayPicker-wrapper {
        padding-bottom: 1em;
        position: relative;
        flex-direction: row;
        user-select: none;
    }

    .DayPicker,
    .DayPicker-wrapper,
    .DayPickerInput-Overlay {
        width: 100%;
        box-shadow: none;
        border-radius: 0 0 var(--border-radius) var(--border-radius);
    }

    .DayPicker-Months {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .DayPicker-Month {
        width: 100%;
        display: table;
        margin: 0 1em;
        margin-top: 1em;
        user-select: none;
        border-spacing: 0;
        border-collapse: collapse;
    }

    .DayPicker-NavButton {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 1em;
        display: block;
        background-color: var(--color-gray-lighten-5);
        background-position: center;
        background-size: 12px 12px;
        background-repeat: no-repeat;
        color: var(--color-gray);
        cursor: pointer;
        border-radius: var(--border-radius);

        &:hover {
            background-color: var(--color-gray-lighten-4);
        }
    }

    .DayPicker-NavButton--prev {
        margin-right: 0;
        left: 1.5em;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/
        xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/
        Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/
        atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV
        +QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB
        +C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlF
        ytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC');
    }

    .DayPicker-NavButton--next {
        right: 1.5em;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/
        xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/
        Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp
        +kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn
        +bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/
        CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDm
        KoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==');
    }

    .DayPicker-NavButton--interactionDisabled {
        display: none;
    }

    .DayPicker-Caption {
        min-height: 40px;
        margin: .5em 0;
        padding: 0 2.5em;
        display: table-caption;
        color: var(--color-gray);
        text-align: center;
    }

    .DayPicker-Caption > div {
        font-size: 1.15em;
        font-weight: bold;
    }

    .DayPicker-Weekdays {
        margin-top: 1em;
        display: table-header-group;
    }

    .DayPicker-WeekdaysRow {
        display: table-row;
    }

    .DayPicker-Weekday {
        padding: 0.5em;
        display: table-cell;
        color: var(--color-gray);
        text-align: center;
        font-size: 0.875em;
    }

    .DayPicker-Weekday abbr[title] {
        text-decoration: none;
        border-bottom: none;
    }

    .DayPicker-Body {
        display: table-row-group;
    }

    .DayPicker-Week {
        display: table-row;
    }

    .DayPicker-Day {
        padding: 0.5em;
        display: table-cell;
        vertical-align: middle;
        color: var(--color-gray);
        font-weight: bold;
        text-align: center;
        cursor: pointer;

        &:hover {
            background: transparent;
        }
    }

    .DayPicker-WeekNumber {
        display: table-cell;
        padding: 0.5em;
        min-width: 1em;
        border-right: 1px solid var(--color-gray-lighten-4);
        color: var(--color-gray);
        vertical-align: middle;
        text-align: right;
        font-size: 0.75em;
        cursor: pointer;
    }

    .DayPicker--interactionDisabled .DayPicker-Day {
        cursor: default;
    }

    .DayPicker-Footer {
        padding-top: 0.5em;
    }

    .DayPicker-Day--outside {
        opacity: .3;
        cursor: default;
    }

    .DayPicker-Day--disabled {
        color: var(--color-gray-lighten-4);
        cursor: default;
    }

    .DayPicker-Day--today {

        &::before {
            background: var(--color-gray-lighten-4);
        }
    }

    .DayPicker-Day--selected {
        color: var(--color-white);

        &::before {
            background: var(--color-black);
        }
    }

    .DayPicker-Day--today,
    .DayPicker-Day--selected {
        position: relative;
        z-index: 1;
        background: transparent;

        &::before {
            width: 32px;
            height: 32px;
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: -1;
            transform: translate(-50%, -50%);
            content: '';
            border-radius: var(--border-radius);
        }
    }

    .DayPickerInput {
        width: 100%;
        display: block;
        color: var(--color-gray);
    }


    .DayPickerInput-OverlayWrapper {
        position: relative;
    }

    .DayPickerInput-Overlay {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background: var(--color-white);
    }
`;

export default Component;


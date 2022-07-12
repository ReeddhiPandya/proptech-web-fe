import React from 'react'
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

export default function PTInput(props) {
    //  ***** props *****
    const {
        variant,
        className,
        textColor,
        label,
        disabled,
        handleOnChangeEvent,
        value,
        fullWidth,
        placeholder
    } = props


    return (
        <TextField
            variant={variant}
            className={className ? className : null}
            style={{textTransform: 'none', color: textColor}}
            disabled={disabled}
            label={label}
            value={value}
            placeholder={placeholder}
            fullWidth={fullWidth}
            onChange={handleOnChangeEvent ? handleOnChangeEvent : null}
        />
    )
}

// Default PROPS
PTInput.defaultProps = {
    variant: 'outlined',
    label: 'Text',
    disabled: false,
    placeholder: 'Fill Detail',
    value: '',
    fullWidth: false
}

// Expected PROPS
PTInput.prototypes = {
    variant: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    placeholder: PropTypes.string,
    value: PropTypes.string
}
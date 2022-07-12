import React from 'react'
import { Button } from '@mui/material'
import PropTypes from 'prop-types';
import { theme } from '../../utils/theme';

export default function PTButton(props) {
  //  ***** props *****
  const {
    variant,
    label,
    disabled,
    handleOnClickEvent,
    size,
    color,
    startIcon,
    className,
  } = props

  return (
    <Button
      variant={variant}
      disabled={disabled}
      size={size}
      className={className ? className : null}
      color={color}
      onClick={handleOnClickEvent ? handleOnClickEvent : null}
      startIcon={startIcon ? startIcon : null}
    >
      {label}
    </Button>
  )
}

// Default PROPS
PTButton.defaultProps = {
  variant: 'contained',
  label: 'Submit',
  disabled: false,
  size: 'medium',
  color: 'secondary',
}

// Expected PROPS
PTButton.prototypes = {
  variant: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string
}
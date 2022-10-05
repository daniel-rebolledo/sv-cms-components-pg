import React from 'react'
import {ButtonProps} from './Button.types'

const Button = ({label}: ButtonProps) => {

  return (
    <button>{label}</button>
  )
}

export default Button;

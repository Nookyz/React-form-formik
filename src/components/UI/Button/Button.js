import React from 'react'
import {Btn} from './Button.styled'

export const Button = props => {
  const {
    children, 
    onClick=null, 
    size='md', 
    bg,
    style=null, 
    type='button', 
    disabled=false
  } = props
  
  return (
    <Btn 
    type={type} 
    disabled={disabled}  
    bg={bg} 
    size={size} 
    onClick={onClick} 
    style={style}
    >
      {children}
    </Btn>
  )
}

import React from 'react'
import { MyInput } from './Input.styled'

export const Input = props => {
  const {
    children=null, 
    type='text', 
    name=null, 
    placeholder=null, 
    id=null, 
    value=null, 
    onChange=null, 
    onBlur=null, 
    style=null, 
    className=null 
  } = props
  return (
    <MyInput 
    type={type} 
    name={name} 
    placeholder={placeholder} 
    id={id} 
    value={value} 
    onChange={onChange} 
    onBlur={onBlur}
    style={style}
    className={className}
    >
      {children}
    </MyInput>
  )
}

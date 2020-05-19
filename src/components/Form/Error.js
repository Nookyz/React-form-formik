import React from 'react'
import styled from 'styled-components'

const Invalid = styled.span`
  color: red;
`
const Valid = styled.span`
  color: green;
`
export const Error = ({touched, errors}) => {
  
  if(touched && errors){
    return <Invalid>{errors}</Invalid>
  }
  if(touched && !errors){
    return <Valid>Good</Valid>
  }
  return null
}


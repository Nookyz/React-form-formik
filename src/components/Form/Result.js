import React from 'react'
import { Button } from '../UI/Button/Button'
import { MyForm } from './Form.styled'

export const Result = ({form}) => {
  return (
    <MyForm>
      <h1 style={{color: '#c3c3c3'}}>Result</h1>  
      <p>country: {form.name}</p>
      <p>email: {form.email}</p>
      <p>password: {form.password}</p>
      <p>firstName: {form.firstName}</p>
      <p>lastName: {form.lastName}</p>   
      <p>city: {form.country}</p>
      <Button 
      onClick={()=> alert(JSON.stringify(form))}
      style={{width: '100%', marginTop: '10px'}}
      >
        Alert
      </Button>
    </MyForm>
  )
}

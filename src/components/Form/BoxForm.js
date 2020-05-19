import React, { useState } from 'react'
import { MyBox } from './BoxForm.styled'
import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Nav } from '../Nav/Nav'
import { Result } from './Result'

export const BoxForm = () => {

  const [step, setStep] = useState(1)
  const [form, setForm] = useState([])

  const nextStep = () => setStep(step + 1)

  switch(step){
    case 1: 
      return(
        <MyBox>
          <Nav step={step}/>
          <Step1 
          nextStep={nextStep} 
          setForm={setForm}
          />
        </MyBox>
      )
    case 2: 
      return(
        <MyBox>
          <Nav step={step}/>
          <Step2 
          nextStep={nextStep}
          setForm={setForm} 
          />
        </MyBox>
      )
    case 3: 
      return(
        <MyBox>
          <Nav step={step}/>
          <Result form={form}/>
        </MyBox>
        
      )
    default:
      return(
        <h1>Error</h1>
      )
  }
}

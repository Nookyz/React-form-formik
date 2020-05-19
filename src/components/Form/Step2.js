import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { MyForm } from './Form.styled'
import { Button } from '../UI/Button/Button'
import { Input } from '../UI/Input/Input';
import { Error } from './Error'

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, 'Минимальное имя 1 символ')
    .max(255,'Должно быть короче 255 символов')
    .required('Введите имя'),
  lastName: Yup.string()
    .min(1, 'Минимальное имя 1 символ')
    .max(255,'Должно быть короче 255 символов')
    .required('Введите фамилию'),
  country: Yup.string()
    .min(1, 'Минимальный значение 1 символов')
    .max(255,'Должно быть короче 255 символов')
    .required('Введите страну')
})



export const Step2 = props => {
  const {nextStep, setForm} = props

  const funcClass = (touched, error) => {
    const cls = []

    if(touched && !error){
      cls.push('input-valid')
    }else if(touched && error){
      cls.push('input-error')
    }
    
    return cls.join(' ')
  }

  return (
    <MyForm>
      <Formik 
      initialValues={{firstName: '', lastName: '', country: ''}}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        
        setForm(state =>({
          ...state,
          ...values
        }))
        nextStep()
        
      }}
      >
        {({
          values, 
          errors, 
          touched, 
          handleChange, 
          handleBlur,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='firstName'>FirstName:</label>
              <Input 
              type='text' 
              name='firstName' 
              placeholder='firstName'
              id='firstName'
              value={values.firstName} 
              onChange={handleChange}
              onBlur={handleBlur}      
              className={funcClass(touched.firstName, errors.firstName)}
              />
              <Error touched={touched.firstName} errors={errors.firstName}/>
            </div>
            
            <div>
              <label htmlFor='lastName'>LastName:</label>
              <Input 
              type='text' 
              name='lastName' 
              placeholder='lastName'
              id='lastName'
              value={values.lastName} 
              onChange={handleChange}
              onBlur={handleBlur}                       
              className={funcClass(touched.lastName, errors.lastName)}
              />
              <Error touched={touched.lastName} errors={errors.lastName}/>
            </div>

            <div>
              <label htmlFor='country'>Country:</label>
              <Input 
              type='text' 
              name='country' 
              placeholder='country'
              id='country'
              value={values.country} 
              onChange={handleChange}
              onBlur={handleBlur}            
              className={funcClass(touched.country, errors.country)}
              />
              <Error touched={touched.country} errors={errors.country}/>
            </div>
                               
            <Button 
            type='submit'
            style={{width: '100%'}}
            size='md'
            btn_style='grey'
            >
              Next
            </Button>
            
          </form>
        )}   
      </Formik>
    </MyForm>
  )
}

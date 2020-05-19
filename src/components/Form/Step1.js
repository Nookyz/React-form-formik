import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { MyForm } from './Form.styled'
import { Button } from '../UI/Button/Button'
import { Error } from './Error'
import { Input } from '../UI/Input/Input'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Минимальное имя 1 символ')
    .max(255,'Должно быть короче 255 символов')
    .required('Введите имя'),
  email: Yup.string()
    .email('Введите правильный email')
    .max(255,'Должно быть короче 255 символов')
    .required('Введите email'),
  password: Yup.string()
    .min(8, 'Минимальный пароль 8 символов')
    .max(255,'Должно быть короче 255 символов')
    .required('Введите пароль')
})

export const Step1 = props => {
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
    initialValues={{name: '', email: '', password: ''}}
    validationSchema={validationSchema}
    onSubmit={values => {
      
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
            <label htmlFor='name'>Nickname:</label>
            <Input 
            type='text' 
            name='name' 
            placeholder='nickname'
            id='name'
            value={values.name} 
            onChange={handleChange}
            onBlur={handleBlur}
            className={funcClass(touched.name, errors.name)}
            />
            <Error touched={touched.name} errors={errors.name}/>
          </div>
          
          <div>
            <label htmlFor='email'>Email:</label>
            <Input 
            type='email' 
            name='email' 
            placeholder='email'
            id='email'
            value={values.email} 
            onChange={handleChange}
            onBlur={handleBlur}                       
            className={funcClass(touched.email, errors.email)}
            />
            <Error touched={touched.email} errors={errors.email}/>
          </div>

          <div>
            <label htmlFor='password'>Password:</label>
            <Input 
            type='text' 
            name='password' 
            placeholder='password'
            id='password'
            value={values.password} 
            onChange={handleChange}
            onBlur={handleBlur}             
            className={funcClass(touched.password, errors.password)}
            />
            <Error touched={touched.password} errors={errors.password}/>
          </div>
                           
          <Button 
          type='submit'
          size='md'
          btn_style='blue'
          style={{width: '100%'}}
          >
            Next
          </Button>
          
        </form>
      )}   
    </Formik>
  </MyForm>
  )        
}
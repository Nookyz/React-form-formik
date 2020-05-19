import React from 'react'
import styled from 'styled-components'

const Navigation = styled.nav`
  
  display: flex;
  justify-content: center;
  background: #51cfc5;
  height: 40px;

  .nav__links{
    transition: all 0.3s ease 0s;
    padding: 8px 10px;
  }
  .nav__links:hover{
    color: #00CF91;
    background: pink;
    cursor: pointer;
  }
  
  .active__link{
    border-bottom: 3px solid #a771fe;
  }
  
`

export const Nav = ({step}) => {
  const clx = ['nav__links']
  
  function activeStep(){
    clx.push('active__link')
    return clx.join(' ')
  }
  
  return (
    <Navigation >
      <div href='#' className={step === 1 ? activeStep() : 'nav__links'}>Step 1</div>
      <div href='#' className={step === 2 ? activeStep() : 'nav__links'}>Step 2</div>
      <div href='#' className={step === 3 ? activeStep() : 'nav__links'}>Results</div> 
    </Navigation>
  )
}

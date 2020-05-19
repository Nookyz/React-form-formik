import styled, { css } from 'styled-components'

// colors button : blue, grey, green, yellow, red | purple=default
// size button : sm, md, lg | no-default

export const Btn = styled.button`
  
  background: rgb(167,113,254);
  color: #4400B2;
  padding: 10px 18px;
  font-size: 16px;
  border: 2px solid #DCE5E7;
  cursor: pointer;

  :hover{
    border: 2px solid rgb(167,113,254);
    background: rgb(167,113,254, 0.8);
  }

  :focus {
    outline: none;
  }
  
  ${props => props.btn_style === 'blue' && css`
    background: rgb(23,113,241);
    color: white;
    :hover{
      border: 2px solid rgb(23,113,241);
      background: rgb(23,113,241, 0.8);
    }   
  `}
  ${props => props.btn_style === 'grey' && css`
    background: rgb(128,130,133);
    color: white;
    :hover{
      border: 2px solid rgb(128,130,133);
      background: rgb(128,130,133, 0.8);
    }  
  `}
  ${props => props.btn_style === 'green' && css`
    background: rgb(0,220,125);
    color: white;
    :hover{
      border: 2px solid #00DC7D;
      background: rgb(0,220,125, 0.8);
    }   
  `}
  ${props => props.btn_style === 'yellow' && css`
    background: rgb(245,224,39);
    color: black;
    :hover{
      border: 2px solid rgb(255,214,24, 0.8);
      background: rgb(245,224,39, 0.8);
    }   
  `}
  ${props => props.btn_style === 'red' && css`
    background: rgb(248, 92, 80);
    color: white;
    :hover{
      border: 2px solid rgb(212, 45, 61, 0.7);
      background: rgb(248, 92, 80, 0.8);
    }   
  `}

  ${props => props.size === 'sm' && css`
    padding: 5px 12px;
    font-size: 14px;
    
  `}
  ${props => props.size === 'md' && css`
    padding: 10px 20px;
    font-size: 16px;    
  `}
  ${props => props.size === 'lg' && css`
    padding: 15px 28px;
    font-size: 20px;    
  `} 
`
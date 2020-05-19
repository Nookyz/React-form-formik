import styled from 'styled-components'

export const MyForm = styled.div`
  padding: 10px;

  form{
    display: grid;
    gap:10px;
  }

  h1{
    color: pink;
    text-align: center;
  }

  input{
    border: 2px solid #ccc;
    border-radius: 5px;
    width: 100%;
    margin-top: 5px;
  }

  .input-error{
    border: 2px solid red;
  }
  
  .input-valid{
    border: 2px solid green;
  }
  
`
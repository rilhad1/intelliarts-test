import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center ;
    align-items: center;
`;

export const Input = styled.input`
    border: 2px solid #CCCCCC;
    outline: none;
    padding: 2px 10px;
    width: 300px;
    height: 38px;
    border-radius: 5px;
    margin-top: 20px;

    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;

    &:focus{
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
        border: 2px solid rgba(81, 203, 238, 1);
    }
    
    &::placeholder{
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 500;
      color: #B3B3B3;
    }
`;

export const Label = styled.label`
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    margin:20px;
`;

export const ButtonSubmit = styled.button`
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;    
    font-weight: 500;
    width: 130px;
    height: 42px;
    color: #FFFFFF;
    background-color: #27CCC0;
    margin: 15px;
    cursor: pointer;
    border-radius: 5px;
    border-style: none;
    &:focus{
        outline: none;
    }
    &:hover{
        color: #27CCC0;
        background-color: #FFFFFF;
        border: 1px solid #27CCC0
    }
`;
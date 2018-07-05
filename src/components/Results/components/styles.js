import styled from 'styled-components';

export const ListDates = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: flex-star;
    background-color: white;
    margin: 10px;
    border-radius: 5px;
    width: 25%;
    padding: 20px 15px;
    box-shadow: 0px 0px 18px 1px rgba(0,0,0,0.46);
`;

export const Span = styled.span`
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #ffffff;
    padding: 3px 10px;
    margin-bottom: 10px;
    background-color: #27CCC0;
    border-radius: 20px;
    margin-left: 15px;
`;

export const Ul = styled.ul`
    min-heigh: 0;
    width: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 5px;
        margin-right: -10px;
    }
    &::-webkit-scrollbar-thumb {
        background: #565A69; 
    }
`;

export const P = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    margin: 0 auto; 
`;



export const ListProducts = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
margin:5px;

`;
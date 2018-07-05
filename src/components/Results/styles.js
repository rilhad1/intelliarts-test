import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    margin: 20px auto;
    border-radius: 5px;
    width: 80%;
    padding: 20px 15px ;
`;

export const UlDate = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
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
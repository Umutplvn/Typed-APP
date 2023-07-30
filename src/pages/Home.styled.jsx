import styled from "styled-components"


export const HomeMain =styled.div`
    background-color: ${({theme})=> theme.bgColor};
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`


export const HomeTitle = styled.h3`
    color: ${({theme})=> theme.textColor};
    text-align: center;
`
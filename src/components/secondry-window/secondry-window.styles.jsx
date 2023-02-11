import styled from "styled-components";
const mainColor = "#ede9e9";
const expenseColor = "rgba(9,100,121,1)";
const incomeColor = "rgba(111,0,255,1)"
export const SecondryContainer = styled.div`
    width: 25%;
    height: fit-content;
    margin: 0 10px;
    background-color: ${mainColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
`
export const Title = styled.div`
color: ${({ type }) => `${type === "income" ? expenseColor : incomeColor} `};
font-size: 3vw;
text-transform:capitalize;
`
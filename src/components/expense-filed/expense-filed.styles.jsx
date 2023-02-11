import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin-bottom: 30px;
`
export const Type = styled.span`
    width: 25%;
    color: ${({ color }) => `${color}`};
    font-size: 3vw;
    text-align:center;
    height:fit-content;
`
export const Balance = styled.span`
    width: 25%;
    font-size: 2vw;
    font-weight: lighter;
    height:fit-content;
`
export const Categorie = styled.span`
    width: 25%;
    text-transform: capitalize;
    font-size: 2vw;
    font-weight: lighter;
    height:fit-content;
`
export const Date = styled.span`
    width: 25%;
    font-size: 2vw;
    font-weight: lighter;
    height:fit-content;
`
export const RemoveIcon = styled.span`
    width: 3%;
    cursor: pointer;
    height:fit-content;
`
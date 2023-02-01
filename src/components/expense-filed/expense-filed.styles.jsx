import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin-bottom: 30px;
`
export const Type = styled.span`
    width: 10%;
    color: ${({ color }) => `${color}`};
    font-size:75px;
    margin-top:-30px;
`
export const Balance = styled.span`
    width: 25%;
    font-size: 40px;
    font-weight: lighter;
`
export const Categorie = styled.span`
    width: 25%;
    text-transform: capitalize;
    font-size: 40px;
    font-weight: lighter;
`
export const Date = styled.span`
    width: 30%;
    font-size: 40px;
    font-weight: lighter;
`
export const RemoveIcon = styled.span`
    width: 3%;
    cursor: pointer;
`
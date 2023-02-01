import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Type = styled.select`
padding-left: 0.75rem; 
padding-right: 1.5rem; 
font-size: 1rem;
line-height: 2rem; 
min-width: 70%; 
height: 2.5rem; 
border-radius: 0.5rem; 
border-width: 1px; 
appearance: none; 
margin-bottom: 20px;
    option{
        text-transform: capitalize;
    }
`
export const Name = styled.input`
padding-left: 0.75rem; 
padding-right: 1.5rem; 
font-size: 1rem;
line-height: 1.5rem; 
min-width: 70%;  
height: 2.5rem; 
border-radius: 0.5rem; 
border-width: 1px; 
appearance: none; 
margin-bottom: 10px;
`
export const Amount = styled.input`
padding-left: 0.75rem; 
padding-right: 1.5rem; 
font-size: 1rem;
line-height: 1.5rem; 
min-width: 70%;  
height: 2.5rem; 
border-radius: 0.5rem; 
border-width: 1px; 
appearance: none; 
margin-bottom: 10px;
`


export const Border = styled.div`
margin-left: auto;
margin-right: auto; 
background-image: linear-gradient(90deg, rgba(36,0,0,1) 0%, rgba(9,100,121,1) 44%, rgba(111,0,255,1) 100%);
border-radius: 0.25rem; 

`
export const Button = styled.button`
    width: 30%;
    padding: 20px;
    margin: 30px 0;
    font-weight: bold;
    color:rgb(29 78 216);
    border-radius: 10px;
    background-color: rgb(248 250 252);
    transition: all 0.5s ease-in-out;
    &:hover{
        transform:scale(1.2);
    }
    
`
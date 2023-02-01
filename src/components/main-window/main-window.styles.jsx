import styled, { css } from "styled-components";

const mainColor = "#ede9e9";
const mainGradiant = "linear-gradient(90deg, rgba(36,0,0,1) 0%, rgba(9,100,121,1) 44%, rgba(111,0,255,1) 100%)"
const secGradiant = css`
background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
`;
export const MainContainer = styled.div`
    min-height: 600px;
    width: 40vw;
    margin-left: 50%;
    translate: calc(-50%);
    background-color: ${mainColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
`

export const Border = styled.span`
    height: 10px;
    background: rgb(36,0,0);
    background: ${mainGradiant};
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`
export const Title = styled.span`
   ${secGradiant};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
    font-size: 80px;
`
export const SubTitle = styled.div`
    color:#7131c6; 
    text-transform: capitalize;
    font-size: 40px;
`
export const Balance = styled.span`
    color:#1fc075;
    font-size: 50px;
    margin-bottom: 30px;
`

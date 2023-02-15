import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
  margin-left: 50%;
  margin-top: 25vh;
  transform: translateX(-50%);
  
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  
  gap: 20px;
  width: 21vw;
`;
export const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 9px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  margin-bottom: 20px;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;


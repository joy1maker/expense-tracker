import styled from "styled-components";


export const AppConainer = styled.div`
    display: flex;  
    justify-content: space-around;

    @media (max-width: 768px) {
    flex-direction: column;
  }
`
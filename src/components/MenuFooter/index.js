import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MenuFooter(){
  return(
    <BoxFooter>
      <Link to="/habitos">
        <StyledLink>Hábitos</StyledLink>
      </Link>
      <Link to="/historico"> 
        <StyledLink>Histórico</StyledLink>
      </Link>
      <Link to="/hoje"> 
        <StyledLink>Hoje</StyledLink>
      </Link>
    </BoxFooter>
  );
}

const BoxFooter = styled.div`
  width: 100%;
  height: 70px;

  background-color: #FFFFFF;

  display: flex;
  

  position: fixed;
  bottom:0;
  z-index: 5;
`;
const StyledLink = styled.p`
  font-size:18px;
  color: #52B6FF;

`;
import styled from "styled-components";

export default function MenuFooter(){
  return(
    <BoxFooter>
      <StyledLink>Hábitos</StyledLink>
      <StyledLink>Histórico</StyledLink>

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
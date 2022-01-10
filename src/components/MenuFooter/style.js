import styled from "styled-components";
const BoxFooter = styled.div`
  width: 100%;
  height: 70px;

  background-color: #FFFFFF;

  display: flex;
  justify-content: space-around;
  align-items: center;
  

  position: fixed;
  bottom:0;
  z-index: 5;

  text-decoration: none;
  div:nth-child(2){
    width:91px;
    height:91px;

    margin-bottom:50px;
  }
  
`;
const StyledLink = styled.button`
  font-size:18px;
  color: #52B6FF;

  background-color: #FFFFFF;

  border: 0px;

  text-decoration:none;

  &:hover{
    cursor:pointer;
  }

`;
export {BoxFooter, StyledLink};
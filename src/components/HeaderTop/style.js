import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 70px;

  padding: 20px;

  background-color: #126BA5;

  box-shadow: 0px 4px 4px 0px #00000026;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 5;
  img{
    width: 51px;
    height: 51px;

    border-radius: 50%;
  }
`;

export default Header;
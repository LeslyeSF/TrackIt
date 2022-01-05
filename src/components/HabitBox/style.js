import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 91px;

  padding: 13px 15px 15px 15px;

  border-radius: 5px;

  background-color: #FFFFFF;

  position: relative;

  p{
    font-size: 20px;
    color: #666666;

    line-height: 25px;
  }

`;
const SectionDays = styled.div`
  display: flex;
  gap: 4px;

  margin: 8px 0px 8px 0px;

  div{
    width: 30px;
    height: 30px;

    background-color: #FFFFFF;

    border: 1px solid #D4D4D4;
    border-radius: 5px;

    font-size: 20px;
    color: #DBDBDB;
    text-align: center;
  }
`;

const Trash = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover{
    cursor:pointer;
  }
`;

export {Container, SectionDays, Trash};
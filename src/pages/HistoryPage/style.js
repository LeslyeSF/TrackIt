import styled from "styled-components";
const History = styled.div`
  width: 375px;
  min-height: 100%;

  padding: 98px 17px 0px 17px;

  background-color: #F2F2F2;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const Title = styled.div`
  width: 100%;

  font-size: 23px;
  color: #126BA5;

`;
const TextInfo = styled.p`
  margin: 10px 0px 10px 0px;

  font-size: 18px;
  color: #666666;
`;
export {History, Title, TextInfo};
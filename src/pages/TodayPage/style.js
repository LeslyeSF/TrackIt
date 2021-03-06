import styled from "styled-components";
const Today = styled.div`
  width: 375px;
  min-height: 100%;

  padding: 98px 17px 100px 17px;

  background-color: #F2F2F2;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;
const Title = styled.div`
  width: 100%;

  font-size: 23px;
  
  p:nth-child(1){
    color: #126BA5;
  }
  p:nth-child(2){
    font-size: 18px;
    color: ${props => props.habitCompleted ? "#8FC549" : "#BABABA"};
  }
`;
const SectionCheck = styled.div`
  width:100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export {Today, Title, SectionCheck};
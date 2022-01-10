import styled from "styled-components";
const ListHabitsPage = styled.div`
  width: 100%;
  height: 100%;

  background: transparent;

  display:flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
`;
const ListScreen = styled.div`
  width: 270px;
  min-height: 300px;

  padding: 10px 20px 10px 20px;

  background-color: #FFFFFF;

  border-radius: 5px;
  border: 1px solid #52B6FF;

  position: relative;
`;
const Title = styled.p`
  color: #666666;
  font-size:25px;
  text-align: center;
  text-decoration: underline;
`;
const ListItem = styled.li`
  font-size: 20px;
  color: #126BA5;

  margin: 10px 0px 0px 0px;

  span{
    color:${props => props.done ? "#8FC549" : "#E75766"};
  }
`;
const Back = styled.div`
  color: #FF0000;
  font-weight: 900;

  position: absolute;
  top: 10px;
  right: 20px;

  &:hover{
    cursor:pointer;
  }
`;
export {ListHabitsPage, ListScreen, Title, ListItem, Back};
import styled from "styled-components";
const Habits = styled.div`
  width: 375px;
  min-height: 100%;

  padding: 98px 17px 75px 17px;

  background-color: #F2F2F2;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const MyHabits = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 23px;
  color: #126BA5;

  button{
    width: 40px;
    height: 35px;

    background-color: #52B6FF;

    border: 0px;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 27px;
    color: #FFFFFF;
  }

  button:hover{
    cursor:pointer;
  }
`;
const TextInfo = styled.p`
  margin: 10px 0px 10px 0px;

  font-size: 18px;
  color: #666666;
`;
export {Habits, MyHabits, TextInfo};
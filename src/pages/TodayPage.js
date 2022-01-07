import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

import CheckHabit from "../components/CheckHabit";
import HeaderTop from "../components/HeaderTop";
import MenuFooter from "../components/MenuFooter";
import UserContext from "../contexts/UserContext";

export default function TodayPage(){
  const { userData } = useContext(UserContext);
  
  const [habits, setHabits] = useState([]);
  const [listHabits, setlistHabits] = useState([]);
  let navigate = useNavigate();
  
  useEffect(()=>{
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",{
      headers:{
        "Authorization": `Bearer ${userData.token}`
      }
    });

    promise.then((answer)=>{
      setHabits(answer.data);
    });

    promise.catch((error)=>{
      navigate("/");
    });
  },[]);

  //if(habits.length !== 0){
    
  //} else{
//    setlistHabits(
  //  <TextInfo>
    //  Você não tem nenhum hábito cadastrado para hoje!
    //</TextInfo>);
  //}


  return(
    <Today>
      <HeaderTop imgProfile={userData.image}/>
      <Title habitCompleted={false}>
        <p>Segunda, 17/05</p>
        {habits.length !== 0 ? <p>Nenhum hábito concluído ainda</p> :""}
      </Title>
      <SectionCheck>
        {habits.map((data, index)=> 
      <CheckHabit key={data.id}>
        {index}
        {data.id}
        {data.name}
        {data.done}
        {data.currentSequence}
        {data.highestSequence}
        {habits}
        {setHabits}
      </CheckHabit>
    )}
      </SectionCheck>
      
      <MenuFooter/>
    </Today>
  );
}
const Today = styled.div`
  width: 375px;
  min-height: 100%;

  padding: 98px 17px 0px 17px;

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
const TextInfo = styled.p`
  margin: 10px 0px 10px 0px;

  font-size: 18px;
  color: #666666;
`;

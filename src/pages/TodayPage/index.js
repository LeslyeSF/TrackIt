import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import dayjs from 'dayjs';

import {Today, Title, SectionCheck} from "./style";
import CheckHabit from "../../components/CheckHabit";
import HeaderTop from "../../components/HeaderTop";
import MenuFooter from "../../components/MenuFooter";
import UserContext from "../../contexts/UserContext";

export default function TodayPage(){
  const { userData, dailyPercentage, setDailyPercentage } = useContext(UserContext);
  
  const [habits, setHabits] = useState([]);
  let nameDay;
  let navigate = useNavigate();

  let percentage = habits.length;
  if(percentage !== 0){
    let count = 0;
    percentage = 100/percentage;
    for(let i = 0; i<habits.length; i++){
      if(habits[i].done){
        count++;
      }
    }
    percentage = percentage*count;
    setDailyPercentage(percentage);
  }
  
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
  
  switch (dayjs().day()) {
    case 1:
      nameDay= "Segunda";
      break;

    case 2:
      nameDay= "Terça";
      break;

    case 3:
      nameDay= "Quarta";
      break;

    case 4:
      nameDay= "Quinta";
      break;

    case 5:
      nameDay= "Sexta";
      break;

    case 6:
      nameDay= "Sábado";
      break;

    case 0:
      nameDay= "Domingo";
      break;
  
    default:
      break;
  }
  
 

  return(
    <Today>
      <HeaderTop imgProfile={userData.image}/>
      <Title habitCompleted={false}>
        <p>{nameDay}, {dayjs().date()}/{dayjs().month() + 1}</p>
        {habits.length === 0 ? 
        <p>Você não tem nenhum hábito para hoje</p> : 
        dailyPercentage === 0 ?
        <p>Nenhum hábito concluído ainda</p> : 
        <p>{dailyPercentage.toFixed(0)}% dos hábitos concluídos</p>}
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

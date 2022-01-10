import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import CalendarHistory from "../../components/CalendarHistory";

import HeaderTop from "../../components/HeaderTop";
import MenuFooter from "../../components/MenuFooter";
import UserContext from "../../contexts/UserContext";
import { History, Title } from "./style";

export default function HistoryPage(){
  const {userData} = useContext(UserContext);

  const [historyHabits, setHistoryHabits] = useState("");
  let navigate = useNavigate();

  useEffect(()=>{
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily",{
      headers:{
        "Authorization": `Bearer ${userData.token}`
      }
    });

    promise.then((answer)=>{
      setHistoryHabits(answer.data);
    });
    
    promise.catch(()=>{
      toast.error("Erro ao carregar historico de habitos!");
      navigate("/");
    });
    
  },[]);

  return(
    <History>
      <HeaderTop imgProfile={userData.image}/>
      <Title>
        <p>Histórico</p>
      </Title>
      <CalendarHistory dateHistory={historyHabits}/>
      <MenuFooter/>
    </History>
  );
}

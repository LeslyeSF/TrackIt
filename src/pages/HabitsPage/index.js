import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import {Habits, MyHabits, TextInfo} from "./style";
import FormHabit from "../../components/FormHabit";
import HabitBox from "../../components/HabitBox";
import HeaderTop from "../../components/HeaderTop";
import Loading from "../../components/Loading";
import MenuFooter from "../../components/MenuFooter";
import UserContext from "../../contexts/UserContext";

export default function HabitsPage(){
  const { userData } = useContext(UserContext);
  
  const [listHabits, setListHabits] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(Request,[]);
  
  function handleShowForm(){
    if(!showForm){
      setShowForm(!showForm);
    }
  }

  function Request(){
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",{
      headers:{
        "Authorization": `Bearer ${userData.token}`
      }
    });

    promise.then((answer)=>{
      if(answer.data.length !== 0){
        setListHabits(answer.data.map((habit)=>
          <HabitBox 
          key={habit.id} 
          id={habit.id}
          name={habit.name} 
          days={habit.days}
          Request={Request}/>
        ));
      }else{
        setListHabits(()=>
          <TextInfo>
            Você não tem nenhum hábito cadastrado ainda. 
            Adicione um hábito para começar a trackear!
          </TextInfo>
        );
      }

      setLoading(false);
    });

    promise.catch(()=>{
      navigate("/");
    });
  }
  
  return(
    <Habits>
      <HeaderTop imgProfile={userData.image}/>
      <MyHabits>
        <p>Meus hábitos</p>
        <button type="button" onClick={handleShowForm}>+</button>
      </MyHabits>

      {showForm ? <FormHabit showForm={showForm} setShowForm={setShowForm} Request={Request}/>:""}
      {loading ? <Loading width={100} height={15}/> : listHabits}
      
      <MenuFooter/>
    </Habits>
  );
}

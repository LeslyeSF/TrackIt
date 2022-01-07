import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

import FormHabit from "../components/FormHabit";
import HabitBox from "../components/HabitBox";
import HeaderTop from "../components/HeaderTop";
import Loading from "../components/Loading";
import MenuFooter from "../components/MenuFooter";
import UserContext from "../contexts/UserContext";

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

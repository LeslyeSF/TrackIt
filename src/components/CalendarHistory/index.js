import dayjs from "dayjs";
import { useState } from "react";
import Calendar from "react-calendar";
import ListHabits from "../ListHabits";

import CalendarStyle from "./style";

export default function CalendarHistory({dateHistory}){
  const [habitsDay, setHabitsDay] = useState(null);

  let daysHabits =[];


  for(let i=0;i<dateHistory.length; i++){
    let allDone = true;
    for(let j=0;j<dateHistory[i].habits.length; j++){
      if(!dateHistory[i].habits[j].done){
        allDone = false;
      }
    }
    const day = {
      date: dateHistory[i].habits[0].date,
      dateSimple: dateHistory[i].day,
      habits: dateHistory[i].habits,
      allDone: allDone
    };
    daysHabits.push(day);
  }
    

  function SetClass(dateCalendar){
    const findDay = daysHabits.find((day) => {
        return (
          dateCalendar.getDay() === new Date(day.date).getDay() &&
          dateCalendar.getMonth() === new Date(day.date).getMonth() &&
          dateCalendar.getDate() === new Date(day.date).getDate()
        );
      });

      return !findDay ? "" : findDay.allDone ? "completeGoal" : "incompleteGoal";
  }

  function ShowHabits(dateCalendar){
    const findDay = daysHabits.find((day) => {
      return (
        dateCalendar.getDay() === new Date(day.date).getDay() &&
        dateCalendar.getMonth() === new Date(day.date).getMonth() &&
        dateCalendar.getDate() === new Date(day.date).getDate()
      );
    });

    setHabitsDay(findDay);
    
  }

  return(
    <>
      <CalendarStyle />
      <Calendar 
      tileClassName={({ activeStartDate, date, view }) => SetClass(date)} 
      formatDay={(locale, date) => dayjs(date).format("DD")}
      onClickDay={(value, event) => ShowHabits(value)}/>
      {habitsDay ? <ListHabits habitsDay={habitsDay} setHabitsDay={setHabitsDay}/> :""} 
    </>
  );
}

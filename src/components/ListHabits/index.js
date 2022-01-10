import {ListHabitsPage, ListScreen, Title, ListItem, Back} from "./style";

export default function ListHabits({habitsDay, setHabitsDay}){
  const list = habitsDay.habits.map((date)=> 
    <ListItem done={date.done}>
      {date.name}. <br/>
      <span>{(date.done) ? "Hábito concluído" : "Hábito não concluído"}</span>
    </ListItem>
  );
  return(
    <ListHabitsPage>
      <ListScreen>
        <Title>{habitsDay.dateSimple}</Title>
        {list}
        <Back onClick={()=> setHabitsDay(null)}>X</Back>
      </ListScreen>

    </ListHabitsPage>
  );
}

import { useContext, useState } from "react";

import { DivForm, SectionDays, Day, Options } from "./style";
import dataDays from "./data";
import { toast } from "react-toastify";
import Loading from "../Loading";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

export default function FormHabit({showForm, setShowForm, Request}){
  const { userData } = useContext(UserContext);

  const [ nameHabit, setNameHabiit ] = useState("");
  const [ listDays, setListDays ] = useState(dataDays);
  const [ disabledForm, setDisabledForm ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  
  function handleShowForm(){
    if(showForm){
      setShowForm(!showForm);
    }
  }

  function handleSaveHabit(){

    let days = listDays.filter((data)=> data.selected);

    if(nameHabit ===""){

      toast.error("Insira um nome para o hábito");

    } else if(days.length === 0){

      toast.error("Selecione um dia para o hábito");

    } else{

      setDisabledForm(true);
      setLoading(true);

      days = days.map((data)=> data.day);
      const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",{
        name: nameHabit,
        days: days
      }, {
        headers:{
          "Authorization": `Bearer ${userData.token}`
        }
      });

      promise.then((answer)=>{
        handleShowForm();

        for(let i =0;i<listDays.length;i++){
          listDays[i].selected=false;
        }
        setListDays([...listDays]);
        Request();
      });

      promise.catch((error)=>{
        toast.error("Cadastro deu errado!");
        setDisabledForm(false);
        setLoading(false);
      });
      
    }
  }

  function handleSelect(day){
    listDays[day-1].selected = !(listDays[day-1].selected);
    setListDays([...listDays]);
  }

  return(
    <DivForm>
      <input type="text" placeholder="nome do hábito" value={nameHabit} onChange={e => setNameHabiit(e.target.value)} disabled={disabledForm}/>
      <SectionDays>
        {listDays.map(data => 
          <Day 
          disabled={disabledForm}
          onClick={()=> handleSelect(data.day)} 
          selected={data.selected}
          key={data.day}>
            {data.name}
          </Day>
        )}
      </SectionDays>

      <Options>
        <button onClick={handleShowForm} disabled={disabledForm}>Cancelar</button>
        <button onClick={handleSaveHabit} disabled={disabledForm}>
          {loading ? <Loading width={50} height={15}/> : "Salvar"}
        </button>
      </Options>
    </DivForm>
  );
}

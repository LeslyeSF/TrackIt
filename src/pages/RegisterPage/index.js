import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"; 

import Register from "./style";
import Logo from "../../components/Logo";
import Loading from "../../components/Loading";

export default function RegisterPage(){
  const [form, setForm] = useState({
    email:"",
    name:"",
    image:"",
    password:""
  });
  const [disabledForm, setDisabledForm] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  let navigate = useNavigate();

  function handleInputForm(e,type){
    if(type==="email"){
      form.email= e.target.value;
    }else if(type==="password"){
      form.password=e.target.value;
    } else if(type==="name"){
      form.name= e.target.value;
    } else{
      form.image=e.target.value;
    }
    setForm({...form});
  }
  
  function handleRegister(e){
    e.preventDefault();
    setDisabledForm(true);
    setLoadingState(true);

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", 
      form);

    promise.then(()=>{
      toast.success("Cadastro realizado com sucesso!");
      navigate("/");
    });

    promise.catch((error)=>{
      console.log(error.response.data);
      setDisabledForm(false);
      toast.error("Falha no cadastro!");
      setLoadingState(false);
    });
    
    
  }

  return(
    <Register>
      <Logo type="main"/>
        <form onSubmit={handleRegister}>
          <input 
          type="email" placeholder="email" value={form.email} onChange={e=> handleInputForm(e,"email")} disabled={disabledForm} required/>
          <input type="password" placeholder="senha" value={form.password} onChange={e=> handleInputForm(e,"password")} disabled={disabledForm} required/>
          <input type="text" placeholder="nome" value={form.name} onChange={e=> handleInputForm(e,"name")} disabled={disabledForm} required/>
          <input type="text" placeholder="foto" value={form.image} onChange={e=> handleInputForm(e,"photo")} disabled={disabledForm} required/>
          <button type="submit" disabled={disabledForm}>
            {loadingState ? <Loading width={100} height={15}/> : "Cadastrar"}
          </button>
        </form>
        <Link to="/">
          <p>Já tem conta? Faça login!</p>
        </Link>
        
    </Register> 
  );
}


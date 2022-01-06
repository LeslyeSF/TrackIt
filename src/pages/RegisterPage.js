import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"; 

import Logo from "../components/Logo";

export default function RegisterPage(){
  const [form, setForm] = useState({
    email:"",
    name:"",
    image:"",
    password:""
  });
  const [stateForm, setStateForm] = useState("");
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
    setStateForm("true");

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", 
      form);

    promise.then(()=>{
      toast.success("Cadastro realizado com sucesso!");
      navigate("/");
    });

    promise.catch(()=>{
      setStateForm("");
      toast.error("Falha no cadastro!");
    });
    
    
  }

  return(
    <Register>
      <Logo type="main"/>
        <form onSubmit={handleRegister}>
          <input 
          type="email" placeholder="email" value={form.email} onChange={e=> handleInputForm(e,"email")} disabled={stateForm} required/>
          <input type="password" placeholder="senha" value={form.password} onChange={e=> handleInputForm(e,"password")} disabled={stateForm} required/>
          <input type="text" placeholder="nome" value={form.name} onChange={e=> handleInputForm(e,"name")} disabled={stateForm} required/>
          <input type="text" placeholder="foto" value={form.image} onChange={e=> handleInputForm(e,"photo")} disabled={stateForm} required/>
          <button type="submit" disabled={stateForm}>Cadastrar</button>
        </form>
        <Link to="/">
          <p>Já tem conta? Faça login!</p>
        </Link>
        
    </Register> 
  );
}

const Register = styled.div`
  width: 375px;
  min-height: 100%;

  padding: 70px 30px 0px 30px;

  background-color: #FFFFFF;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;

    input{
      width: 300px;
      height: 45px;

      background-color: #FFFFFF;

      padding: 9px 11px 9px 11px;

      border: 1px solid #D4D4D4;
      border-radius: 5px;

      font-size: 20px;
      color: #666666;
    }

    input::placeholder{
      color: #DBDBDB;
    }

    input:focus{
      box-shadow: 0 0 0 0;
      outline: 0;
    }

    input:disabled{
      background: #F2F2F2;
    }

    button{
      width: 300px;
      height: 45px;

      background-color: #52B6FF;

      border: 1px solid #D4D4D4;
      border-radius: 5px;

      font-size: 21px;
      color: #FFFFFF;

      opacity:1;
    }

    button:hover{
      cursor:pointer;
    }
    
    button:disabled{
      opacity: 0.7;
    }
    
  }

  p{
    font-size: 14px;
    color: #52B6FF;

    text-decoration: underline;
  }
`;
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"; 

import Login from "./style";
import Logo from "../../components/Logo";
import Loading from "../../components/Loading";
import UserContext from "../../contexts/UserContext";

export default function LoginPage(){
  const { setUserData } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledForm, setDisabledForm] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  let navigate = useNavigate();


  useEffect(()=>{
    const tokenLocalStorage = localStorage.getItem("trackitToken");
    if(tokenLocalStorage !== null){
      const user = {
        name: localStorage.getItem("trackitName"),
        image: localStorage.getItem("trackitImage"),
        token: localStorage.getItem("trackitToken")
      }
      setUserData(user);
      navigate("/hoje");
    }
  },[]);

  function handleLogin(e){
    e.preventDefault();
    setDisabledForm(true);
    setLoadingState(true);

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      {
        email: email,
        password: password
      });

    promise.then((answer)=>{
      const user = {
        name: answer.data.name,
        image: answer.data.image,
        token: answer.data.token
      }
      localStorage.setItem("trackitName", user.name);
      localStorage.setItem("trackitImage", user.image);
      localStorage.setItem("trackitToken", user.token);
      setUserData(user);

      navigate("/hoje");
    });

    promise.catch(()=>{
      toast.error("Falha no login!");
      setDisabledForm(false);
      setLoadingState(false);
    });

  }

  return(
    <Login>
      <Logo type="main"/>
      <form onSubmit={handleLogin}>
        <input 
        type="email" 
        placeholder="email" 
        value={email} 
        onChange={e=> setEmail(e.target.value)} d
        isabled={disabledForm} 
        required/>
        <input 
        type="password" 
        placeholder="senha" 
        value={password} 
        onChange={e=> setPassword(e.target.value)} 
        disabled={disabledForm} 
        required/>
        
        <button type="submit" disabled={disabledForm}>
          {loadingState ? <Loading width={100} height={15}/> : "Entar"}
        </button>
      </form>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Login>
  );
}


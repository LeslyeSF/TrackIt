import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"; 


import Logo from "../components/Logo";
import Loading from "../components/Loading";
import UserContext from "../contexts/UserContext";

export default function LoginPage(){
  const { setUserData } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledForm, setDisabledForm] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  let navigate = useNavigate();

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
      setUserData(answer.data);
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
        <input type="email" placeholder="email" value={email} onChange={e=> setEmail(e.target.value)} disabled={disabledForm} required/>
        <input type="password" placeholder="senha" value={password} onChange={e=> setPassword(e.target.value)} disabled={disabledForm} required/>
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

const Login = styled.div`
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
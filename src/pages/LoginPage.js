import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../components/Logo";

export default function LoginPage(){
  return(
    <Login>
      <Logo type="main"/>
      <form>
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="senha"/>
        <Link to="/habitos">
        <button type="submit">Entrar</button>
        </Link>
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
  }

  p{
    font-size: 14px;
    color: #52B6FF;

    text-decoration: underline;
  }
`;
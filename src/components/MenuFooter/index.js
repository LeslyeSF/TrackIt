import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function MenuFooter(){
  const { dailyPercentage } = useContext(UserContext);
  return(
    <BoxFooter>
      <Link to="/habitos">
        <StyledLink>Hábitos</StyledLink>
      </Link>
      <Link to="/historico"> 
        <StyledLink>Histórico</StyledLink>
      </Link>
      <div>
        <Link to="/hoje"> 
        <CircularProgressbar
          value={dailyPercentage}
          text={"Hoje"}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#52B6FF",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"
          })}
        />
        </Link>
      </div>
      
    </BoxFooter>
  );
}

const BoxFooter = styled.div`
  width: 100%;
  height: 70px;

  background-color: #FFFFFF;

  display: flex;
  justify-content: space-around;
  align-items: center;
  

  position: fixed;
  bottom:0;
  z-index: 5;

  text-decoration: none;

  div{
    width:91px;
    height:91px;
  }
`;
const StyledLink = styled.div`
  font-size:18px;
  color: #52B6FF;

`;
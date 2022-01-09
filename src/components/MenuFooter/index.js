import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useContext } from "react";

import {BoxFooter, StyledLink} from "./style";
import UserContext from "../../contexts/UserContext";

export default function MenuFooter(){
  const { dailyPercentage } = useContext(UserContext);
  return(
    <BoxFooter>
      <Link to="/habitos">
        <StyledLink>
          <p>Hábitos</p>
        </StyledLink>
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
      <Link to="/historico"> 
        <StyledLink>Histórico</StyledLink>
      </Link>     
    </BoxFooter>
  );
}


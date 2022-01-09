import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

export default function CheckHabit(props){
  const [index,id, name, done, currentSequence, highestSequence, habits, setHabits] = props.children;
  const { userData } = useContext(UserContext);

  function Check(){
    let promise;
    if(done){
      promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,{},{
        headers:{
          "Authorization": `Bearer ${userData.token}`
        }
      });

    } else{
      promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,{},{
        headers:{
          "Authorization": `Bearer ${userData.token}`
        }
      });
    }


      promise.then(()=>{
        habits[index].done = !(habits[index].done);
        setHabits([...habits]);
      });
      promise.catch((erro)=>{
        toast.error("Falha ao fazer a checagem");
      });
    

  }
  return(
    <Container>
      <p>{name}</p>
      <Info done={done} currentSequence={currentSequence} highestSequence={highestSequence}>
        <p>Sequência atual: <span>{currentSequence} dia(s)</span></p>
        <p>Seu recorde: <span>{highestSequence} dia(s)</span></p>
      </Info>
      <BoxCheck done={done} onClick={Check}>
        <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.5686 0.956629C30.1694 0.350274 30.9857 0.00637472 31.8392 8.77323e-05C32.6928 -0.00619925 33.5141 0.325638 34.1237 0.923077C34.7333 1.52052 35.0816 2.33498 35.0926 3.18846C35.1035 4.04195 34.7761 4.86506 34.182 5.4779L16.9915 26.9682C16.6962 27.2862 16.3398 27.5413 15.9437 27.7185C15.5476 27.8957 15.1198 27.9912 14.6859 27.9994C14.252 28.0076 13.821 27.9283 13.4184 27.7662C13.0159 27.6041 12.6502 27.3625 12.3431 27.0559L0.945601 15.6628C0.339937 15.0569 -0.000205509 14.2351 9.31541e-08 13.3784C0.000205695 12.5216 0.340743 11.7001 0.946698 11.0944C1.55265 10.4887 2.37439 10.1486 3.23113 10.1488C4.08788 10.149 4.90945 10.4895 5.51511 11.0955L14.5292 20.1117L29.4831 1.05749C29.5103 1.02282 29.5396 0.989868 29.5708 0.958822L29.5686 0.956629Z" fill="white"/>
        </svg>
      </BoxCheck>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 94px;

  padding: 13px 15px 13px 15px;

  background-color: #FFFFFF;

  border-radius: 5px;

  font-size: 20px;
  color: #666666;

  line-height: 25px;

  position:relative;
`;

const Info = styled.div`
  margin-top: 7px;

  font-size: 13px;

  line-height: 16px;

  p:nth-child(1){
    span{
      color:${props => (props.done) ? "#8FC549" : "#666666"} ;
    }
  }
  p:nth-child(2){
    span{
      color:${props => (props.highestSequence === props.currentSequence) ? "#8FC549" : "#666666"} ;
    }
  }
`;

const BoxCheck = styled.div`
  width: 69px;
  height: 69px;

  border-radius: 5px;

  background-color: ${props => props.done ? "#8FC549":"#EBEBEB"};

  position: absolute;
  top: 13px;
  right: 13px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover{
    cursor:pointer;
  }
`;
import { useContext } from "react";
import Calendar from 'react-calendar'

import HeaderTop from "../../components/HeaderTop";
import MenuFooter from "../../components/MenuFooter";
import UserContext from "../../contexts/UserContext";
import { History, Title, TextInfo } from "./style";

export default function HistoryPage(){
  const {userData} = useContext(UserContext);
  return(
    <History>
      <HeaderTop imgProfile={userData.image}/>
      <Title>
        <p>Histórico</p>
      </Title>
      <Calendar/>
      <MenuFooter/>
    </History>
  );
}

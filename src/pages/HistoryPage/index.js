import HeaderTop from "../../components/HeaderTop";
import MenuFooter from "../../components/MenuFooter";
import { History, Title, TextInfo } from "./style";

export default function HistoryPage(){
  return(
    <History>
      <HeaderTop/>
      <Title>
        <p>Histórico</p>
      </Title>
      <TextInfo>
        Em breve você poderá ver o histórico dos seus hábitos aqui!
      </TextInfo>
      <MenuFooter/>
    </History>
  );
}

import Logo from "../Logo";
import Header from "./style";

export default function HeaderTop({imgProfile}){
  return(
    <Header>
      <Logo type="header"/>
      <img src={imgProfile}/>            
    </Header>
  );
}

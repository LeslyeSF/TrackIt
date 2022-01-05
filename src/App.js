import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./css/CSSreset.css";
import "./css/style.css";
import HabitsPage from "./pages/HabitsPage";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/cadastro" element={<RegisterPage/>}/>
        <Route path="/habitos" element={<HabitsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./css/CSSreset.css";
import "./css/style.css";

import HabitsPage from "./pages/HabitsPage";
import HistoryPage from "./pages/HistoryPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TodayPage from "./pages/TodayPage";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/cadastro" element={<RegisterPage/>}/>
        <Route path="/habitos" element={<HabitsPage/>}/>
        <Route path="/hoje" element={<TodayPage/>}/>
        <Route path="/historico" element={<HistoryPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
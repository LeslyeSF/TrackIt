import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useState } from "react";

import GlobalStyle from "./styles";
import HabitsPage from "./pages/HabitsPage";
import HistoryPage from "./pages/HistoryPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TodayPage from "./pages/TodayPage";
import UserContext from "./contexts/UserContext";

export default function App(){
  const [userData, setUserData] = useState("");
  const [dailyPercentage, setDailyPercentage] = useState(0);
  
  return(
    <UserContext.Provider value={{userData, setUserData, dailyPercentage, setDailyPercentage}}>
      <GlobalStyle/>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/cadastro" element={<RegisterPage/>}/>
          <Route path="/habitos" element={<HabitsPage/>}/>
          <Route path="/hoje" element={<TodayPage/>}/>
          <Route path="/historico" element={<HistoryPage/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
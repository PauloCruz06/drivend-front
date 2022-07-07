import {React,useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastreScreen from "./CadastreScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";

import UserContext from "../context/UserContext";

export default function App(){
    const [user, setUser] = useState({});
    return(
        <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen/>} />
                <Route path="/login" element={<LoginScreen/>} />
                <Route path="/cadastro" element={<CadastreScreen/>} />

            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    );
}
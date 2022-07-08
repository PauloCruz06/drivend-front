import {React,useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastreScreen from "./CadastreScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
<<<<<<< HEAD
import ProfileScreen from "./ProfileScreen"
=======
import MovieScreen from "./MovieScreen";
>>>>>>> 49ac94f48e078240b0d39a621f22b55af16efd7c

import UserContext from "../context/UserContext";

export default function App(){
    const [user, setUser] = useState({});
    const [cart, setCart] = useState({});

    return(
        <UserContext.Provider value={{ user, setUser, cart, setCart }}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen/>} />
                <Route path="/login" element={<LoginScreen/>} />
                <Route path="/cadastro" element={<CadastreScreen/>} />
<<<<<<< HEAD
                <Route path="/perfilusuario" element={<ProfileScreen/>} />
=======
                <Route path="/moviepage" element={<MovieScreen/>} />
>>>>>>> 49ac94f48e078240b0d39a621f22b55af16efd7c
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    );
}
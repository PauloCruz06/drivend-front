import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastreScreen from "./CadastreScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen"
import MovieScreen from "./MovieScreen";
import AddMovie from "./AddMovie";
import CartScreen from "./CartScreen";

import UserContext from "../context/UserContext";

export default function App() {
    const [user, setUser] = useState({});
    const [cart, setCart] = useState([]);

    return (
        <UserContext.Provider value={{ user, setUser, cart, setCart }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/cadastro" element={<CadastreScreen />} />
                    <Route path="/perfilusuario" element={<ProfileScreen />} />
                    <Route path="/moviepage" element={<MovieScreen />} />
                    <Route path="/adicionarproduto" element={<AddMovie />} />
                    <Route path="/cart" element={<CartScreen />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}
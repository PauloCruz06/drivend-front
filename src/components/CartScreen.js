import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";

import { BackgroundScreen, SearchList } from "./BodyHomeScreen";
import { HeaderDiv } from "./MovieHeader";
import { LogoDrivenD } from "./Header";

import UserContext from "../context/UserContext";
import logo from "../assets/images/logo.png";
import MovieStyle from "./MovieStyle";

export default function CartScreen() {
    const [loading, setLoading] = useState(false);
    const { cart } = useContext(UserContext);
    const navigate = useNavigate();

    dotenv.config();

    return(
        <BackgroundScreen>
            <HeaderDiv>
                <ion-icon
                    onClick={() => navigate(-1)}
                    name="return-up-back"
                ></ion-icon>
                <LogoDrivenD alt="logo" src={logo} />
                <ion-icon
                    onClick={() => navigate("/")}
                    name="home-sharp"
                ></ion-icon>
            </HeaderDiv>
            <SearchList>
                {cart.length > 0 ?
                    cart.map((movie, index) => (
                        <MovieStyle
                            key={index}
                            image={movie.image}
                            title={movie.title}
                            value={movie.value}
                            id={movie.productId}
                        />
                    ))
                :
                    <h1>Você não tem nenhum filme no carrinho</h1>
                }
            </SearchList>
        </BackgroundScreen>
    );
}
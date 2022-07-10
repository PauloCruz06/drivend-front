import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";

import { BackgroundScreen, SearchList } from "./BodyHomeScreen";
import { HeaderDiv } from "./MovieHeader";
import { LogoDrivenD } from "./Header";

import styled from "styled-components";
import UserContext from "../context/UserContext";
import logo from "../assets/images/logo.png";
import MovieStyle from "./MovieStyle";

export default function CartScreen() {
    const [loading, setLoading] = useState(false);
    const [totalValue, setTotalValue] = useState(0);
    const [hidden, setHidden] = useState(true);
    const { cart } = useContext(UserContext);
    const navigate = useNavigate();

    dotenv.config();

    useEffect(() => {
        let increase = 0;
        cart.forEach((movie) => (
            increase = increase + parseFloat(movie.value)
        ));
        setTotalValue(increase.toFixed(2));
    }, [cart])

    return(
        <>
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
                        <>
                            {cart.map((movie, index) => (
                                <MovieStyle
                                    key={index}
                                    image={movie.image}
                                    title={movie.title}
                                    value={movie.value}
                                    id={movie.productId}
                                />
                            ))}
                            <FinishPurchase>
                                <button onClick={() => setHidden(false)}>
                                    Finalizar Compra
                                </button>
                            </FinishPurchase>
                        </>
                    :
                        <h1>Você não tem nenhum filme no carrinho</h1>
                    }
                </SearchList>
            </BackgroundScreen>
            {hidden ?
                <></>
            :
                <Superbackground>
                    <div className="box-confirm">
                        <p>Confirme a sua compra</p>
                        <div className="check-products">
                            {cart.map((movie, index) => (
                                <div key={index}>
                                    <p className="title">{movie.title}</p>
                                    <p>R$ {movie.value}</p>
                                </div>
                            ))}
                            <div>
                                <p>TOTAL</p>
                                <p>R$ {totalValue}</p>
                            </div>
                        </div>
                        <button className="purchase">
                            Confirmar
                        </button>
                        <button onClick={() => setHidden(true)}>
                            Cancelar
                        </button>
                    </div>
                </Superbackground>
            }
        </>
    );
}

const FinishPurchase = styled.div`
    width: 100%;
    height: 92px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0px;
    left: 0px;
    > button{
        width: 280px;
        height: 52px;
        border-radius: 50px;
        border: none;
        background-color: #F25353;
        font-weight: 700;
        font-size: 20px;
        color: #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`

const Superbackground = styled.div`
    z-index: 2;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    .box-confirm{
        min-width: 280px;
        min-height: 354px;
        border: none;
        border-radius: 9px;
        box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);
        background-color: #F25353;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    p{
        min-width: 90px;
        height: 30px;
        font-weight: 700;
        font-size: 22px;
        margin-top: 21px;
    }
    .title{
        max-width: 240px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .check-products{
        width: 94%;
        min-height: 147px;
        margin-top: 28px;
        margin-bottom: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .check-products > div{
        width: 100%;
        height: 27px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: #ffffff;
        font-weight: 400;
        font-size: 22px;
    }
    .check-products > div:last-child {
        font-weight: 700;
        margin: 10px 0px 8px 0px;
    }
    button {
        min-width: 270px;
        height: 52px;
        border: none;
        border-radius: 100px;
        background-color: #F25353;
        color: #ffffff;
        font-weight: 700;
        font-size: 22px;
    }
    .purchase{
        background-color: #ffffff;
        color: #F25353;
    }
`
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";

import styled from "styled-components";
import UserContext from "../context/UserContext";

import MovieHeader from "./MovieHeader";
import { BackgroundMovieScreen } from "./BodyHomeScreen";

export default function MovieScreen() {
    const [movie, setMovie] = useState({});
    const { user, cart, setCart } = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();

    dotenv.config()

    useEffect(() => {
        const promise = axios.get(
            `${process.env.REACT_APP_URL_API}/movies?id=${location.state.id}`
        );

        promise.then((res) => {
            setMovie(res.data);
        }).catch(() => {
            alert("Não foi possível ver detalhes do filme");
            navigate("/");
        });
    }, []);

    function addCart() {
        if (!user.name) return navigate("/login");

        setCart([
            ...cart,
            {
                image: movie.image,
                title: movie.title,
                value: movie.value,
                selleremail: movie.selleremail,
                productId: movie.productId
            }
        ]);
    }

    function removeCart() {
        const newCart = cart.filter((filtermovie) =>
            location.state.id !== filtermovie.productId
        );

        setCart([...newCart]);
    }

    return (
        <BackgroundMovieScreen>
            <MovieHeader />
            <DivTitle>{movie.title}</DivTitle>
            <Image alt={movie.title} src={movie.image} />
            <Description>{movie.description}</Description>
            <Additional>
                <span>Vendedor:
                    <span className="seller">{movie.selleremail}</span>
                </span>
                <span className="price">R$ {movie.value}</span>
            </Additional>
            {cart.some((somemovie) => somemovie.productId === movie.productId) ?
                <AddCartButton onClick={removeCart}>Remover</AddCartButton>
                :
                <AddCartButton onClick={addCart}>Comprar</AddCartButton>
            }
        </BackgroundMovieScreen>
    );
}

const DivTitle = styled.div`
    width: 100%;
    height: 44px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Comic Neue', cursive;
    font-weight: 700;
    font-size: 32px;
    color: #000000;
    margin-bottom: 28px;
`
const Image = styled.img`
    width: 248px;
    height: 370px;
    object-fit: contain;
    border-radius: 5px;
    border: none;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 26px;
`
const Description = styled.p`
    width: auto;
    height: auto;
    text-align: justify;
    font-size: 14px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 21px;
`
const Additional = styled.div`
    width: 100%;
    height: 28px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
    > span{
        color: #000000;
        font-size: 14px;
        font-weight: 500;
    }
    .seller{
        color: #746A6A;
        margin-left: 3px;
    }
    .price{
        font-size: 16px;
        font-weight: 700;
    }
`
const AddCartButton = styled.button`
    width: 284px;
    height: 52px;
    background-color: #F25353;
    border-radius: 10px;
    border: none;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 24px;
    color: #FFFFFF;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`
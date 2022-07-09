import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { React, useContext, useState } from 'react';
import UserContext from "../context/UserContext";
import { ThreeDots } from 'react-loader-spinner';
import dotenv from 'dotenv';

export default function LoginScreen() {

    dotenv.config();

    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [pr, setPr] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const { user } = useContext(UserContext);
    const { token } = user;

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    function Send(event) {
        event.preventDefault();
        setIsLoading(true);
        const body = {
            title,
            value,
            director,
            year,
            genre: genre.split(" "),
            pr,
            quantity,
            selleremail: user.email,
            image,
            description
        }

        const promise = axios.post(`${process.env.REACT_APP_URL_API}/movies`, body, config);

        promise.then(() => {
            setIsLoading(false);
            navigate("/");
        }).catch((e) => {
            console.log(e);
            alert("não foi possível cadastrar filme");
            setIsLoading(false);
        });
    }

    return (
        <>
            <Header>
                <h1>Adicionar novo filme:</h1>
                <ion-icon onClick={() => navigate("/perfilusuario")} name="return-down-back-outline"></ion-icon>
            </Header>
            <Container>
                <Form background={"#ffffff"} color={"#000000"} onSubmit={Send}>
                    <input id="title" type="text" value={title} placeholder="titulo do filme" required onChange={(e) => setTitle(e.target.value)} />
                    <input id="value" type="text" pattern="^[0-9]*\.[0-9]{2}$" value={value} placeholder="valor" required onChange={(e) => setValue(e.target.value)} />
                    <input id="director" type="text" value={director} placeholder="diretor do filme" required onChange={(e) => setDirector(e.target.value)} />
                    <input id="year" type="text" value={year} pattern="^[0-9]{4}$" placeholder="ano de lançamento" required onChange={(e) => setYear(e.target.value)} />
                    <input id="genre" value={genre} placeholder="generos do filme" required onChange={(e) => setGenre(e.target.value)} />
                    <input id="pr" type="number" value={pr} placeholder="idade minima" required onChange={(e) => setPr(e.target.value)} />
                    <input id="quantity" type="number" value={quantity} placeholder="quantidade" required onChange={(e) => setQuantity(e.target.value)} />
                    <input id="image" type="url" value={image} placeholder="imagem do filme" required onChange={(e) => setImage(e.target.value)} />
                    <input id="description" type="text" value={description} placeholder="descrição" required onChange={(e) => setDescription(e.target.value)} />
                    {isLoading ?
                        <div type="submit" disabled opacity={0.7}>{<ThreeDots color={"#ffffff"} width={51} />}</div>
                        :
                        <button type="submit">Enviar entrada</button>
                    }
                </Form>
            </Container>
        </>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    input {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        height: 45px;
        margin-right: 36px;
        margin-left: 36px;
        min-width:  100px;
        margin-bottom: 6px;
        border-radius: 5px;
        border: 1px solid #D4D4D4; 
        padding-left:11px ;
        color: ${props => props.color};
        background-color: ${props => props.background};
    }
    input::placeholder {
        
        color: darkgray;
        font-size: 20px;
        font-style: italic;
    }
    button, div {
        font-family: 'Raleway';
        font-weight: 700;
        min-width: 100px;
        height: 45px;
        margin-right: 36px;
        margin-left: 36px;
        text-align: center;
        background-color: #E10E0E;
        color: #FFFFFF;
        font-size: 21px;
        border: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        a{
            text-decoration: none;
        }
    }
`
const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color:#E10E0E ;
    justify-content: space-between;
    position:fixed;
    top:0;
    right:0;
    h1{
        margin:18px; 
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
    ion-icon{
        color:white;
        margin:18px;
        width: 30px;
        height: 51px;
        border-radius: 98.5px;
    }
`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 80px;
justify-content: space-between;
font-family: 'Lexend Deca', sans-serif;
h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #8C11BE;
}
`
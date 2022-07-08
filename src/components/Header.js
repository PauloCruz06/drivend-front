import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import UserContext from "../context/UserContext";

import logo from "../assets/images/logo.png";

export default function Header({search, setSearch}){
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    function loadProfile(){
        if(user.name){
            alert("você está logado");
            console.log(user); 
        }else{
            navigate("/login");
        }
    }

    return(
        <HeaderDiv>
            <div>
                <LogoDrivenD alt="logo" src={logo}/>
            </div>
            <div className="menu">
                <ion-icon name="cart"></ion-icon>
                <InputSearch
                    className="inputsearch"
                    type="text"
                    id="search"
                    placeholder="O que você está procurando?"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <ion-icon
                    onClick={loadProfile}
                    name={user.name ? "person-outline" : "person"}
                ></ion-icon>
            </div>
        </HeaderDiv>
    );
}

const HeaderDiv = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #f25353;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1;
    > div{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .menu{
        justify-content: space-between;
    }
    ion-icon{
        width: 39px;
        height: 39px;
        color: #ffffff;
        margin: 0px 14px 0px 14px;
    }
`

const InputSearch = styled.input`
    width: 220px;
    height: 30px;
    padding: 0px 5px 0px 5px;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 5px;
    border: none;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #000000;
    ::placeholder{
        color: #A9A3A3;
    }
`
export const LogoDrivenD = styled.img`
    width: 193px;
    height: 38px;
    object-fit: contain;
`
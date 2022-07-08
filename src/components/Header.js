import styled from "styled-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from 'react';

export default function Header({search, setSearch}){

    const navigate = useNavigate();

    return(
        <HeaderDiv>
            <input
                type="text"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ion-icon onClick={()=>navigate("/perfilusuario")} name="log-out-outline"></ion-icon>    
        </HeaderDiv>
    )
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
        justify-content: space-between;
        align-items: center;
    }
    > input{
        width: 220px;
        height: 30px;
        background-color: #ffffff;
        border-radius: 5px;
        border: none;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 14px;
    }
`
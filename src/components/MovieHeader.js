import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { LogoDrivenD } from "./Header";

import logo from "../assets/images/logo.png"

export default function MovieHeader() {
    const navigate = useNavigate();

    return (
        <HeaderDiv>
            <ion-icon
                onClick={() => navigate("/cart")}
                name="cart"
            ></ion-icon>
            <LogoDrivenD alt="logo" src={logo} />
            <ion-icon
                onClick={() => navigate("/")}
                name="home-sharp"
            ></ion-icon>
        </HeaderDiv>
    );
}

export const HeaderDiv = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #f25353;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1;
    ion-icon{
        width: 39px;
        height: 39px;
        color: #ffffff;
        margin: 0px 14px 0px 14px;
    }
`
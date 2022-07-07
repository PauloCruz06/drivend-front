import React from "react";
import styled from 'styled-components';
import axios from 'axios';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from 'react';
import UserContext from "../context/UserContext";
import { ThreeDots } from "react-loader-spinner";

export default function Homepage(){

    return(

        < Container>
            <h1>ola</h1>
            
        </Container>
    )
}
const Container=styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 68px;
    
    font-family: 'Lexend Deca', sans-serif;
    
`
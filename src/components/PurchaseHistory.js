import {React,useEffect,useState,useContext} from "react";
import styled from 'styled-components';
import dayjs from "dayjs";
import locale from  "dayjs/locale/pt-br";
import axios from "axios";
import UserContext from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import dotenv from "dotenv";
import logo from "../assets/images/logo.png";

export default function Today(){
    const [useremail, setUseremail] = useState([]); 
    const navigate = useNavigate();
    
    const { user } = useContext(UserContext);
    const { name, token, photo, email } = user;
    const [movies, setMovies] = useState([]);
    const [moviesinfo, setMoviesinfo]=useState([]);
    //let moviesinfo
    let moviesfiltered
    let products=[];
    dotenv.config();
    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    useEffect(() => {
		const promise = axios.get(`${process.env.REACT_APP_URL_API}/purchases`, config);

		promise.then(resposta => {
            setMovies(resposta.data);
            let filteredmovies = resposta.data.filter(filmes=>(filmes.email===user.email));
            setMovies([...filteredmovies]);

            setMoviesinfo(filteredmovies);
            let moviesinf=filteredmovies.filter(object =>(object.products))
            ;setMoviesinfo([...products]);
		});
	}, []);
    console.log(movies);
    return(
        <>
            <Header>
                <h1>Olá, {name}!</h1>
                <div>
                    <ion-icon onClick={()=>navigate("/")} name="home-outline"></ion-icon>
                    <ion-icon onClick={()=>navigate("/login")} name="log-out-outline"></ion-icon>
                </div>     
                </Header>
            <ProfileBase>
                <img src={photo}/>
                <h1>{name}</h1>
                <h2>{email}</h2>
                <h1>
                    {movies.length>0 ? "Você comprou:" : "Você ainda não comprou nenhum produto :("}
                </h1>
            </ProfileBase>
            <ProfileSell>
                    {/* {moviesinfo.map((moviesinfo,index) => ( */}
                    {movies.map((movies,index) => (
                        
                        <PosterBox >
                                <h1>Preço: R$ {movies.price}</h1>
                                <h1>id do produto: {movies.productId}</h1>
                                <img src={movies.products[0]} />
                        </PosterBox>
                        
                    ))}

            </ProfileSell>
            
            <FooterProfile>
                <ion-icon onClick={()=>navigate("/cart")} name="cart-outline"></ion-icon>
                <LogoDrivenD onClick={()=>navigate("/")} alt="logo" src={logo}/>
            </FooterProfile>
        </>
    )
    //
}
const Header=styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color:#F25353 ;
    justify-content: space-between;
    position:fixed;
    top:0;
    right:0;
    
    h1{
        //margin:18px; 
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        margin-left: 5px;
    }
    ion-icon{
        color:white;
        margin:18px;
        width: 30px;
        height: 51px;
        border-radius: 98.5px;
    }
`
const ProfileBase=styled.div`
    margin-top: 110px;
    display: flex;
    min-height:110px;
    width: 80%;
    background-color: white;
    border-radius: 20px;
    padding: 10px;
    //box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 10px;
    h1{
        margin:5px; 
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 31px;
        color: #F25353;
    }
    h2{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        margin-top: 6px;
    }
    img{
        width: 90px;
        height: 90px;
        border-radius: 45px;
        margin-bottom: 5px;
    }

`
const ProfileSell=styled.div`
        width: 270px;
        height: auto;
        display: flex;
        margin-top: 10px;
        flex-direction: column;

`
const PosterBox = styled.div`
    max-width: 260px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color:whitesmoke;
    padding: 10px;
    margin-top: 5px;
    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        color: #F25353;
    }
    img{
        margin-top: 3px;
        border-radius: 0;
        height: 60px;
        width: auto;
    }
` ;
const FooterProfile=styled.div`
    height: 52px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    margin-top: 100px;
    bottom: 0px;
    padding: 10px;
    width: 100%;
    justify-content: space-evenly;
    position: fixed;
    ion-icon{
        font-size: 50px;
    }
`
export const LogoDrivenD = styled.img`
    width: 193px;
    height: 38px;
    object-fit: contain;
    margin-top: 8px;
`

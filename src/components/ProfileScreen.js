import {React,useEffect,useState,useContext} from "react";
import styled from 'styled-components';
import dayjs from "dayjs";
import locale from  "dayjs/locale/pt-br";
import axios from "axios";
import UserContext from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import dotenv from "dotenv";

export default function Today(){

    const navigate = useNavigate();
    
    const { user } = useContext(UserContext);
    const { name, token, photo, email } = user;
    const [movies, setMovies] = useState([]);
    
    dotenv.config();

    useEffect(() => {
		const promise = axios.get(`${process.env.REACT_APP_URL_API}/movies`);

		promise.then(resposta => {
           
                setMovies(resposta.data);
               // const userMovies = movies.filter((useremail)=>{});
           
		
		});
	}, []);

	if(movies.length ===  null) {
		return (<h1>Loading...</h1>);
	}

    
    return(
        <>
        <Header>
            <h1>Olá, usuário</h1>
            <div>
                <ion-icon onClick={()=>navigate("/")} name="home-outline"></ion-icon>
                <ion-icon onClick={()=>navigate("/cadastro")} name="log-out-outline"></ion-icon>
            </div>     
            </Header>
        <ProfileBase>
            <img src={photo}/>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <ProfileSell>
                {movies.map((movie,index) => (
                    //<Link key={index} to={`/sessoes/${movie.id}`}>
                        <PosterBox >
                            <img src={movie.image} alt={movie.title}/>
                            <h1>{movie.title}</h1>
                            <h1>R$:{Number(movie.value).toFixed(2)}</h1>
                        </PosterBox>
                    //</Link>
                ))}

            </ProfileSell>
        </ProfileBase>
        <ProfileSell></ProfileSell>
        </>
    )
 
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
const ProfileBase=styled.div`
    margin-top: 110px;
    display: flex;
    //justify-content:center;
    min-height:500px;
    width: 80%;
    background-color: white;
    border-radius: 20px;
    padding: 10px;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    h1{
        margin:18px; 
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
    }
    img{
        width: 90px;
        height: 90px;
        border-radius: 45px;
        margin-bottom: 14px;
    }

`
const ProfileSell=styled.div`

`

const PosterBox = styled.div`
    width:145px;
    //height:209px;;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    //justify-content: center;
    flex-direction: column;
    margin:10px;
    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        //line-height: 31px;
        color: #F25353;
        margin-top: 10px;
    }
    img{
        margin-top: 15px;
        border-radius: 0;
        //width:40px;
        height: 150px;;
    }
` ;
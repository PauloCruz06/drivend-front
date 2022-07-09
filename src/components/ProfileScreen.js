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
    
    dotenv.config();

    useEffect(() => {
		const promise = axios.get(`${process.env.REACT_APP_URL_API}/movies`);

		promise.then(resposta => {
            setMovies(resposta.data);
            let filteredmovies = resposta.data.filter(filmes=>(filmes.selleremail===user.email));
            //console.log(useremail);
            setUseremail([...filteredmovies]);

		});
	}, []);
  
    return(
        <>
            <Header>
                <h1>Olá, usuário!</h1>
                <div>
                    <ion-icon onClick={()=>navigate("/")} name="home-outline"></ion-icon>
                    <ion-icon onClick={()=>navigate("/cadastro")} name="log-out-outline"></ion-icon>
                </div>     
                </Header>
            <ProfileBase>
                <img src={photo}/>
                <h1>{name}</h1>
                <h2>{email}</h2>
                <h1>
                    {useremail.length>0 ? "Você vende:" : "Você ainda não vende nada :("}
                </h1>
            </ProfileBase>
            <ProfileSell>
                    {useremail.map((useremail,index) => (

                        useremail.length > 0 ?
                        (
                            <h2>Voce ainda nao inseriu nada</h2>
                        )
                        :
                        (
                        <PosterBox >
                                
                                <img src={useremail.image} alt={useremail.title}/>
                                <h1>{useremail.title}</h1>
                                <h1>R$:{Number(useremail.value).toFixed(2)}</h1>
                        </PosterBox>
                        )
                    ))}

            </ProfileSell>
            
            <Sell>
                <h1>Clique para vender mais</h1>
                <ion-icon onClick={()=>navigate("/adicionarproduto")} name="add-circle-outline"></ion-icon>
            </Sell>

            <FooterProfile>
                <ion-icon onClick={()=>navigate("/carrinho")} name="cart-outline"></ion-icon>
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
        margin:10px; 
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
        margin-bottom: 5px;
    }

`
const ProfileSell=styled.div`
        width: 270px;
        height: auto;
        display: flex;
        margin-top: 10px;
        overflow-x: scroll;
        ::-webkit-scrollbar {
            display: none;
    //width: 0px;
        }

`
const PosterBox = styled.div`
    width:220px;
    height: 180px;
    //height:209px;;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color:whitesmoke;
    padding: 10px;
    margin-top: 5px;
    margin-right:10px;
        /* width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        overflow-x: scroll;
        overflow-y: hidden; */
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
        
        border-radius: 0;
        //width:40px;
        height: 130px;
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
const Sell = styled.div`

    height: 52px;
    border-radius: 20px;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 30px;
    padding: 10px;
    h1{
        font-size: 17px;
        font-family: "Raleway";
    }
    ion-icon{
        font-size: 50px;
        color:#F25353;
    }
`
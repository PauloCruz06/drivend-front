import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import axios from "axios";
import dotenv from "dotenv";

import Header from "./Header";
import { BackgroundScreen } from "./BodyHomeScreen";
import MovieStyle from "./MovieStyle";

export default function HomeScreen(){
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    dotenv.config();

    useEffect(() => {
        loadMovies();
    }, []);

    function loadMovies(){
        setLoading(true);
        const promise = axios.get(`${process.env.REACT_APP_URL_API}/movies`);

        promise.then((res) => {
            setMovies(res.data);
            setLoading(false);
        }).catch(() =>
            alert("Não foi possível exibir filmes, tente atualizar a página")
        );
    }

    const movieListFiltered =  useMemo(() => {
        const LowerSearch = search.toLowerCase();

        return movies.filter((movie) =>
            movie.title.toLowerCase().includes(LowerSearch)
        );
    }, [movies, search]);


    return(
        <BackgroundScreen>
            <Header 
                search={search}
                setSearch={setSearch}
            />
            {loading ?
                <div>
                    Carregando
                </div>
            :
                movieListFiltered.map((movie, index) => (
                    <MovieStyle key={index} image={movie.image} title={movie.title} value={movie.value} />
                ))
            }
        </BackgroundScreen>
    );
}
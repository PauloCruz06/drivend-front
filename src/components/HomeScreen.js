import { useState, useEffect, useMemo, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import dotenv from "dotenv";
import UserContext from "../context/UserContext";
import { BackgroundScreen } from "./BodyHomeScreen";

import Header from "./Header";
import MovieStyle from "./MovieStyle";
import MovieGenreList from "./MovieGenreList";

export default function HomeScreen(){
    //const { user } = useContext(UserContext);
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [movieGenres] = useState([
        "Lançamento",
        "Drama",
        "Ação",
        "Suspense",
        "Terror",
        "Romance",
        "Aventura",
        "Clássico",
        "Documentário",
        "Show"
    ]);

    dotenv.config();

    useEffect(() => {
        loadMovies();
    }, []);

    function loadMovies(){
        const promise = axios.get(`${process.env.REACT_APP_URL_API}/movies`);

        promise.then((res) =>
            setMovies(res.data)
        ).catch(() =>
            alert("Não foi possível exibir filmes, tente atualizar a página")
        );
    }

    const movieListFiltered = useMemo(() => {
        const LowerSearch = search.toLowerCase();

        return movies.filter((movie) =>
            movie.title.toLowerCase().includes(LowerSearch) ||
            movie.genre.join(" ").toLowerCase().includes(LowerSearch) ||
            movie.director.toLowerCase().includes(LowerSearch) ||
            movie.year.includes(LowerSearch)
        );
    }, [movies, search]);

    function movieGenreFiltered(genre){
        return movies.filter((movie) =>
            movie.genre.join(" ").includes(genre)
        );
    }

    return(
        <BackgroundScreen>
            <Header 
                search={search}
                setSearch={setSearch}
            />
            {search === "" ?
                movieGenres.map((genre, index) => (
                    <MovieGenreList key={index} genre={genre} genreList={movieGenreFiltered(genre)} />
                ))
            :
                movieListFiltered.length === 0 ?
                    <NotFound> Filme não encontrado </NotFound>
            :
                movieListFiltered.map((movie, index) => (
                    <MovieStyle key={index} image={movie.image} title={movie.title} value={movie.value} />
                ))
            }
        </BackgroundScreen>
    );
}

const NotFound = styled.h1`
    width: 300px;
    height: 38px;
    margin-top: 36px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 30px;
    color: #746A6A;
    text-align: left;
`
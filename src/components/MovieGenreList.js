import styled from "styled-components";

import MovieStyle from "./MovieStyle";

export default function MovieGenreList({ genre, genreList }){
    return(
        <DivMovieList>
            <h1>{genre}</h1>
            {genreList.length !== 0 ?
                <div className="catalog">
                    {genreList.map((movie, index)=> (
                        <MovieStyle key={index} image={movie.image} title={movie.title} value={movie.value} id={movie.productId} />
                    ))}
                </div>
                :
                <h1 className="empty">Não há filmes</h1>
            }
        </DivMovieList>
    )
}

const DivMovieList = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    > h1{
        width: 183px;
        height: 33px;
        margin-bottom: 12px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 20px;
        text-align: left;
        color: #000000;
    }
    .catalog{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        overflow-x: scroll;
        overflow-y: hidden;
    }
    .empty{
        width: auto;
        height: auto;
        margin: 18px 0px 30px 0px;
        font-size: 28px;
        text-align: left;
        color: #746A6A;
    }
`
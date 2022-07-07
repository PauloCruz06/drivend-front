import styled from "styled-components";

export default function MovieStyle({image, title, value}){
    return(
        <DivMovie>
            <img alt={image} src={image} />
            <p className="title">{title}</p>
            <p className="value">R$ {value}</p>
        </DivMovie>
    );
}

const DivMovie = styled.div`
    width: 144px;
    height: 262px;
    margin: 0px 28px 30px 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    img{
        width: 100%;
        height: 216px;
        border-radius: 5px;
        border: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        object-fit: contain;
    }
    > p{
        width: 144px;
        height: 22px;
        margin-top: 7px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .title{
        font-family: 'Comic Neue', cursive;
        font-weight: 700;
        font-size: 15px;
        color: #000000;
    }
    .value{
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 14px;
        color: #000000;
    }
`
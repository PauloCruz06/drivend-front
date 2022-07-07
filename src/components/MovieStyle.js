import styled from "styled-components";

export default function MovieStyle({image, title, value}){
    return(
        <DivMovie>
            <img alt={image} src={image} />
        </DivMovie>
    );
}

const DivMovie = styled.div`
    width: 144px;
    height: 262px;
    margin-top: 200px;
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
`
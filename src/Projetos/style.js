import styled from "styled-components";

export const ContainerPro = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    margin-right: auto;
    margin-left: auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    padding-bottom: 10rem;

    & h2{
    font-family: 'DM Sans', sans-serif;
    font-size: 3vw;
    color: #F9F9F9;
    font-weight: 600;
    text-align: center;
    margin-bottom: 160px;
    }
`

export const Projetoscard = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    display: flex;
    gap: 3.75rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;


`

export const Cards = styled.div`
    &:hover {
    transform: scale(1.15);
  }
    & img {
        width: 20vw ;
        height: 20vw ;
        object-fit: cover;
    }

`
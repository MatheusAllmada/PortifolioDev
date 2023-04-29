import styled from "styled-components";

export const SelecAc = styled.section`
    padding: 0;
    border: 0;
    font: inherit;
    display: block;
    opacity: 1;    margin: 2.5rem 0 10rem 0;

`

export const SkillContainer = styled.div`
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
    align-items: center;

    & h2{
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    font-family: 'DM Sans', sans-serif;
    font-size: 3.2rem;
    color: #F9F9F9;
    font-weight: 600;
    margin-bottom: 10rem;
    }

`

export const Cards = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5rem;
`

export const CardsBox = styled.div`
    position: relative;
    text-align: center;
    background-color: #212121;
    width: 12rem;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 2.5rem;
    cursor: pointer;
    
    &:hover {
    transform: scale(1.30);
  }
    &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.3rem;
    background-image: linear-gradient(90deg, #8257E6 0%, #A40EE4 92.32%);
    bottom: -0.1rem;
    left: 0;
    }

    & p{
    text-align: center;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    font-family: 'DM Sans', sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    color: #8257E6;
    margin-bottom: 1.5rem;
    }

    & img {
    text-align: center;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    width: 4rem;
    }
`


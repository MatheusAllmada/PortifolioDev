import styled from "styled-components";

export const Headers = styled.header`
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #13131F;
    

 &::after{
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.1rem;
    background-image: linear-gradient(90deg, #8257e6 0%, #A40EE4 92.32%);
 }
`

export const Infos = styled.div`
    color: white;
    align-items: center;


    & ul, li, a{
        height: 60px;
        margin: 0;
        display: flex;
        gap: 20px;
        text-decoration: none;
        color: white;
        padding: 0;
        justify-content: space-evenly;
        align-items: center;
        font-size: 1.2rem;
        
        
    }
    & img{
        width: 40px;
    }
`
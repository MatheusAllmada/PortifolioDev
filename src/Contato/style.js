import styled from "styled-components";


export const Container = styled.div`
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
    margin-bottom: 300px;

    & h2{
    font-family: 'DM Sans', sans-serif;
    font-size: 3.2rem;
    color: #F9F9F9;
    font-weight: 600;
    margin-bottom: 10rem;
    }

`

export const Containericones = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    display: flex;
    flex-wrap: wrap;
    gap: 7.5rem;
    justify-content: center;

`

export const Iconesinfo = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    
    & a {
    text-decoration: none;
    border: none;
    color: currentColor;
    }
    &:hover {
    transform: scale(1.30);
  }

    


`

export const Nomes = styled.p `

     margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    font-family: 'DM Sans', sans-serif;
    font-size: 1.8rem;
    font-weight: bold;
    color: #F9F9F9;

`

export const DivBox = styled.div`
    color: currentColor;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #212121;
    border-radius: 50%;
    
 

    
`

export const SubNomes = styled.p`
        margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    font-family: 'DM Sans', sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    color: #828282;

`
import styled from "styled-components";

export const SectionSobre = styled.section`
  display: block;
  transition: 0.5s;
  transform: translateX(0);
  opacity: 1;
  padding-bottom: 11.25rem;
`;

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10rem 2.5rem;
  padding-top: 80px;
  & img {
    border-radius: 20%;
    width: 500px;
    @media screen and (max-width: 1090px) {
      width: 400px;
      gap: 200px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & h1 {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 3vw;
    font-weight: 500;
    color: #f9f9f9;
    line-height: 5.4rem;
  }
  & span {
    font-family: "Poppins", sans-serif;
    font-size: 4vw;
    font-weight: 500;
    line-height: 5.4rem;
    display: block;
    color: #8257e6;
  }
  & p {
    margin: 0;
    vertical-align: baseline;
    font-family: "DM Sans", sans-serif;
    font-size: 1.4vw;
    font-weight: 500;
    color: #828282;
  }
`;

export const Contatos = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: flex;
  gap: 2.5rem;

  & a {
    text-decoration: none;
    border: none;
    font-family: "DM Sans", sans-serif;
    font-size: 1vw;
    font-weight: 500;
    color: #f9f9f9;
    padding: 1.2rem 2.7rem;
    background-image: linear-gradient(
      90deg,
      rgba(130, 87, 230, 0.8) 0.2%,
      rgba(121, 48, 190, 0.648) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    transition: 0.3s;
    @media screen and (max-width: 1090px) {
      padding: 0.8rem 1.5rem;
    }
  }
`;

export const Sobre = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  & h2 {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    font-family: "DM Sans", sans-serif;
    font-size: 3vw;
    color: #f9f9f9;
    font-weight: 600;
  }

  & p {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    color: #828282;
    font-family: "DM Sans", sans-serif;
    font-size: 1.6vw;
    text-align: center;
    width: 55%;
    line-height: 180%;
  }
`;

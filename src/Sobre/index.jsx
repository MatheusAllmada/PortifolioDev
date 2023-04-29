import React from "react";

import {
  Container,
  SectionSobre,
  Banner,
  Info,
  Titulo,
  Contatos,
  Sobre,
} from "./style";

export const TypingAnimation = () => {
  const [title] = React.useState("Olá, me chamo");
  const [span] = React.useState("Matheus Almada");
  const [paragraph] = React.useState("Desenvolvedor Front-End Jr");

  React.useEffect(() => {
    const titleElement = document.querySelector("#sobre .banner h1");
    const spanElement = document.querySelector("#sobre .banner span");
    const paragraphElement = document.querySelector("#sobre .banner p");

    const typingAnimation = (element, text, delay) => {
      const textToArray = text.split("");
      let newText = "";

      textToArray.forEach((item, index) => {
        setTimeout(() => {
          newText += item;
          element.innerHTML = newText;
        }, delay * index);
      });
    };

    typingAnimation(titleElement, title, 120);
    typingAnimation(spanElement, span, 150);
    typingAnimation(paragraphElement, paragraph, 75);
  }, [paragraph, span, title]);

  return (
    <SectionSobre id="sobre">
      <Container>
        <Banner className="banner">
          <Info>
            <Titulo>
              <h1></h1>
              <span></span>
              <p></p>
            </Titulo>
            <Contatos>
              <a href="src\assets\Curriculo_Matheus_Almada.pdf" download>
                Downloand CV
              </a>
              <a href="mailto:contatomatheusbarreto@hotmail.com" target="blank">
                Entrar em contato
              </a>
            </Contatos>
          </Info>
          <img src="/assets/fotopessoal.jpg" alt="" />
        </Banner>
        <Sobre>
          <h2>Sobre mim</h2>
          <p>
            Estudante de Análise e Desenvolvimento de Sistemas apaixonado por
            tecnologia, com forte interesse em Front-End. Possuo conhecimentos
            em HTML5, CSS3, JavaScript, React.Js e outras tecnologias
            relevantes. Busco oportunidades para aplicar minhas habilidades e
            crescer profissionalmente em um ambiente desafiador.
          </p>
        </Sobre>
      </Container>
    </SectionSobre>
  );
};

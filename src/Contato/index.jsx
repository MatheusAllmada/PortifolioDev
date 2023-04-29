import { Container, Containericones, Iconesinfo, DivBox, Nomes, SubNomes } from "./style";

export const Contato = () => {
  return (
    <Container id="contato">
      <h2>Contatos:</h2>
      <Containericones >
        <Iconesinfo >
          <a style={{marginBottom:"20px"}} href="mailto:contatomatheusbarreto@hotmail.com" target="blank">
            <DivBox><img  style={{padding: "20px"}}src="./assets/imgsiconscontatos/mail.svg" alt="" /></DivBox>
          </a>
          <a target="blank" style={{marginBottom:"10px"}}href="mailto:contatomatheusbarreto@hotmail.com" ><Nomes>E-mail</Nomes></a>
          <a target="blank" href="mailton:contatomatheusbarreto@hotmail.com"><SubNomes>contatomatheusbarreto@hotmail.com</SubNomes></a>
        </Iconesinfo>
        <Iconesinfo>
          <a target="blank" style={{marginBottom:"20px"}} href="https://api.whatsapp.com/send?phone=5571994157466">
            <DivBox>< img  style={{padding: "20px"}} src="./assets/imgsiconscontatos/phone.svg" alt="" /></DivBox>
          </a>
          <a target="blank"style={{marginBottom:"10px"}} href="https://api.whatsapp.com/send?phone=5571994157466"><Nomes>Telefone</Nomes></a>
          <a target="blank" href="https://api.whatsapp.com/send?phone=5571994157466"><SubNomes>(71) 99415-7466</SubNomes></a>
        </Iconesinfo>
        <Iconesinfo>
          <a target="blank" style={{marginBottom:"20px"}}href="https://www.linkedin.com/in/matheus-almada-a064b2189/">
            <DivBox><img style={{padding: "20px"}} src="./assets/imgsiconscontatos/linkedin.svg" alt="" /></DivBox>
          </a>
          <a target="blank" style={{marginBottom:"10px"}} href="https://www.linkedin.com/in/matheus-almada-a064b2189/"><Nomes>Linkedin</Nomes></a>
          <a target="blank" href="https://www.linkedin.com/in/matheus-almada-a064b2189/"><SubNomes>@MatheusAlmada</SubNomes></a>
        </Iconesinfo>
        <Iconesinfo>
          <a target="blank" style={{marginBottom:"20px"}}href="https://github.com/MatheusAllmada">
            <DivBox><img style={{padding: "20px"}}src="./assets/imgsiconscontatos/github.svg" alt="" /></DivBox>
          </a>
          <a target="blank"style={{marginBottom:"10px"}}href="https://github.com/MatheusAllmada"><Nomes>Github</Nomes></a>
          <a target="blank"href="https://github.com/MatheusAllmada"><SubNomes>@MatheusAllmada</SubNomes></a>
        </Iconesinfo>
      </Containericones>
    </Container>
  );
};

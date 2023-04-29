import { ContainerPro, Projetoscard, Cards } from "./style";

export const Projetos = () => {
  return (
    <ContainerPro id="projetos">
      <h2>Projetos:</h2>
      <Projetoscard>
        <Cards>
          <img src="/assets/imgs-projetos/flexblog.png" alt="" />
        </Cards>
        <Cards>
          <img src="/assets/imgs-projetos/loboinfo.png" alt="" />
        </Cards>
        <Cards>
          <img src="/assets/imgs-projetos/bikemaster.png" alt="" />
        </Cards>
        <Cards>
          <img src="/assets/imgs-projetos/gridlobo.png" alt="" />
        </Cards>
        <Cards>
          <img src="/assets/imgs-projetos/bike.png" alt="" />
        </Cards>
        <Cards>
          <img src="/assets/imgs-projetos/animaisfantasticos.png" alt="" />
        </Cards>
        <Cards>
          <img src="/assets/imgs-projetos/lojacarros.png" alt="" />
        </Cards>
        <Cards>
          <img src="/assets/imgs-projetos/axiosblog.png" alt="" />
        </Cards>
      </Projetoscard>
    </ContainerPro>
  );
};

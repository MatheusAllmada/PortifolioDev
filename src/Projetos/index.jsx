import { ContainerPro, Projetoscard, Cards } from "./style";

export const Projetos = () => {
  return (
    <ContainerPro id="projetos">
      <h2>Projetos:</h2>
      <Projetoscard>
        <Cards>
          <a target="blank" href="https://projetoflexblog.vercel.app/">
            <img src="/assets/imgs-projetos/flexblog.png" alt="" />
          </a>
        </Cards>
        <Cards>
          <a target="blank" href="https://lobo-landing-page-master.vercel.app/">
          <img src="/assets/imgs-projetos/loboinfo.png" alt="" />
          </a>
          
        </Cards>
        <Cards>
          <a target="blank" href="https://bicicleta-landing-page-1.vercel.app/">
            <img src="/assets/imgs-projetos/bikemaster.png" alt="" /></a>
          
        </Cards>
        <Cards>
          <a target="blank" href="https://lobogrid.vercel.app/">
            <img src="/assets/imgs-projetos/teste.png" alt="" /></a>
          
        </Cards>
        <Cards>
          <a target="blank" href="https://bicileta-html-css.vercel.app/">
          <img src="/assets/imgs-projetos/bike.png" alt="" />
          </a>
          
        </Cards>
        <Cards>
          <a target="blank" href=""></a>
          <img src="/assets/imgs-projetos/animaisfantasticos.png" alt="" />
        </Cards>
        <Cards>
          <a target="blank" href=""></a>
          <img src="/assets/imgs-projetos/lojacarros.png" alt="" />
        </Cards>
        <Cards>
          <a target="blank" href=""></a>
          <img src="/assets/imgs-projetos/axiosblog.png" alt="" />
        </Cards>
      </Projetoscard>
    </ContainerPro>
  );
};

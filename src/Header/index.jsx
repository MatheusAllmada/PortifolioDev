import { Headers, Infos } from "./style";

export const Header = () => {
  return (
    <Headers>
      <Infos>
        <ul>
          <img src="/assets/imgs/codificacao.png" alt="" />
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#contato">Contatos</a>
          </li>
        </ul>
      </Infos>
    </Headers>
  );
};

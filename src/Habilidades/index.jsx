
import {SelecAc, SkillContainer, Cards, CardsBox} from "./style"

export const Habilidades =() => {
 

  return (
    <SelecAc>
        <SkillContainer id="habilidades">
            <h2>Habilidades:</h2>
            <Cards>
                <CardsBox>
                    <p>HTML5</p>
                    <img src="public/assets/imgs/html.svg" alt="" />
                </CardsBox>
                <CardsBox>
                    <p>CSS3</p>
                    <img src="public/assets/imgs/css.svg" alt="" />
                </CardsBox>
                <CardsBox>
                    <p>JavaSript</p>
                    <img src="public/assets/imgs/javascript.svg" alt="" />
                </CardsBox>
                <CardsBox>
                    <p>React.Js</p>
                    <img src="public\assets\imgs\react.svg" alt="" />
                </CardsBox>
                <CardsBox>
                    <p>CSS-in-JS</p>
                    <img src="public\assets\imgs\styledcomponents.svg" alt="" />
                </CardsBox>
            </Cards>
        </SkillContainer>
    </SelecAc>
  );
}
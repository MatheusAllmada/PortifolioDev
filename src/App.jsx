
import './App.css'

import { Header } from './Header'
import {TypingAnimation} from "./Sobre"
import { Habilidades } from './Habilidades'
import { Projetos } from './Projetos'
import { Contato } from './Contato'

function App() {


  return (
    <>
    <Header />
    <TypingAnimation />
    <Habilidades />
    <Projetos />  
    <Contato />
    </>
  )
}

export default App

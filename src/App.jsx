import './App.css'
import { NavHeader } from './components/NavHeader/NavHeader'
import { Inicio } from './components/Inicio/Inicio'
import { SobreMi } from './components/SobreMi/SobreMi'
import { Portafolio } from './components/Portafolio/Portafolio'
import { Experiencia } from './components/Experiencia/Experiencia'

function App() {
  
  return (
    <>
      <NavHeader/>
      <Inicio/>
      <SobreMi/>
      <Portafolio/>
      <Experiencia/>
    </>
  )
}

export default App

import './App.css'
import NavHeader from './components/NavHeader/NavHeader'
import Inicio from './components/Inicio/Inicio'
import SobreMi from './components/SobreMi/SobreMi'
import Portafolio from './components/Portafolio/Portafolio'
import Experiencia from './components/Experiencia/Experiencia'
import Contacto from './components/Contacto/Contacto'

function App() {
  
  return (
    <>
      <NavHeader/>
      <Inicio/>
      <SobreMi/>
      <Portafolio/>
      <Experiencia/>
      <Contacto/>
    </>
  )
}

export default App

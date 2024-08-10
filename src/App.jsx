import './App.css'
import { NavHeader } from './components/NavHeader/NavHeader'
import { Inicio } from './components/Inicio/Inicio'
import { SobreMi } from './components/SobreMi/SobreMi'
import { Portafolio } from './components/Portafolio/Portafolio'

function App() {
  
  return (
    <>
      <NavHeader/>
      <Inicio/>
      <SobreMi/>
      <Portafolio/>
    </>
  )
}

export default App

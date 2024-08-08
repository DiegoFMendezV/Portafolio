import '../../components/Inicio/Inicio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const Inicio = () => {
  return (
    <section className='wrapContent bg1'>
        <div className='heroContent'>
            <div>
                <p>Yo soy</p>
                <h1 className='background'>DESARROLLADOR <br />WEB <br />MULTIMEDIA <span className='point'></span></h1>
            </div>
            <div className='info'>
                <p>Bienvenid@ a mi Portafolio</p>
                <button className='btnCV'>
                    <span>Descarga mi CV</span>
                </button>
                <div className='redes'>
                    <a href="https://github.com/DiegoFMendezV" target="_blank" title="GitHub"><FontAwesomeIcon className="icon" icon={faGithub}/></a>
                    <a href="https://www.linkedin.com/in/diego-fernando-mendez-vargas/" target="_blank" title="LinkendIn"><FontAwesomeIcon className="icon" icon={faLinkedin}/></a>
                </div>
            </div>
        </div>
    </section>
  )
}

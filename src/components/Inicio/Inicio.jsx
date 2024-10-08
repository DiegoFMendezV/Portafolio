import '../../components/Inicio/Inicio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import MyCV from '../../assets/CV.pdf';

function Inicio () {
  return (
    <section className='wrapContent bg2'>
        <div className='heroContent'>
            <div className='info1'>
                <p>Yo soy</p>
                <h1 className='background'>DESARROLLADOR <br />WEB <br />MULTIMEDIA <span className='point'></span></h1>
            </div>
            <div className='info2'>
                <p>Bienvenid@ a mi Portafolio</p>
                <a href={MyCV} download="CV_DiegoMendez.pdf">
                    <button className='btnCV'>
                        <span>Descarga mi CV</span>
                    </button>
                </a>
                <div className='redes'>
                    <a href="https://github.com/DiegoFMendezV" target="_blank" title="GitHub"><FontAwesomeIcon className="icon" icon={faGithub}/></a>
                    <a href="https://www.linkedin.com/in/diego-fernando-mendez-vargas/" target="_blank" title="LinkendIn"><FontAwesomeIcon className="icon" icon={faLinkedin}/></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Inicio
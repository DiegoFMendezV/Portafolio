import '../../components/Experiencia/Experiencia.css'

function Experiencia () {
  return (
    <>
    <article className="wrapContent bg1">
        <div className='subWrap'>
          <div className="contentExperiencia">
            <h3>EXPERIENCIA</h3>
            <div className='experiencia'>
                <ol>
                  <li>
                    <b>Abril - Actual</b> <br />
                    Imagen Art and Design<br />
                    Desarrollador Multimedia <br />
                    Crear páginas web, logotipos, diseños para locales comerciales, editar fotografías y videos, crear posts para 
                    redes sociales y todo tipo de publicación física y digital.
                  </li>
                  <li>
                    <b>Enero - Marzo 2024</b> <br />
                    Liwi Software <br />
                    Desarrollador Frontend Freelance <br />
                    Crear una landing page Liwi Software, utilizando herramientas como React.js (vite), Bootstrap y 
                    Fontawesome.
                  </li>
                  <li>
                    <b>Enero - Julio 2023</b> <br />
                    Liwa S.A.S. E.S.P.<br />
                    Desarrollador Fullstack <br />
                    Mejorar página web para los colaboradores de la compañía, haciendo uso de HTML, CSS, JavaScript, frameworks 
                    como Laravel y Vue.js. Se rediseñó varias secciones, así como la creación del módulo de perfil, cambio de contraseña y cambio 
                    de foto de perfil con sus respectivas validaciones.
                  </li>
                </ol>
            </div> 
          </div>
        </div> 
      </article>
    </>
  )
}

export default Experiencia
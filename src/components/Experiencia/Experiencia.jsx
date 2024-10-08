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
                    <b>Desarrollador Multimedia</b> <br />
                    Imagen Art and Design<br />
                    Abril 2024 - Actual <br />
                    Crear páginas web, logotipos, diseños para locales comerciales, editar fotografías y videos, crear posts para 
                    redes sociales y todo tipo de publicación física y digital.
                  </li>
                  <li>
                    <b>Desarrollador Frontend Freelance</b> <br />
                    Liwi Software <br />
                    Enero 2024 - Marzo 2024 <br />
                    Crear una landing page Liwi Software, utilizando herramientas como React.js (vite), Bootstrap y 
                    Fontawesome.
                  </li>
                  <li>
                    <b>Desarrollador Fullstack</b> <br />
                    Liwa S.A.S. E.S.P.<br />
                    Enero 2023 - Julio 2023 <br />
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
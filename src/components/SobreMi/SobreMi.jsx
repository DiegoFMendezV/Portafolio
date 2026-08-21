import foto from '../../assets/Foto1.jpeg'
import '../../components/SobreMi/SobreMi.css'

function SobreMi () {
  return (
    <>
      <article className="wrapContent bg1">
        <div className="subWrap">
          <div className="image">
            <img src={foto} alt="" />
          </div>
          <div className="contentSobreMi">
            <h3>SOBRE MI</h3>
            <p>Diseñador Multimedia con experiencia en creación de contenido visual para redes sociales, diseño de identidad gráfica y edición de video en formatos digitales. He apoyado en la ejecución de campañas y gestión de contenido orientado a posicionamiento de marca y captación de leads en sectores gastronómicos e institucionales, manteniendo coherencia visual y organización en entregas. Cuento con conocimientos complementarios en desarrollo web, lo que me permite diseñar pensando en experiencia digital y conversión. </p>
          </div>
        </div>      
      </article>
      <article className="wrapContent bg2">
        <div className='subWrap'>
          <div className="contentSobreMi">
            <h3 className='titulo'>EDUCACIÓN</h3>
            <div className='educacion'>
              <div className='formal bg1'>
                <h5>Titulados</h5>
                <ol>
                  <li>
                    Tecnólogo en Desarrollo Multimedia y Web <br />
                    Servicio Nacional de Aprendizaje - SENA <br />
                    Certificado - 2026 <br />
                    Montería, Cordoba. 
                  </li>
                  <li>
                    Técnico en Programación de Software <br />
                    Servicio Nacional de Aprendizaje - SENA <br />
                    Certificado - 2023 <br />
                    Mosquera, Cundinamarca.
                  </li>
                </ol>
              </div>
              <div className='noFormal bg1'>
                <h5>Cursos</h5>
                <ol>
                  <li>
                    Uso de la Imagen y Fotografía en Producciones Graficas <br />
                    Servicio Nacional de Aprendizaje SENA <br />
                    Certificado - 2026 <br />
                  </li>
                  <li>
                    Manejo de Adobe Photoshop <br />
                    Servicio Nacional de Aprendizaje SENA <br />
                    Certificado - 2025 <br />
                  </li>
                  <li>
                    CorelDraw - Utilización de Herramientas de Diseño Vectorial <br />
                    Servicio Nacional de Aprendizaje SENA <br />
                    Certificado - 2025 <br />
                  </li>
                  <li>
                    Producción de Imágenes Digitales <br />
                    Servicio Nacional de Aprendizaje SENA <br />
                    Certificado - 2024 <br />
                  </li>
                  <li>
                    Bootcamp Desarrollo Full Stack (MERN) <br />
                    DEV.F - ProTalento <br />
                    Certificado - 2023 <br />
                    Ciudad de México, México.
                  </li>
                  {/* <li>
                    Introducción a la Programación con Python <br />
                    Corporación Educación Tecnológica Colsubsidio <br />
                    Certificado - 2022 <br />
                    Bogotá D.C - Colombia.
                  </li> */}
                  <li>
                    Análisis de Datos y Big Data <br />
                    Corporación Educación Tecnológica Colsubsidio <br />
                    Certificado - 2022 <br />
                  </li>
                </ol>
              </div>
            </div> 
          </div>
        </div> 
      </article>
      <article className="wrapContent bg1">
        <div className="subWrap">
          <div className="contentSobreMi">
            <h3 className='titulo'>HABILIDADES</h3>
            <div className="skills">
            <h5>Diseño Gráfico</h5>
              <div className="diseño">
                <img src="https://tecnologia.uniandes.edu.co/wp-content/uploads/Logo-Adobe-Illustrator.png" alt="Adobe Illustrator" />
                <img src="https://w7.pngwing.com/pngs/301/722/png-transparent-adobe-logo-logos-photoshop-logos-and-brands-icon-thumbnail.png" alt="Adobe Photoshop" />
                <img src="https://www.comparasoftware.co/image-assets/412/NDEyfHdwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzExL2xvZ29BZG9iZS1QcmVtaWVyZS1Qcm8tQ0MucG5n.webp" alt="Adobe PremierPro" />
                <img src="	https://www.coreldraw.com/static/cdgs/product_content/cdgs/2024/icon-coreldraw.png" alt="Corel Draw" />
                <img src="https://freelogopng.com/images/all_img/1682566315logo-filmora.png" alt="Filmora" />
                <img src="https://play-lh.googleusercontent.com/JC3HW-ps59VAEU3vuJoi3I5XB_IQ9ISuILLudUY9uLSW7eKfqtXitrB-fF865rV4TQ" alt="Canva" />
                <img src="https://static.vecteezy.com/system/resources/previews/067/065/640/non_2x/capcut-logo-square-rounded-capcut-logo-capcut-logo-free-download-free-png.png" alt="" />
              </div>
             
              <h5>Frontend</h5>
              <div className="web">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/066/386/005/small/the-html5-logo-with-the-number-5-in-the-center-free-png.png" className="html" alt="HTML" title="HTML" />
                <img src="https://img.icons8.com/?size=512&id=21278&format=png" alt="" title="CSS"/>
                <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="JavaScript" title="JavaScript"/>
                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React" title='React.js'/>
                <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-bootstrap-framework-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-dart-mobile-developer-programming-language-pack-logos-icons-5453031.png" alt="" />
              </div> 
              <h5>Backend</h5>
              <div className="back">
                <img src="https://kinsta.com/wp-content/uploads/2022/06/laravel.png" className="lara" alt="Laravel" title='Laravel'/>
                <img src="https://i.pinimg.com/736x/4d/fc/38/4dfc38802784bcf687f616e7e5a4370c.jpg" className="node" alt="" />
              </div>
              <h5>Base de datos</h5>
              <div className='bd'>
                <img src="https://i.pinimg.com/564x/09/7b/34/097b349ab1d78c15744c3a89ff457939.jpg" alt="" />
                <img src="https://ih1.redbubble.net/image.5217761217.2947/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="" />
              </div>
              <h5>Gestor de Contenidos</h5>
              <div className='cms'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png" alt="" />
              </div>            
            </div>
          </div>
        </div>      
      </article>
    </>
    

  )
}

export default SobreMi

import foto from '../../assets/FOTO.jpg'
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
            <p>Técnico en Programación de Software y estudiamte de último trimestre del Tecnólogo en Desarrollo Multimedia y Web. Con conocimientos en gestores de contenido como WordPress, en software de diseño gráfico como Photoshop, Illustrator, CorelDraw y PremierePro. También desarrollo sitios web con HTML, CSS y JavaScript, además del uso de frameworks como Laravel (PHP), Bootstrap, React.js, también en bases de datos relacionales (MySQL - PostgreSQL).  <br /> <br /> Caracterizado por la adaptabilidad, comunicación asertiva, orientación a resultados, proactividad y trabajo en equipo. Orientado en contribuir al éxito de proyectos desafiantes y colaborar con un equipo altamente motivado para lograr resultados óptimos. </p>
          </div>
        </div>      
      </article>
      <article className="wrapContent bg2">
        <div className='subWrap'>
          <div className="contentSobreMi">
            <h3 className='titulo'>EDUCACIÓN</h3>
            <div className='educacion'>
              <div className='formal bg1'>
                <h5>Formal</h5>
                <ol>
                  <li>
                    Tecnólogo en Desarrollo Multimedia y Web <br />
                    Servicio Nacional de Aprendizaje - SENA <br />
                    Montería, Cordoba. <br />
                    Estudiando
                  </li>
                  <li>
                    Técnico en Programación de Software <br />
                    Servicio Nacional de Aprendizaje - SENA <br />
                    Certificado - 2023 <br />
                    Mosquera, Cundinamarca
                  </li>
                </ol>
              </div>
              <div className='noFormal bg1'>
                <h5>No Formal</h5>
                <ol>
                <li>
                    Producción de Imágenes Digitales <br />
                    Servicio Nacional de Aprendizaje SENA <br />
                    Certificado - 2024 <br />
                    Vélez, Santander - Colombia.
                  </li>
                  <li>
                    Bootcamp Desarrollo Full Stack (MERN) <br />
                    DEV.F - ProTalento <br />
                    Certificado - 2023 <br />
                    Ciudad de México, México.
                  </li>
                  <li>
                    Introducción a la Programación con Python <br />
                    Corporación Educación Tecnológica Colsubsidio <br />
                    Certificado - 2022 <br />
                    Bogotá D.C - Colombia.
                  </li>
                  <li>
                    Análisis de Datos y Big Data <br />
                    Corporación Educación Tecnológica Colsubsidio <br />
                    Certificado - 2022 <br />
                    Bogotá D.C - Colombia
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
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Illustrator_CC_icon.png/492px-Illustrator_CC_icon.png" alt="" />
                <img src="https://w7.pngwing.com/pngs/301/722/png-transparent-adobe-logo-logos-photoshop-logos-and-brands-icon-thumbnail.png" alt="" />
                <img src="https://www.cdnlogo.com/logos/p/70/premiere-pro-cc.svg" alt="" />
                <img src="https://seeklogo.com/images/C/coreldraw-x7-logo-747B0DC253-seeklogo.com.png" alt="" />
              </div>
              <h5>Gestor de Contenidos</h5>
              <div className='cms'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png" alt="" />
              </div>
              <h5>Frontend</h5>
              <div className="web">
                <img src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png" alt="HTML" title="HTML" />
               <img src="https://img.icons8.com/?size=512&id=21278&format=png" alt="" title="CSS"/>
                <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="JavaScript" title="JavaScript"/>
                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React" title='React.js'/>
                <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-bootstrap-framework-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-dart-mobile-developer-programming-language-pack-logos-icons-5453031.png" alt="" />
              </div>
              <h5>Backend</h5>
              <div className="back">
                <img src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png" alt="Laravel" title='Laravel'/>
                <img src="https://seekvectors.com/files/download/node%20js%20logo.png" alt="" />
              </div>
              <h5>Base de datos</h5>
              <div className='bd'>
                <img src="https://i.pinimg.com/564x/09/7b/34/097b349ab1d78c15744c3a89ff457939.jpg" alt="" />
                <img src="https://ih1.redbubble.net/image.5217761217.2947/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="" />
              </div>              
            </div>
          </div>
        </div>      
      </article>
    </>
    

  )
}

export default SobreMi

import { useState } from 'react';
import '../../components/Portafolio/Portafolio.css'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import poke from '../../assets/POKE.png'
import diseño1 from '../../assets/diseño1.jpg'
import diseño2 from '../../assets/diseño2.jpg'
import diseño3 from '../../assets/diseño3.jpg'
import diseño4 from '../../assets/diseño4.jpg'
import diseño5 from '../../assets/diseño5.png'
import diseño6 from '../../assets/diseño6.png'
import logo from '../../assets/Logo.png'

export const Portafolio = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  
  const data = {
      1: {
      images: [image1, image2, image3, image4, image5],
      title: ['Liwi Software'],
      text: [
        <>
        <p>
          Creación de una landing page, utilizando herramientas como React.js (vite), Bootstrap y Fontawesome. (No se encuentra en producción aun.)
        </p>
        <button type="button" className="btnCard btn_ver" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Ver Más
        </button>
        </>
      ],
      },
      2: {
        images: [logo, diseño1, diseño2, diseño3, diseño4, diseño5, diseño6],
        title: ['Diseño Gráfico'],
        text: [
          <>
          <p>
            Creación de logo personal con Adobe Illustrator.
            Posts para redes sociales, menús, volantes y demás publicidad para varios tipos de restaurantes, en los cuales se emplearon herramientas como Photoshop, Illustrator y CorelDraw.
          </p>
          <button type="button" className="btnCard" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Ver Más
          </button>
          </>
        ],
      },
      
      3: {
        images: [poke],
        title: ['Pokedex'],
        text: ['Crear sitio web de consultas de Pokemones, realizado con herramientas como HTML, CSS y JavaScript,apoyado con Bootstrap, donde se consume el API de la serie animada Pokémon. Permite visualizar imágenes y características básicas de cada personaje.'],
        text1:[
          <>
          <button className="btnCard btn_ver">
            <a id='visitar' href="https://pokedex-rosy-iota.vercel.app/" target='_blank'>Visitar Sitio</a>
          </button>
          </>
        ]
      },
    };
  
    // Agregar un control para manejar el caso de un valor no válido de selectedButton
    const selectedData = data[selectedButton] || data[1];
  
    const handleClick = (buttonNumber) => {
      setSelectedButton(buttonNumber);
    };
    
    const { images} = data[selectedButton] || data[1];
    
    return (
      <article className='wrapContent bg1'>
            <div className='subWrap'>
                <div className="contentPortafolio">
                    <h3>PORTAFOLIO</h3>
                    <div className='botones'>
                    <button className='btnPortafolio' onClick={() => handleClick(1)}>Proyectos Web</button>
                    <button className='btnPortafolio' onClick={() => handleClick(2)}>Proyectos Diseño</button>
                    <button className='btnPortafolio' onClick={() => handleClick(3)}>Proyectos Académicos</button>
                    </div>

                    <div className='info'>
                        <div className='card'>
                          <img className='img_portada' src={images[0]}/>
                            {selectedData.images.map((image, index) => (
                              <div className='card-body' key={index}>
                                  <h2 className='card-title'>{selectedData.title[index]}</h2>
                                    <p className='card-text'>{selectedData.text[index]}</p>
                                    {selectedButton === 3 && (
                                        <p className='text1'>{selectedData.text1[index]}</p>
                                    )}
                                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                      <div className="modal-dialog">
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Galería</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                          </div>
                                          <div className="modal-body">
                                                {selectedData.images.map((image, index) => (
                                                  <div key={index}>
                                                    <img src={image} alt={`Imagen ${index + 1}`}/>
                                                  </div>
                                                ))};  
                                          </div>
                                          <div className="modal-footer">
                                            <button type="button" className="btnModal" data-bs-dismiss="modal">Aceptar</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>                                        
                                </div>
                            ))}
                          
                        
                        </div>
                    </div>
                </div>
            </div>        
        </article>
    );
  };
  


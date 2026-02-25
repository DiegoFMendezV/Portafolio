import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import '../../components/Portafolio/Portafolio.css'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
// import poke from '../../assets/POKE.png'
import diseño1 from '../../assets/diseño1.jpg'
import diseño2 from '../../assets/diseño2.png'
import diseño3 from '../../assets/diseño3.png'
import diseño4 from '../../assets/diseño4.jpg'
import diseño5 from '../../assets/diseño5.png'
import diseño6 from '../../assets/diseño6.png'
import diseño7 from '../../assets/diseño7.png'
import diseño8 from '../../assets/diseño8.png'
import diseño9 from '../../assets/1.png'
import diseño10 from '../../assets/2.png'
import diseño11 from '../../assets/3.png'
import videorancho from '../../assets/VideoRancho.mp4';
import videocarocakes from '../../assets/VideoCaroCakes.mp4';
import videoinvitacion from '../../assets/Videoinvitacion.mp4';
import logo from '../../assets/Logo.png'

function Portafolio () {
  const [selectedButton, setSelectedButton] = useState(2);
  
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
        images: [logo, diseño5, diseño6, diseño7, diseño8, diseño1, diseño2, diseño3, diseño4, diseño9, diseño10, diseño11],
        title: ['Diseño Gráfico'],
        text: [
          <>
          <p>
            Creación de contenido para redes sociales, creación de logos, posts, edicion de videos, creación de menús, volantes y demás publicidad física y digital, se emplearon herramientas como Photoshop, Illustrator, PremierePro, Filmora, CorelDraw, Canva y/o Capcut.
          </p>
          <button type="button" className="btnCard" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Ver Más
          </button>
          </>
        ],
      },
      
      // 3: {
      //   images: [poke],
      //   title: ['Pokedex'],
      //   text: ['Creación sitio web de consultas de Pokemones, realizado con herramientas como HTML, CSS y JavaScript, apoyado con Bootstrap, donde se consume el API de la serie animada Pokémon. Permite visualizar imágenes y características básicas de cada personaje.'],
      //   text1:[
      //     <>
      //     <button className="btnCard btn_ver">
      //       <a id='visitar' href="https://pokedex-rosy-iota.vercel.app/" target='_blank'>Visitar Sitio</a>
      //     </button>
      //     </>
      //   ]
      // },
    };
  
    // Agregar un control para manejar el caso de un valor no válido de selectedButton
    const selectedData = data[selectedButton] || data[1];
  
    const handleClick = (buttonNumber) => {
      setSelectedButton(buttonNumber);
    };
    
    const { images} = data[selectedButton] || data[1];
    
    return (
      <article className='wrapContent bg2'>
            <div className='subWrap'>
                <div className="contentPortafolio">
                    <h3>PORTAFOLIO</h3>
                    <h6 className='clic'>Haz clic al proyecto que deseas ver</h6>
                    <div className='botones'>
                    <button className='btnPortafolio' onClick={() => handleClick(2)}>Proyectos Diseño Gráfico</button>
                    <button className='btnPortafolio' onClick={() => handleClick(1)}>Proyectos Web</button>
                    {/* <button className='btnPortafolio' onClick={() => handleClick(3)}>Proyectos Académicos</button> */}
                    </div>

                    <div className='info'>
                        <div className='card bg1'>
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
                                            <Swiper
                                              spaceBetween={10}
                                              slidesPerView={1}
                                              modules={[Navigation, Pagination]}
                                              navigation
                                              pagination={{ clickable: true }}
                                              loop={true}
                                            >
                                              {selectedData.images.map((image, index) => (
                                                <SwiperSlide key={index}>
                                                  <img src={image} alt={`Imagen ${index + 1}`} className="w-full h-auto"/>
                                                </SwiperSlide>
                                              ))}
                                              {selectedButton === 2 && (
                                                <SwiperSlide>
                                                  <p className='favor'>NOTA: Por favor pausa el video antes de cerrar esta ventana.</p>
                                                <video
                                                  src={videorancho}
                                                  controls
                                                  style={{
                                                    display: 'block',
                                                    margin: '0 auto',
                                                    width: '100%',
                                                    height: 'auto',
                                                    borderRadius: '12px'
                                                  }}
                                                  className="w-full h-auto"
                                                >
                                                  Tu navegador no soporta el elemento de video.
                                                </video>
                                              </SwiperSlide>
                                              )}
                                              {selectedButton === 2 && (
                                                <SwiperSlide>
                                                  <p className='favor'>NOTA: Por favor pausa el video antes de cerrar esta ventana.</p>
                                                <video
                                                  src={videocarocakes}
                                                  controls
                                                  style={{
                                                    display: 'block',
                                                    margin: '0 auto',
                                                    width: '100%',
                                                    height: 'auto',
                                                    borderRadius: '12px'
                                                  }}
                                                  className="w-full h-auto"
                                                >
                                                  Tu navegador no soporta el elemento de video.
                                                </video>
                                              </SwiperSlide>
                                              )}
                                              {selectedButton === 2 && (
                                                <SwiperSlide>
                                                  <p className='favor'>NOTA: Por favor pausa el video antes de cerrar esta ventana.</p>
                                                <video
                                                  src={videoinvitacion}
                                                  controls
                                                  style={{
                                                    display: 'block',
                                                    margin: '0 auto',
                                                    width: '70%',
                                                    height: 'auto',
                                                    borderRadius: '12px'
                                                  }}
                                                  className="w-full h-auto"
                                                >
                                                  Tu navegador no soporta el elemento de video.
                                                </video>
                                              </SwiperSlide>
                                              )}
                                            </Swiper>
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
  }
  
export default Portafolio

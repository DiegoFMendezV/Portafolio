import { useState } from 'react';
import '../../components/Portafolio/Portafolio.css'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import image6 from '../../assets/image6.jpg'
import image7 from '../../assets/image7.jpg'
import image8 from '../../assets/image8.jpg'
import image9 from '../../assets/image9.jpg'
import image10 from '../../assets/image10.jpg'
import image11 from '../../assets/image11.jpg'
import image12 from '../../assets/image12.jpg'


export const Portafolio = () => {
    const [selectedButton, setSelectedButton] = useState(1);
  
    const data = {
      1: {
        images: [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12],
        title: ['Liwi Software'],
        text: ['Creación de una landing page, utilizando herramientas como React.js (vite), Bootstrap y Fontawesome, (No se encuentra en producción aun)'],
      },
      2: {
        images: [image1, image2, image3],
        texts: ['Texto A', 'Texto B', 'Texto C'],
      },
      3: {
        images: [image1, image2, image3],
        texts: ['Texto X', 'Texto Y', 'Texto Z'],
      },
    };
  
    // Agregar un control para manejar el caso de un valor no válido de selectedButton
    const selectedData = data[selectedButton] || data[1];
  
    const handleClick = (buttonNumber) => {
      setSelectedButton(buttonNumber);
    };
  
    return (
        <article className='wrapContent bg1'>
            <div className='subWrap'>
                <div className="contentPortafolio">
                    <h3>PORTAFOLIO</h3>
                    <div className='botones'>
                    <button className='btnPortafolio' onClick={() => handleClick(1)}>Botón 1</button>
                    <button className='btnPortafolio' onClick={() => handleClick(2)}>Botón 2</button>
                    <button className='btnPortafolio' onClick={() => handleClick(3)}>Botón 3</button>
                    </div>

                    <div className='info'>
                        <div className='card'>
                          <img src={image1} alt="" />
                            {selectedData.images.map((image, index) => (
                                <div className='card-body' key={index}>
                                  <h2 className='card-title'>{selectedData.title[index]}</h2>
                                  <p className='card-text'>{selectedData.text[index]}</p>
                                  {/* Modal */}
                                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                      <div className="modal-dialog">
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
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
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Aceptar</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>                                        
                                </div>
                            ))}
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Ver Más
                        </button>
                        
                        </div>
                    </div>
                </div>
            </div>        
        </article>
    );
  };
  


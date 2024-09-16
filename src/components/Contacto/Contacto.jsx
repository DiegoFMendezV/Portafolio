import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../../components/Contacto/Contacto.css'


function Contacto () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ikoxt87', 'template_itqesot', form.current, {
        publicKey: '9JUtP6o6uDorJnifR',
      })
      .then(
        () => {
          alert('Correo enviado correctamente')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <article className="wrapContent bg2">
        <div className='subWrap'>
          <div className="contentContacto">
            <h3>CONTACTO</h3>
            <p>Hola, Si te ha gustado mi trabajo y crees que puedo aportar a tu equipo o proyecto, no dudes en contactarme. Estoy siempre abierto a nuevas oportunidades y colaboraciones. ¡Hablemos!.</p>
            <div className='contacto bg1'>
            <form ref={form} onSubmit={sendEmail} >
              <div className="form-group">
                <label><b>Nombre</b></label>
                <input type="text" name="user_name" className="form-control"/>
              </div>
              <div className="form-group">
                <label><b>Correo Electrónico</b></label>
                <input type="email" name="user_email" className="form-control"/>
              </div>
              <div className="form-group">
                <label><b>Mensaje</b></label>
                <textarea name="message" className="form-control"/>
              </div>
              <div className="form-group">
                <input type="submit" value="Enviar" className="form-control boton"/>
              </div>
            </form>
            </div> 
          </div>
        </div> 
      </article>
    </>
  )
}

export default Contacto;
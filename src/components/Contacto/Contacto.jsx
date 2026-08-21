import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import '../../components/Contacto/Contacto.css';
import VisitCounter from '../../components/Contador/VisitCounter';

const Contacto = () => {
  const form = useRef(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        }
      );

      setSuccess(true);
      form.current.reset();
    } catch (err) {
      console.error('Error al enviar:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <article className="wrapContent bg2">
        <div className="subWrap">
          <div className="contentContacto">
            <h3>CONTACTO</h3>
            <p>
              Hola, si te ha gustado mi trabajo y crees que puedo aportar a tu
              equipo o proyecto, no dudes en contactarme. Estoy siempre abierto
              a nuevas oportunidades y colaboraciones. ¡Hablemos!
            </p>

            <div className="contacto bg1">
              <form ref={form} onSubmit={sendEmail} noValidate>
                
                <div className="form-group">
                  <label htmlFor="name"><b>Nombre</b></label>
                  <input
                    id="name"
                    type="text"
                    name="user_name"
                    className="form-control"
                    required
                    minLength={2}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email"><b>Correo Electrónico</b></label>
                  <input
                    id="email"
                    type="email"
                    name="user_email"
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message"><b>Mensaje</b></label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    required
                    minLength={10}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="submit"
                    value={loading ? 'Enviando...' : 'Enviar'}
                    className="form-control boton"
                    disabled={loading}
                  />
                </div>
                
                  {success && (
                    <p className="success msj">
                      ✅ Mensaje enviado correctamente.
                    </p>
                  )}

                  {error && (
                    <p className="error msj">
                      ❌ Ocurrió un error al enviar el mensaje.
                    </p>
                  )}
               
                
              </form>
            </div>
      <VisitCounter />
          </div>
        </div>
      </article>

    </>
  );
};

export default Contacto;
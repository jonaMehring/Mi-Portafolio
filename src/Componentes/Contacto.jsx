import { useRef } from 'react';
import emailjs from "@emailjs/browser";
import '/Users/Jonis/mi-portafolio/src/styles/Contacto.css';
function Contacto() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mri9hiq', 'template_q29et6e', form.current, 'hSLwpQceaIvT3j-xJ')
            .then((result) => {
                console.log(result.text);
                alert('Mensaje enviado correctamente');
            }, (error) => {
                console.log(error.text);
                alert('Error al enviar el mensaje');
            });
    };

    return (
        <section id="contacto" className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Contacto</h2>
                <p className="contact-subtitle">¿Tenés un proyecto o idea? ¡Escribime!</p>

                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                    <input type="text" name="from_name" placeholder="Tu nombre" required />
                    <input type="email" name="from_email" placeholder="Tu email" required />
                    <textarea name="message" rows="5" placeholder="Tu mensaje" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>

    );

}
export default Contacto;
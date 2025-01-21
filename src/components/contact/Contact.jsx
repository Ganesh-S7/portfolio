import React,{useRef} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_csvwsk4', 'template_7k1057n', form.current, {
          publicKey: 'FMoWfIZNI3qoHaVp1',
        })
        alert("Mail Sent Sucessfully!");
        e.target.reset()
    };
  return (
    <>
    <section className="contact-section wrapper" id="contact">
        <div className="skills-head">
            <div className="skills-head-container" data-aos="zoom-in-down">
                <h3>Contact</h3>
            </div>
        </div>
        <div className="contact-container">
            <div className="contact-content" data-aos="fade-right">
                <h3 className="contact-title">Talk to me</h3>
                <div className="contact-info">
                    <div className="contact-card">
                        <i class='bx bx-mail-send contact-card-icon'></i>
                        <h3 className="contact-card-title">Email</h3>
                        <p className="contact-card-data" id='contact-mail'>ganeshsganeshs20@gmail</p>
                        <a href="mailto:ganeshsganeshs20@gmail.com" className="contact-button" target="_blank" rel='noreferrer'>Write me <i className="bx bx-right-arrow-alt contact-button-icon"></i></a>
                    </div>
                    <div className="contact-card">
                        <i class="bx bxl-whatsapp contact-card-icon"></i>
                        <h3 className="contact-card-title">WhatsApp</h3>
                        <p className="contact-card-data">+91 7022898235</p>
                        <a href="https://wa.me/7022898735" className="contact-button" target="_blank" rel='noreferrer'>Write me <i className="bx bx-right-arrow-alt contact-button-icon"></i></a>
                    </div>
                    <div className="contact-card">
                        <i class="contact-card-icon uil uil-telegram-alt "></i>
                        <h3 className="contact-card-title">Telegram</h3>
                        <p className="contact-card-data">@Ganesh379</p>
                        <a href="https://t.me/Ganesh379" className="contact-button" target="_blank" rel='noreferrer'>Write me <i className="bx bx-right-arrow-alt contact-button-icon"></i></a>
                    </div>
                </div>
            </div>        
            <div className="contact-content"  data-aos="fade-left">
                <h3 className="contact-title">Get in touch</h3>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="contact-form-div">
                        <label className="contact-form-tag">Name</label>
                        <input 
                            type="text" 
                            className="contact-form-input" 
                            name='name' 
                            placeholder='Insert your name' 
                            required
                        />
                    </div>
                    <div className="contact-form-div">
                        <label className="contact-form-tag">Mail</label>
                        <input 
                            type="email" 
                            className="contact-form-input" 
                            name='email' 
                            placeholder='Insert your email' 
                            required
                        />
                    </div>
                    <div className="contact-form-div contact-form-area">
                        <label className="contact-form-tag">Message</label>
                        <textarea 
                            type="textarea" 
                            className="contact-form-input" 
                            name='message' 
                            placeholder='Write your message' 
                            cols='30'
                            rows='10'
                            required
                        />
                    </div>
                    <div className="contact-form-divs">
                        <button type='submit' className='contact-submit-button '>Say hello <i class="uil uil-message contact-button-icon"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact
import React,{useRef} from 'react'
import "../css/contact.css"
import {MdEmail} from "react-icons/md"
import {RiWhatsappFill} from "react-icons/ri"
import emailjs from "emailjs-com"

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gh1q04j', 'template_bx674in', form.current, 'hZQ3Y9GwSEcM62WD6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  
  return (
    <div id='contact'> 
          <p>Get In Touch</p>
    <h2>Contact Me</h2>
    <div className="contact__container">
      <div className="contact__options">
      <article className="contact__option">
          <MdEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>kushwahaabhi101@gmail.com</h5>
          <a href="mailto:kushwahaabhi101@gmail.com" rel="noreferrer" target="_blank">Send a message</a>
        </article>        <article className="contact__option">
          <RiWhatsappFill className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+91 8081637834</h5>
          <a href="https://wa.me/+918081637834" rel="noreferrer" target="_blank">Send a message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name'  required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submil' className='btn--submit'>Submit</button>
      </form>
    </div>

    </div>
  )

}

export default Contact
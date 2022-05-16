import React, { useState } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [result, setResult] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAIL_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    setResult(true)
  };


  return (
    <div id="contact" className="page">
      <h1>Get in touch</h1>
      <form action="" onSubmit={sendEmail}>
        <div className="form-section">
          <span>Name</span>
          <input className="input" type="text" name="Name" required />
        </div>
        <div className="form-section">
          <span>Email</span>
          <input className="input" type="text" name="Email" required />
        </div>
        <div className="form-section">
          <span>Message</span>
          <textarea className="input" id="message-input" type="text" name="Message" required />
        </div>
        <button>Send</button>
        <div>{result ? <div>Message sent</div> : null}</div>
      </form>

      <div className="iconContainer">

        <a target='_blank' href="https://www.linkedin.com/in/serena-graham-8a2b7a200/">
          <p>Find me on LinkedIn</p>
          <FaLinkedin className="icon" />
        </a>
        <a target='_blank' href="https://github.com/SerenaElizabeth">
          <p>See my projects on github</p>
          <FaGithub className="icon" />
        </a>

      </div>
    </div>
  );
}

export default Contact;

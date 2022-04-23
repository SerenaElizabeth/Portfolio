import React, { useState } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';

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
      <h1>Contact Me!</h1>
      <form action="" onSubmit={sendEmail}>
        <div className="form-section">
          <span>Name</span>
          <input type="text" name="Name" required />
        </div>
        <div className="form-section">
          <span>Email</span>
          <input type="text" name="Email" required />
        </div>
        <div className="form-section">
          <span>Message</span>
          <input type="text" name="Message" required />
        </div>
        <button>Submit</button>
        <div>{result ? <div>Message sent</div> : null}</div>
      </form>
    </div>
  );
}

export default Contact;

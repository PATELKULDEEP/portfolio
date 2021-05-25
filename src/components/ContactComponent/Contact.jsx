import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./contactStyle.css";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const  sendEmail = (e) => {
    e.preventDefault();

    window.alert("Currently form is not working, Please contact with me through social medias's given in footer")

    // emailjs
    //   .sendForm(
    //     "service_eqp4gzb",
    //     "template_fksqbf6",
    //     { name: "name", email: "email",  message: "message" },
    //     "user_cYxQj4CXBNqFVuIqfsndF"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  }

  return (
    <>
      <div className='contact'>
        <h1>Contact</h1>
        <form onSubmit={sendEmail}>
          <div className='form-input'>
            <label>Full Name :</label>
            <input
              type='text'
              placeholder='Enter Your Name'
              onChange={(e) => setName(e.target.value)}
              name='name'
              id='name'
              required
            />
          </div>

          <div className='form-input'>
            <label>Email-Address :</label>
            <input
              type='email'
              placeholder='Enter Your Email-Address'
              onChange={(e) => setEmail(e.target.value)}
              name='email'
              id='email'
              required
            />
          </div>
          <div className='form-input'>
            <label>Subject :</label>
            <input
              type='text'
              placeholder='Enter Message Subject'
              onChange={(e) => setSubject(e.target.value)}
              name='subject'
            />
          </div>
          <div className='form-input'>
            <label>Message :</label>
            <textarea
              type='text'
              placeholder='Enter Your Message'
              rows='4'
              onChange={(e) => setMessage(e.target.value)}
              name='message'
              required
            ></textarea>
          </div>
          <button className='form-input' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;

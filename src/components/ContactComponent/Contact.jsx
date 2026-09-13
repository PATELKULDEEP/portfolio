import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./contactStyle.css";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    emailjs.sendForm(
      "service_eqp4gzb",
      "template_fksqbf6",
      e.currentTarget,
      "user_cYxQj4CXBNqFVuIqfsndF"
    ).then(() => {
      setStatus("Message sent successfully.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      e.currentTarget.reset();
    }).catch(() => {
      setStatus("The message could not be sent. Please try again or use the social links below.");
    }).finally(() => {
      setIsSending(false);
    });
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
              value={name}
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
              value={email}
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
              value={subject}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name='message'
              required
            ></textarea>
          </div>
          <button className='form-input' type='submit' disabled={isSending}>
            {isSending ? 'Sending...' : 'Send message'}
          </button>
          {status && <p className="form-status" role="status">{status}</p>}
        </form>
      </div>
    </>
  );
}

export default Contact;

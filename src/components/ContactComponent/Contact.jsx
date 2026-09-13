import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./contactStyle.css";

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_eqp4gzb";
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_fksqbf6";
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "user_cYxQj4CXBNqFVuIqfsndF";
const CONTACT_EMAIL = process.env.REACT_APP_CONTACT_EMAIL || "patelkuldeep0001@gmail.com";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const openMailClient = (form) => {
    const formData = new FormData(form);
    const subjectLine = formData.get("subject") || "Message from portfolio website";
    const body = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      "",
      formData.get("message"),
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    const form = e.currentTarget;
    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form,
      EMAILJS_PUBLIC_KEY
    ).then(() => {
      setStatus("Message sent successfully.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      form.reset();
    }).catch(() => {
      openMailClient(form);
      setStatus("Your email app has been opened with the message ready to send.");
    }).finally(() => {
      setIsSending(false);
    });
  };

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

import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

export default function ContactForm() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'Dinesh_Mail',
        'template_mzr32a1',
        formRef.current,
        'user_f5QuEjxxQNlkddHfE6whu'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <form className="form-group" ref={formRef} onSubmit={handleSubmit}>
        <label className="label" htmlFor="Name">
          Name
          <input
            className="input"
            type="text"
            required
            placeholder="Name"
            name="user_name"
          />
        </label>
        <label className="label" htmlFor="Subject">
          Subject
          <input
            className="input"
            type="text"
            required
            placeholder="Subject"
            name="user_subject"
          />
        </label>
        <label className="label" htmlFor="Email">
          Email
          <input
            className="input"
            type="text"
            required
            placeholder="Email"
            name="user_email"
          />
        </label>
        <label className="label" htmlFor="message">
          Message
          <textarea
            className="textarea"
            rows="5"
            required
            placeholder="Message"
            name="message"
          />
        </label>
        <button className="submit" type="submit">
          Submit
        </button>
        {done && 'Thank you...'}
      </form>
    </>
  );
}

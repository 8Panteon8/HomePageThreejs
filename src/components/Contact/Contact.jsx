import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Map from "../Map";

const Contact = () => {
  const ref = useRef();
  const initialFormState = {
    name: "",
    email: "",
    message: "",
  };
  const formChangeHandler = (name, value) => {
    setEnteredForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const [enteredForm, setEnteredForm] = useState(initialFormState);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        ref.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          setSuccess(true);
          setEnteredForm(initialFormState);
        },
        (error) => {
          setSuccess(false);
        }
      );
  };
  return (
    <section className="contact">
      <div className="container_contact">
        <div className="left">
          <form ref={ref} onSubmit={sendEmail}>
            <h1 className="title"> Contact Us</h1>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={enteredForm.name}
              onChange={(e) => formChangeHandler("name", e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={enteredForm.email}
              onChange={(e) => formChangeHandler("email", e.target.value)}
            />
            <textarea
              rows="10"
              placeholder="Write your message"
              name="message"
              value={enteredForm.message}
              onChange={(e) => formChangeHandler("message", e.target.value)}
            />
            <button type="submit">Send</button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </form>
        </div>
        <div className="right">
          <Map />
        </div>
      </div>
    </section>
  );
};
export default Contact;

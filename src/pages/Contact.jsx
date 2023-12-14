import React from "react";
import "../stylesPages/Contactame.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("https://formspree.io/f/xgegwwka");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <article className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </article>
  );
};

export default Contact;

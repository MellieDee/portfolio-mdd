import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';



function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  // useState Hook to handle error state
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  // ---------- Handle Change is Sync UI input with internal state of form STARTS ---------

  // Define the handleChange function --
  // This function syncs internal state of the component formState with the user input from the DOM
  // onChange event listener ensures handleChange function fires whenever a keystroke is typed into the input field for name

  function handleChange(e) {

    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);

      // isValid Conditional statement:
      if (!isValid) {
        setErrorMessage('Your email is invalid.')
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) { setFormState({ ...formState, [e.target.name]: e.target.value }) }
  }
  console.log('errorMessage', errorMessage);

  // setFormState function updates formState value for the name 
  // assign value taken from input field in the UI with e.target.value 
  // assign this value to the property formState.name. 
  //use spread operator, ...formState, to retain the other key-value pairs in this object.
  // (Without the spread operator, the formState object would be overwritten to only contain the name: value key pair)

  //console.log(formState) - to confirm syncing wth UI

  // ------------ Handle Change is Sync UI input with internal state of form ENDS ---------



  // ----------------------------- SUBMIT form STARTS ----------------------------------
  function handleSubmit(e) {
    e.preventDefault();
    //console.log(formState); - confirm data is captured
  }
  //would need to add more for BE functionality - this is enuf to transmit data from FE
  // ----------------------------------- SUBMIT form ENDS ------------------------------


  return (
    <section className="cl-wrapper px-3">
      <div className="page-text">
        <h2>How to Reach Me</h2>
        <p className="cta">Love to chat with you about next steps to bring your designs to life, about what silly thing your pet did today, or about your favorite restaurant. Feel free to reach out; I'm here!
        </p>
      </div>

      <div className="contact-addy">
        <address>
          Sacramento, Ca 95835<br />
          916-596-0496<br />
          <a href="mailto:ReachMe@MelanlieDubberley.com">MellieDeeDevelops@outlook.com</a>
        </address>
      </div>

      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name">Your Name:</label>
          <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div className="form-row">
          <label htmlFor="email">Your Email address:</label>
          <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
        </div>
        <div className="form-row">
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <div className="form-row">
          <button className="" data-testid="cfButton" type="submit">Send a Byte</button>
        </div>
      </form>
    </section>
  )

}

export default Contact
import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  const [result, setResult] = useState(""); // 👈 state add

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "05e8fc4a-db7c-42a1-b3cd-9716a2709c73"); // 👈 apni web3forms key yahan dalna

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("✅ Email sent successfully"); // 👈 Alert show karega
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      alert("❌ Failed to send email, try again."); // 👈 error alert bhi
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me
            a message about anything that you want me to work on. You can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>jassirhashmi327@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+92 336-478-2362</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Karachi, Pakistan</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />

          <label>Your Email</label>
          <input type="email" name="email" placeholder='Enter your email' required />

          <label>Write your message here</label>
          <textarea name="message" rows='8' placeholder='Enter your message' required></textarea>

          <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

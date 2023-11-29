import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Validate email address
    const emailValue = form.current.user_email.value;
    if (!emailValue.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    
    setLoading(true);
    
    emailjs
      .sendForm(
        "service_46h6ka9",
        "template_37wpqmk",
        form.current,
        "HWRMNgJwjfZwsxrsm"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus("success");
          form.current.reset(formStatus);
          setTimeout(() => {
            setFormStatus(null);
          }, 4000);
        },
        (error) => {
          console.log(error.text);
          setFormStatus("error");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };
  
  

  return (
    <div className="contact-contact" id="contact">
         
      <div className="contact">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            className="contact-name"
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
          />
          <label>Email</label>
          <input
            className="contact-email"
            type="email"
            name="user_email"
            placeholder="Enter your email"
            required
          />
          <label>Message</label>
          <textarea
            className="contact-textarea"
            name="message"
            placeholder="Enter your message"
            required
          />
             <div className="form">
      
      {loading && <p style={{ color: "blue" }}>Sending...</p>}
        {formStatus === "success" && (
          <p style={{  color: "green" }}>Form sent successfully! Thank you!</p>
          
        )}
        {formStatus === "error" && (
          <p style={{ color: "red" }}>Error sending the form. Please try again.</p>
        )}
      
      </div>
          <input className="button" type="submit" value="Send" />
       
        </form>
      </div>
      <div className="contact-ste">
        <p data-text="𝕊𝕥𝕖𝕡𝕒𝕟" className="navbar-text">
          𝕊𝕥𝕖𝕡𝕒𝕟
        </p>
        <p className="contact-step">
          © 𝟐𝟎𝟐𝟑 𝐒𝐭𝐞𝐩𝐚𝐧 𝐒𝐡𝐚𝐭𝐯𝐨𝐫𝐲𝐚𝐧. 𝐀𝐥𝐥 𝐫𝐢𝐠𝐡𝐭𝐬 𝐫𝐞𝐬𝐞𝐫𝐕𝐞𝐝.
        </p>
      </div>
    </div>
  );
};

export default Contact;

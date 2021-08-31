import React from "react";

const Contact = () => {
  return (
    <>
      <div className="full-contact">
        <div className="contact">
          <div className="container-fluid">
            <div className="row">
              <div className="col-10 offset-1 contact-content">
                <div className="contact-phone">
                  <p>Phone</p>
                  <p>+91 9123459798</p>
                </div>
                <div className="contact-email">
                  <p>Email</p>
                  <p>Ajay@rathod.com</p>
                </div>
                <div className="contact-address">
                  <p>Address</p>
                  <p>Out Of Earth (Mars Planet)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6 mx-auto contact-form-content">
                <div className="contact-form-heading">
                  <h1>Get In Touch</h1>
                </div>
                <div className="col-md-4 offset-1 contact-input">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div className="contact-form-msg">
                  <textarea
                    name="text"
                    id="msg"
                    cols="84"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="contact-btn">
                  <button>Send Message</button>
                </div>
                <div className="dot">.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

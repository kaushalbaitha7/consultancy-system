import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/contact.css";
import PublicNavbar from "../../components/PublicNavbar";


function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: ""
  });


  const handleChange = (event) => {

    const {
      name,
      value
    } = event.target;


    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));

  };


  const handleSubmit = (event) => {

    event.preventDefault();

    alert(
      "Thank you. Our counselling team will contact you shortly."
    );

    setFormData({
      name: "",
      phone: "",
      email: "",
      course: "",
      message: ""
    });

  };


  return (

    <div className="contact-page">

      <PublicNavbar />


      {/* HERO */}

      <section className="contact-hero">

        <div className="contact-hero-inner">

          <span>
            CONTACT GYANGURU
          </span>

          <h1>
            Let's talk about
            <br />
            <strong>your next step.</strong>
          </h1>

          <p>
            Have questions about medical admissions, courses or
            college options? Speak with our counselling team.
          </p>

        </div>

      </section>


      {/* CONTENT */}

      <section className="contact-content">


        {/* CONTACT INFORMATION */}

        <div className="contact-info">

          <h2>
            Get in touch.
          </h2>

          <p>
            Share your requirements with us and our team can
            help you understand the next step in your medical
            admission journey.
          </p>


          <div className="contact-info-item">

            <div className="contact-info-icon">
              T
            </div>

            <div>

              <strong>
                Phone
              </strong>

              <span>
                +91 XXXXX XXXXX
              </span>

            </div>

          </div>


          <div className="contact-info-item">

            <div className="contact-info-icon">
              E
            </div>

            <div>

              <strong>
                Email
              </strong>

              <span>
                info@gyanguru.com
              </span>

            </div>

          </div>


          <div className="contact-info-item">

            <div className="contact-info-icon">
              L
            </div>

            <div>

              <strong>
                Office
              </strong>

              <span>
                Consultancy Office
                <br />
                India
              </span>

            </div>

          </div>

        </div>


        {/* FORM */}

        <div className="contact-form-card">

          <h2>
            Talk to a counsellor
          </h2>

          <p>
            Fill in your details and tell us what you need help
            with.
          </p>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >


            <div className="contact-field">

              <label htmlFor="name">
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

            </div>


            <div className="contact-field">

              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
              />

            </div>


            <div className="contact-field">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
              />

            </div>


            <div className="contact-field">

              <label htmlFor="course">
                Interested Course
              </label>

              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select course
                </option>

                <option value="MBBS">
                  MBBS
                </option>

                <option value="BDS">
                  BDS
                </option>

                <option value="BAMS">
                  BAMS
                </option>

                <option value="Nursing">
                  Nursing
                </option>

                <option value="PG Medical">
                  PG Medical
                </option>

              </select>

            </div>


            <div className="contact-field full">

              <label htmlFor="message">
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what you need help with..."
                required
              />

            </div>


            <button
              type="submit"
              className="contact-submit"
            >
              Send Enquiry →
            </button>


          </form>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="public-footer">

        <div className="footer-inner">

          <div className="footer-brand">

            <div className="footer-brand-name">
              GYANGURU
            </div>

            <div className="footer-brand-subtitle">
              CONSULTANCY
            </div>

            <p>
              Medical admission guidance for students
              and families.
            </p>

          </div>


          <div className="footer-column">

            <h4>Explore</h4>

            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/courses">Medical Courses</Link>
            <Link to="/colleges">Colleges</Link>

          </div>


          <div className="footer-column">

            <h4>Support</h4>

            <Link to="/services">Services</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Student Login</Link>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} GyanGuru Consultancy.
            All rights reserved.
          </span>

          <span>
            Medical Admission Guidance
          </span>

        </div>

      </footer>

    </div>

  );

}


export default Contact;
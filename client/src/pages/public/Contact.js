import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/public.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
  };

  return (
    <div className="gyanguru-site">

      {/* NAVBAR */}
      <header className="public-navbar">

        <div className="navbar-inner">

          <Link to="/" className="brand">

            <div className="brand-mark">
              G
            </div>

            <div className="brand-text">

              <div className="brand-name">
                GYANGURU
              </div>

              <div className="brand-subtitle">
                CONSULTANCY
              </div>

            </div>

          </Link>


          <nav className="desktop-navigation">

            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/courses">Medical Courses</Link>
            <Link to="/colleges">Colleges</Link>
            <Link to="/services">Services</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/contact">Contact</Link>

          </nav>


          <Link
            to="/login"
            className="student-login-button"
          >
            Student Login
            <span>→</span>
          </Link>

        </div>

      </header>


      {/* HERO */}
      <section className="inner-page-hero contact-page-hero">

        <div className="inner-page-content">

          <span>
            CONTACT GYANGURU
          </span>

          <h1>
            Let's discuss your
            <br />
            <strong>medical journey.</strong>
          </h1>

          <p>
            Have questions about medical admissions, courses,
            colleges or counselling? Our team is here to help.
          </p>

        </div>

      </section>


      {/* CONTACT MAIN */}
      <section className="contact-main-section">

        <div className="section-container">

          <div className="contact-main-grid">


            {/* INFORMATION */}
            <div className="contact-information">

              <span className="contact-overline">
                GET IN TOUCH
              </span>

              <h2>
                Speak with
                <br />
                GyanGuru.
              </h2>

              <p>
                Tell us what you need help with and our
                counselling team can guide you towards the
                appropriate next step.
              </p>


              <div className="contact-information-list">

                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    01
                  </div>

                  <div>

                    <span>
                      PHONE
                    </span>

                    <strong>
                      +91 99999 99999
                    </strong>

                  </div>

                </div>


                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    02
                  </div>

                  <div>

                    <span>
                      EMAIL
                    </span>

                    <strong>
                      info@gyanguru.com
                    </strong>

                  </div>

                </div>


                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    03
                  </div>

                  <div>

                    <span>
                      CONSULTANCY
                    </span>

                    <strong>
                      Medical Admission Guidance
                    </strong>

                  </div>

                </div>

              </div>

            </div>


            {/* FORM */}
            <div className="contact-form-card">

              {submitted ? (

                <div className="contact-success">

                  <div className="contact-success-icon">
                    ✓
                  </div>

                  <span>
                    REQUEST RECEIVED
                  </span>

                  <h3>
                    Thank you for contacting GyanGuru.
                  </h3>

                  <p>
                    Your enquiry has been recorded.
                    Our counselling team will get in touch
                    with you.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);

                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        course: "",
                        message: "",
                      });
                    }}
                    className="contact-form-reset"
                  >
                    Send Another Enquiry
                  </button>

                </div>

              ) : (

                <form onSubmit={handleSubmit}>

                  <div className="contact-form-heading">

                    <span>
                      ENQUIRY FORM
                    </span>

                    <h3>
                      Tell us how we can help.
                    </h3>

                  </div>


                  <div className="contact-form-grid">

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
                        Interested In
                      </label>

                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                      >

                        <option value="">
                          Select a course
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

                        <option value="General Guidance">
                          General Admission Guidance
                        </option>

                      </select>

                    </div>


                    <div className="contact-field full">

                      <label htmlFor="message">
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what you would like guidance with..."
                        rows="5"
                      />

                    </div>

                  </div>


                  <button
                    type="submit"
                    className="contact-submit-button"
                  >
                    Submit Enquiry
                    <span>→</span>
                  </button>

                  <p className="contact-form-note">
                    By submitting this form, you are requesting
                    medical admission guidance from GyanGuru
                    Consultancy.
                  </p>

                </form>

              )}

            </div>

          </div>

        </div>

      </section>


      {/* QUICK OPTIONS */}
      <section className="contact-options-section">

        <div className="section-container">

          <div className="section-heading centered">

            <span>
              QUICK SUPPORT
            </span>

            <h2>
              Choose how you'd like to proceed.
            </h2>

          </div>


          <div className="contact-options-grid">

            <div className="contact-option-card">

              <span>
                01
              </span>

              <h3>
                Student Login
              </h3>

              <p>
                Already registered with GyanGuru?
                Access your student dashboard.
              </p>

              <Link to="/login">
                Login →
              </Link>

            </div>


            <div className="contact-option-card">

              <span>
                02
              </span>

              <h3>
                Admission Guidance
              </h3>

              <p>
                Need help understanding your medical
                admission options?
              </p>

              <a href="#contact-form">
                Send Enquiry →
              </a>

            </div>


            <div className="contact-option-card">

              <span>
                03
              </span>

              <h3>
                College Guidance
              </h3>

              <p>
                Want to understand suitable college
                options for your course?
              </p>

              <Link to="/colleges">
                Explore Colleges →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="public-page-cta">

        <div>

          <span>
            GYANGURU CONSULTANCY
          </span>

          <h2>
            Your medical future deserves clarity.
          </h2>

          <p>
            Take the first step towards a more informed
            admission decision.
          </p>

        </div>

        <div className="public-page-cta-actions">

          <a
            href="tel:+919999999999"
            className="primary-button"
          >
            Call Counsellor →
          </a>

          <Link
            to="/login"
            className="secondary-button"
          >
            Student Login
          </Link>

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

            <h4>
              Explore
            </h4>

            <Link to="/">
              Home
            </Link>

            <Link to="/about">
              About Us
            </Link>

            <Link to="/courses">
              Medical Courses
            </Link>

            <Link to="/colleges">
              Colleges
            </Link>

          </div>


          <div className="footer-column">

            <h4>
              Support
            </h4>

            <Link to="/services">
              Services
            </Link>

            <Link to="/reviews">
              Reviews
            </Link>

            <Link to="/contact">
              Contact
            </Link>

            <Link to="/login">
              Student Login
            </Link>

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
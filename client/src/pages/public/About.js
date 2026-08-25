import React from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";
import "../styles/navbar.css";
import "../styles/footer.css";

function About() {
  return (
    <div className="gyanguru-site">

      {/* NAVBAR */}
      <header className="public-navbar">
        <div className="navbar-inner">

          <Link to="/" className="brand">
            <div className="brand-mark">G</div>

            <div className="brand-text">
              <div className="brand-name">GYANGURU</div>
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


      {/* PAGE HERO */}
      <section className="inner-page-hero">

        <div className="inner-page-content">

          <span>
            ABOUT GYANGURU
          </span>

          <h1>
            Guiding students
            <br />
            towards the right
            <strong> medical future.</strong>
          </h1>

          <p>
            GyanGuru Consultancy is a specialised medical
            admission consultancy dedicated to helping students
            and families make informed decisions about medical
            education and admissions.
          </p>

        </div>

      </section>


      {/* INTRODUCTION */}
      <section className="about-main-section">

        <div className="section-container">

          <div className="about-main-grid">

            <div>

              <span className="about-overline">
                WHO WE ARE
              </span>

              <h2>
                Medical admission
                <br />
                guidance with clarity.
              </h2>

            </div>

            <div className="about-main-text">

              <p>
                Choosing a medical college is one of the most
                important decisions in a student's academic
                journey. With multiple courses, colleges,
                counselling procedures and admission requirements,
                the process can often become difficult to understand.
              </p>

              <p>
                GyanGuru Consultancy provides structured guidance
                throughout this journey. Our focus is entirely on
                medical education and admission-related support.
              </p>

              <p>
                From understanding available options to selecting
                suitable colleges and navigating the admission
                process, our objective is to make every important
                step easier for students and their families.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SPECIALISATION */}
      <section className="specialisation-section">

        <div className="section-container">

          <div className="section-heading centered">

            <span>
              OUR SPECIALISATION
            </span>

            <h2>
              Focused only on medical education.
            </h2>

            <p>
              GyanGuru does not try to cover every academic field.
              Our services are designed specifically around
              medical admission and counselling.
            </p>

          </div>


          <div className="specialisation-grid">

            <div className="specialisation-card">
              <span>01</span>
              <h3>Undergraduate Medical</h3>
              <p>
                Guidance for MBBS, BDS, BAMS and Nursing
                admission pathways.
              </p>
            </div>

            <div className="specialisation-card">
              <span>02</span>
              <h3>Postgraduate Medical</h3>
              <p>
                Support and guidance for postgraduate
                medical admission opportunities.
              </p>
            </div>

            <div className="specialisation-card">
              <span>03</span>
              <h3>College Selection</h3>
              <p>
                Helping students understand college options
                and make informed choices.
              </p>
            </div>

            <div className="specialisation-card">
              <span>04</span>
              <h3>Counselling Support</h3>
              <p>
                Structured assistance throughout the
                counselling and admission journey.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* OUR APPROACH */}
      <section className="approach-section">

        <div className="section-container">

          <div className="approach-grid">

            <div className="approach-heading">

              <span>
                OUR APPROACH
              </span>

              <h2>
                Simple.
                <br />
                Structured.
                <br />
                Student-focused.
              </h2>

            </div>


            <div className="approach-steps">

              <div className="approach-step">

                <div className="approach-number">
                  01
                </div>

                <div>
                  <h3>Understand</h3>

                  <p>
                    Understand the student's requirements,
                    academic position and admission goals.
                  </p>
                </div>

              </div>


              <div className="approach-step">

                <div className="approach-number">
                  02
                </div>

                <div>
                  <h3>Guide</h3>

                  <p>
                    Provide relevant information about courses,
                    colleges and admission pathways.
                  </p>
                </div>

              </div>


              <div className="approach-step">

                <div className="approach-number">
                  03
                </div>

                <div>
                  <h3>Support</h3>

                  <p>
                    Assist students through counselling,
                    documentation and important admission steps.
                  </p>
                </div>

              </div>


              <div className="approach-step">

                <div className="approach-number">
                  04
                </div>

                <div>
                  <h3>Move Forward</h3>

                  <p>
                    Help students proceed towards their chosen
                    medical education path with greater confidence.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="public-page-cta">

        <div>

          <span>
            NEED MEDICAL ADMISSION GUIDANCE?
          </span>

          <h2>
            Let's plan your next step.
          </h2>

          <p>
            Speak with GyanGuru and understand your available
            medical admission options.
          </p>

        </div>

        <div className="public-page-cta-actions">

          <Link
            to="/login"
            className="primary-button"
          >
            Student Login →
          </Link>

          <Link
            to="/contact"
            className="secondary-button"
          >
            Contact Us
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

export default About;
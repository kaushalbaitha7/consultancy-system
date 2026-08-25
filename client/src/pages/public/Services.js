import React from "react";
import { Link } from "react-router-dom";
import "../styles/colleges.css";
import "../styles/navbar.css";
import "../styles/footer.css";
const services = [
  {
    number: "01",
    title: "Medical Admission Guidance",
    description:
      "Understand the admission journey, important stages and available options with structured guidance.",
  },
  {
    number: "02",
    title: "College Selection",
    description:
      "Evaluate relevant medical college options according to your academic position and preferences.",
  },
  {
    number: "03",
    title: "Counselling Support",
    description:
      "Receive assistance in understanding counselling procedures and making informed choices.",
  },
  {
    number: "04",
    title: "Course Guidance",
    description:
      "Understand different medical education pathways including MBBS, BDS, BAMS, Nursing and PG Medical.",
  },
  {
    number: "05",
    title: "Admission Assistance",
    description:
      "Get guidance through important admission stages, documentation and procedural requirements.",
  },
  {
    number: "06",
    title: "Student & Parent Support",
    description:
      "Clear communication and guidance for students and families throughout the admission journey.",
  },
];

function Services() {
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
      <section className="inner-page-hero services-page-hero">

        <div className="inner-page-content">

          <span>
            OUR SERVICES
          </span>

          <h1>
            Guidance at every
            <br />
            <strong>important step.</strong>
          </h1>

          <p>
            From understanding your medical education options
            to navigating counselling and admission, GyanGuru
            provides structured support throughout the journey.
          </p>

        </div>

      </section>


      {/* SERVICES INTRO */}
      <section className="public-intro-section">

        <div className="section-container">

          <div className="public-intro-grid">

            <div>

              <span>
                WHAT WE DO
              </span>

              <h2>
                One journey.
                <br />
                Complete guidance.
              </h2>

            </div>

            <div>

              <p>
                Medical admissions can involve many decisions,
                from choosing the right course and college to
                understanding counselling and admission procedures.
              </p>

              <p>
                Our role is to make those decisions easier to
                understand by providing clear, relevant and
                student-focused guidance.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SERVICES GRID */}
      <section className="services-directory-section">

        <div className="section-container">

          <div className="section-heading centered">

            <span>
              GYANGURU SUPPORT
            </span>

            <h2>
              Built around your admission journey.
            </h2>

          </div>


          <div className="services-directory-grid">

            {services.map((service) => (

              <article
                className="service-large-card"
                key={service.number}
              >

                <div className="service-large-number">
                  {service.number}
                </div>

                <div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <Link to="/contact">
                    Know More →
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* PROCESS */}
      <section className="service-process-section">

        <div className="section-container">

          <div className="section-heading centered">

            <span>
              SIMPLE PROCESS
            </span>

            <h2>
              How GyanGuru works with students.
            </h2>

          </div>


          <div className="service-process-grid">

            <div className="service-process-card">

              <span>01</span>

              <h3>
                Tell Us
              </h3>

              <p>
                Share your academic background and medical
                admission requirements.
              </p>

            </div>


            <div className="service-process-card">

              <span>02</span>

              <h3>
                Understand
              </h3>

              <p>
                Our counsellors understand your requirements
                and explain the relevant options.
              </p>

            </div>


            <div className="service-process-card">

              <span>03</span>

              <h3>
                Choose
              </h3>

              <p>
                Compare suitable pathways and make an
                informed decision.
              </p>

            </div>


            <div className="service-process-card">

              <span>04</span>

              <h3>
                Proceed
              </h3>

              <p>
                Move forward with counselling and admission
                support.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="public-page-cta">

        <div>

          <span>
            READY TO BEGIN?
          </span>

          <h2>
            Your next step starts with clarity.
          </h2>

          <p>
            Speak with our team about your medical admission
            requirements.
          </p>

        </div>

        <div className="public-page-cta-actions">

          <Link
            to="/contact"
            className="primary-button"
          >
            Talk to a Counsellor →
          </Link>

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

export default Services;
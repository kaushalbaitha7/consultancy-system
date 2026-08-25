import React from "react";
import { Link } from "react-router-dom";

import "../../styles/services.css";
import PublicNavbar from "../../components/PublicNavbar";


const services = [
  {
    number: "01",
    title: "College Selection",
    description:
      "Understand relevant medical college options and evaluate them according to your admission goals."
  },

  {
    number: "02",
    title: "Counselling Guidance",
    description:
      "Receive structured assistance in understanding counselling stages, choices and important decisions."
  },

  {
    number: "03",
    title: "Admission Assistance",
    description:
      "Get support in understanding important admission procedures, documents and next steps."
  },

  {
    number: "04",
    title: "Course Guidance",
    description:
      "Understand medical education pathways and identify the direction that best matches your goals."
  }
];


function Services() {

  return (

    <div className="services-page">

      <PublicNavbar />


      {/* HERO */}

      <section className="services-hero">

        <div className="services-hero-inner">

          <span>
            OUR SERVICES
          </span>

          <h1>
            Support at every
            <br />
            <strong>important step.</strong>
          </h1>

          <p>
            GyanGuru provides focused guidance for students
            navigating medical education and admission decisions.
          </p>

        </div>

      </section>


      {/* CONTENT */}

      <section className="services-content">


        <div className="services-page-grid">

          {services.map((service) => (

            <article
              className="services-page-card"
              key={service.number}
            >

              <div className="service-page-number">
                {service.number}
              </div>


              <div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </div>

            </article>

          ))}

        </div>


        {/* PROCESS */}

        <div className="service-process">

          <h2>
            A simple approach to guidance.
          </h2>

          <p>
            We keep the process structured so students can
            understand their options before taking important
            admission decisions.
          </p>


          <div className="process-steps">

            <div className="process-step">

              <strong>01</strong>

              <span>
                Understand your requirements
              </span>

            </div>


            <div className="process-step">

              <strong>02</strong>

              <span>
                Explore relevant options
              </span>

            </div>


            <div className="process-step">

              <strong>03</strong>

              <span>
                Discuss your choices
              </span>

            </div>


            <div className="process-step">

              <strong>04</strong>

              <span>
                Proceed with confidence
              </span>

            </div>

          </div>

        </div>


        {/* CTA */}

        <div className="services-cta">

          <div>

            <span>
              NEED GUIDANCE?
            </span>

            <h2>
              Start with a conversation.
            </h2>

          </div>

          <Link
            to="/contact"
            className="primary-button"
          >
            Talk to a Counsellor →
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
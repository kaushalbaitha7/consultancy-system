import React from "react";
import { Link } from "react-router-dom";

import "../../styles/about.css";
import PublicNavbar from "../../components/PublicNavbar";


function About() {

  return (

    <div className="about-page">

      <PublicNavbar />


      {/* HERO */}

      <section className="about-hero">

        <div className="about-hero-inner">

          <span>ABOUT GYANGURU</span>

          <h1>
            Guidance with
            <br />
            <strong>clarity and purpose.</strong>
          </h1>

          <p>
            GyanGuru Consultancy is dedicated to helping students
            and families navigate medical education and admission
            decisions with confidence.
          </p>

        </div>

      </section>


      {/* INTRO */}

      <section className="about-content">

        <div className="about-intro">

          <div>

            <span>WHO WE ARE</span>

            <h2>
              Focused on
              <br />
              medical education.
            </h2>

          </div>


          <div>

            <p>
              GyanGuru Consultancy is a specialised medical
              admission consultancy created to support students
              who are planning their medical education journey.
            </p>

            <p>
              We focus on relevant medical pathways including
              undergraduate and postgraduate education, helping
              students understand their choices before making
              important admission decisions.
            </p>

          </div>

        </div>


        {/* VALUES */}

        <div className="about-values">

          <article className="about-value-card">

            <span>01</span>

            <h3>Clarity</h3>

            <p>
              We simplify complex admission information so
              students can understand their available options.
            </p>

          </article>


          <article className="about-value-card">

            <span>02</span>

            <h3>Guidance</h3>

            <p>
              We provide structured support through important
              stages of the medical admission journey.
            </p>

          </article>


          <article className="about-value-card">

            <span>03</span>

            <h3>Student First</h3>

            <p>
              Our approach keeps the student's academic goals
              and circumstances at the centre of every discussion.
            </p>

          </article>

        </div>


        {/* JOURNEY */}

        <div className="about-journey">

          <div>

            <span>OUR APPROACH</span>

            <h2>
              Understand.
              <br />
              Decide.
              <br />
              Proceed.
            </h2>

          </div>


          <div className="about-journey-text">

            <p>
              Choosing a medical education pathway is an important
              decision. GyanGuru helps students first understand
              their options, then evaluate relevant choices and
              finally move forward with greater confidence.
            </p>

            <p>
              Our objective is not to overwhelm students with
              information, but to make the right information easier
              to understand and use.
            </p>

          </div>

        </div>


        {/* CTA */}

        <div className="about-cta">

          <div>

            <span>READY TO BEGIN?</span>

            <h2>
              Let us understand your medical admission journey.
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


export default About;
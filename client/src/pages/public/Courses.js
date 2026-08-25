import React from "react";
import { Link } from "react-router-dom";
import "../../styles/public.css";

const courses = [
  {
    number: "01",
    code: "UG",
    title: "MBBS",
    subtitle: "Bachelor of Medicine & Bachelor of Surgery",
    description:
      "Guidance for students looking to pursue undergraduate medical education, from understanding the admission pathway to selecting suitable college options.",
    points: [
      "Medical admission guidance",
      "College selection support",
      "Counselling guidance",
    ],
  },
  {
    number: "02",
    code: "UG",
    title: "BDS",
    subtitle: "Bachelor of Dental Surgery",
    description:
      "Understand dental education opportunities and receive structured guidance while exploring BDS admission and college options.",
    points: [
      "BDS admission guidance",
      "College option guidance",
      "Counselling support",
    ],
  },
  {
    number: "03",
    code: "UG",
    title: "BAMS",
    subtitle: "Bachelor of Ayurvedic Medicine & Surgery",
    description:
      "Explore Ayurveda medical education and understand the available BAMS admission pathways with professional guidance.",
    points: [
      "BAMS pathway guidance",
      "College selection",
      "Admission assistance",
    ],
  },
  {
    number: "04",
    code: "UG",
    title: "NURSING",
    subtitle: "Nursing Education",
    description:
      "Guidance for students interested in nursing education, including understanding course options and suitable institutions.",
    points: [
      "Course guidance",
      "Institution selection",
      "Admission support",
    ],
  },
  {
    number: "05",
    code: "PG",
    title: "PG MEDICAL",
    subtitle: "Postgraduate Medical Education",
    description:
      "Structured guidance for students planning their next academic step in postgraduate medical education.",
    points: [
      "PG admission guidance",
      "Specialisation awareness",
      "College selection support",
    ],
  },
];

function Courses() {
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
      <section className="inner-page-hero courses-page-hero">

        <div className="inner-page-content">

          <span>
            MEDICAL COURSES
          </span>

          <h1>
            Your medical
            <br />
            education,
            <strong> your path.</strong>
          </h1>

          <p>
            Explore the medical education pathways supported by
            GyanGuru Consultancy and understand where your
            admission journey can begin.
          </p>

        </div>

      </section>


      {/* INTRO */}
      <section className="public-intro-section">

        <div className="section-container">

          <div className="public-intro-grid">

            <div>

              <span>
                OUR FOCUS
              </span>

              <h2>
                Medical education,
                <br />
                nothing else.
              </h2>

            </div>

            <div>

              <p>
                GyanGuru Consultancy is focused specifically on
                medical education and admission guidance.
              </p>

              <p>
                Our services cover selected undergraduate and
                postgraduate medical pathways so that students
                can receive relevant rather than generic guidance.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* COURSES */}
      <section className="courses-directory-section">

        <div className="section-container">

          <div className="section-heading centered">

            <span>
              EXPLORE PATHWAYS
            </span>

            <h2>
              Choose your medical direction.
            </h2>

            <p>
              Start by understanding the course that matches
              your academic goals.
            </p>

          </div>


          <div className="courses-directory-grid">

            {courses.map((course) => (

              <article
                className="course-large-card"
                key={course.number}
              >

                <div className="course-card-top">

                  <span>
                    {course.code}
                  </span>

                  <strong>
                    {course.number}
                  </strong>

                </div>

                <h3>
                  {course.title}
                </h3>

                <h4>
                  {course.subtitle}
                </h4>

                <p>
                  {course.description}
                </p>

                <div className="course-points">

                  {course.points.map((point) => (

                    <div
                      className="course-point"
                      key={point}
                    >
                      <span>✓</span>
                      {point}
                    </div>

                  ))}

                </div>

                <Link to="/contact">
                  Get Guidance →
                </Link>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ADMISSION JOURNEY */}
      <section className="course-journey-section">

        <div className="section-container">

          <div className="section-heading centered">

            <span>
              YOUR JOURNEY
            </span>

            <h2>
              From aspiration to admission.
            </h2>

          </div>


          <div className="course-journey-grid">

            <div className="course-journey-card">

              <strong>01</strong>

              <h3>
                Explore
              </h3>

              <p>
                Understand the medical course and education
                pathway you are interested in.
              </p>

            </div>


            <div className="course-journey-card">

              <strong>02</strong>

              <h3>
                Understand
              </h3>

              <p>
                Learn about relevant admission requirements,
                options and important decisions.
              </p>

            </div>


            <div className="course-journey-card">

              <strong>03</strong>

              <h3>
                Select
              </h3>

              <p>
                Review suitable college and admission options
                according to your circumstances.
              </p>

            </div>


            <div className="course-journey-card">

              <strong>04</strong>

              <h3>
                Proceed
              </h3>

              <p>
                Move forward with counselling and admission
                assistance.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="public-page-cta">

        <div>

          <span>
            NOT SURE WHICH PATH IS RIGHT?
          </span>

          <h2>
            Let's understand your options.
          </h2>

          <p>
            Speak with GyanGuru before making an important
            medical education decision.
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
            to="/colleges"
            className="secondary-button"
          >
            Explore Colleges
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

export default Courses;
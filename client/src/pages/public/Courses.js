import React from "react";
import { Link } from "react-router-dom";

import "../../styles/courses.css";
import PublicNavbar from "../../components/PublicNavbar";


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
      "Counselling guidance"
    ]
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
      "Counselling support"
    ]
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
      "Admission assistance"
    ]
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
      "Admission support"
    ]
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
      "College selection support"
    ]
  }
];


function Courses() {

  return (

    <div className="courses-page">

      <PublicNavbar />


      {/* HERO */}

      <section className="courses-hero">

        <div className="courses-hero-inner">

          <span className="courses-hero-label">
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

      <section className="courses-content">

        <div className="courses-heading">

          <span>OUR FOCUS</span>

          <h2>
            Medical education,
            <br />
            nothing else.
          </h2>

          <p>
            GyanGuru Consultancy focuses specifically on medical
            education and admission guidance so students receive
            relevant rather than generic support.
          </p>

        </div>


        {/* COURSE GRID */}

        <div className="courses-grid">

          {courses.map((course) => (

            <article
              className="course-item"
              key={course.number}
            >

              <div className="course-item-number">
                {course.number}
              </div>

              <h3>
                {course.title}
              </h3>

              <p>
                <strong>
                  {course.subtitle}
                </strong>
              </p>

              <p>
                {course.description}
              </p>


              <ul className="course-points">

                {course.points.map((point) => (

                  <li key={point}>
                    ✓ {point}
                  </li>

                ))}

              </ul>


              <Link to="/contact">
                Get Guidance →
              </Link>

            </article>

          ))}

        </div>


        {/* INFORMATION */}

        <div className="course-info">

          <div>

            <h3>
              Choosing your pathway
            </h3>

            <p>
              Every student's journey is different. Understanding
              the course, admission pathway, college options and
              future direction can help you make a more informed
              decision.
            </p>

          </div>


          <div>

            <h3>
              Our guidance
            </h3>

            <ul>

              <li>
                Understand your course options
              </li>

              <li>
                Explore relevant college choices
              </li>

              <li>
                Understand counselling processes
              </li>

              <li>
                Receive admission assistance
              </li>

            </ul>

          </div>

        </div>


        {/* CTA */}

        <div className="courses-cta">

          <div>

            <span>
              NOT SURE WHICH PATH IS RIGHT?
            </span>

            <h2>
              Let's understand your options.
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


export default Courses;
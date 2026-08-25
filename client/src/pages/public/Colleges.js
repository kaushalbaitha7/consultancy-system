import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/colleges.css";
import PublicNavbar from "../../components/PublicNavbar";


const colleges = [
  {
    name: "Medical College Information",
    location: "State-wise College Options",
    description:
      "Explore medical college information and understand available admission opportunities."
  },

  {
    name: "UG Medical Colleges",
    location: "MBBS • BDS • BAMS",
    description:
      "Review undergraduate medical education options and suitable college pathways."
  },

  {
    name: "Nursing Institutions",
    location: "Nursing Education",
    description:
      "Explore institutions offering nursing education and understand admission options."
  },

  {
    name: "PG Medical Colleges",
    location: "Postgraduate Medical Education",
    description:
      "Understand postgraduate medical college options and specialisation pathways."
  },

  {
    name: "College Counselling",
    location: "Admission Guidance",
    description:
      "Receive guidance while comparing available colleges and making admission decisions."
  },

  {
    name: "Admission Opportunities",
    location: "Updated Information",
    description:
      "Stay informed about relevant medical admission opportunities and processes."
  }
];


function Colleges() {

  const [search, setSearch] = useState("");


  const filteredColleges = colleges.filter((college) => {

    const text =
      `${college.name} ${college.location} ${college.description}`
        .toLowerCase();

    return text.includes(search.toLowerCase());

  });


  return (

    <div className="colleges-page">

      <PublicNavbar />


      {/* HERO */}

      <section className="colleges-hero">

        <div className="colleges-hero-inner">

          <span>
            MEDICAL COLLEGES
          </span>

          <h1>
            Explore your
            <br />
            <strong>college options.</strong>
          </h1>

          <p>
            Understand medical college options and make informed
            decisions with guidance from GyanGuru Consultancy.
          </p>

        </div>

      </section>


      {/* CONTENT */}

      <section className="colleges-content">


        {/* SEARCH */}

        <div className="college-search-box">

          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search colleges, courses or locations..."
          />

        </div>


        {/* GRID */}

        <div className="college-grid">

          {filteredColleges.map((college, index) => (

            <article
              className="college-card"
              key={college.name}
            >

              <div className="college-card-image">
                {String(index + 1).padStart(2, "0")}
              </div>


              <div className="college-card-body">

                <h3>
                  {college.name}
                </h3>

                <div className="college-location">
                  {college.location}
                </div>

                <p>
                  {college.description}
                </p>

                <Link
                  to="/contact"
                  className="college-card-button"
                >
                  Ask About This →
                </Link>

              </div>

            </article>

          ))}

        </div>


        {filteredColleges.length === 0 && (

          <div className="college-no-results">

            No matching college information found.

          </div>

        )}


        {/* NOTE */}

        <div className="college-note">

          <strong>
            Important:
          </strong>{" "}

          College availability, eligibility, counselling rules
          and admission procedures can vary by course, state,
          authority and admission year. Students should verify
          applicable information before making final decisions.

        </div>


        {/* CTA */}

        <div className="college-cta">

          <div>

            <span>
              NEED HELP SELECTING?
            </span>

            <h2>
              Discuss your college options with us.
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


export default Colleges;
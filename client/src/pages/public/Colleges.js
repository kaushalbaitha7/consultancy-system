import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/courses.css";
import "../styles/navbar.css";
import "../styles/footer.css";

const collegeCategories = [
  {
    category: "UNDERGRADUATE",
    title: "MBBS Colleges",
    description:
      "Explore medical colleges offering undergraduate MBBS education and understand the admission pathway before making your choice.",
    tags: ["MBBS", "UG Medical", "NEET"],
  },
  {
    category: "DENTAL",
    title: "BDS Colleges",
    description:
      "Discover dental education options and get guidance on suitable colleges, admission requirements and counselling.",
    tags: ["BDS", "Dental", "UG"],
  },
  {
    category: "AYURVEDA",
    title: "BAMS Colleges",
    description:
      "Understand Ayurveda medical education opportunities and explore suitable BAMS college options.",
    tags: ["BAMS", "Ayurveda", "UG"],
  },
  {
    category: "NURSING",
    title: "Nursing Colleges",
    description:
      "Find nursing education opportunities and receive guidance for selecting an appropriate institution.",
    tags: ["Nursing", "Healthcare", "UG"],
  },
  {
    category: "POSTGRADUATE",
    title: "PG Medical Colleges",
    description:
      "Explore postgraduate medical education opportunities and make informed decisions about your next academic step.",
    tags: ["PG Medical", "Specialisation", "Medical"],
  },
];

function Colleges() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredColleges =
    activeCategory === "ALL"
      ? collegeCategories
      : collegeCategories.filter(
          (college) => college.category === activeCategory
        );

  const categories = [
    "ALL",
    "UNDERGRADUATE",
    "DENTAL",
    "AYURVEDA",
    "NURSING",
    "POSTGRADUATE",
  ];

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


      {/* HERO */}
      <section className="inner-page-hero colleges-page-hero">

        <div className="inner-page-content">

          <span>
            MEDICAL COLLEGES
          </span>

          <h1>
            Find the right
            <br />
            <strong>institution</strong>
            for your journey.
          </h1>

          <p>
            Choosing a medical college is an important decision.
            Explore your options with structured information and
            guidance from GyanGuru Consultancy.
          </p>

        </div>

      </section>


      {/* INTRO */}
      <section className="public-intro-section">

        <div className="section-container">

          <div className="public-intro-grid">

            <div>
              <span>COLLEGE DISCOVERY</span>

              <h2>
                Information first.
                <br />
                Decisions second.
              </h2>
            </div>

            <div>
              <p>
                Every student has different academic goals,
                preferences and circumstances. The right college
                therefore depends on more than simply finding a
                name on a list.
              </p>

              <p>
                GyanGuru helps students understand available
                options and evaluate them before taking important
                admission decisions.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* FILTER */}
      <section className="college-directory-section">

        <div className="section-container">

          <div className="section-heading">

            <span>
              EXPLORE CATEGORIES
            </span>

            <h2>
              Medical education pathways.
            </h2>

          </div>


          <div className="college-filter">

            {categories.map((category) => (

              <button
                type="button"
                key={category}
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>

            ))}

          </div>


          <div className="college-directory-grid">

            {filteredColleges.map((college, index) => (

              <article
                className="college-directory-card"
                key={college.title}
              >

                <div className="college-card-top">

                  <span>
                    {college.category}
                  </span>

                  <strong>
                    {String(index + 1).padStart(2, "0")}
                  </strong>

                </div>

                <h3>
                  {college.title}
                </h3>

                <p>
                  {college.description}
                </p>

                <div className="college-tags">

                  {college.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

                <Link to="/contact">
                  Get College Guidance →
                </Link>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="college-process-section">

        <div className="section-container">

          <div className="section-heading centered">

            <span>
              OUR APPROACH
            </span>

            <h2>
              How we help with college selection.
            </h2>

          </div>


          <div className="college-process-grid">

            <div>
              <strong>01</strong>
              <h3>Understand</h3>
              <p>
                Understand your academic position,
                preferences and admission requirements.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Compare</h3>
              <p>
                Review relevant college options and
                understand the differences between them.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Decide</h3>
              <p>
                Make a more informed decision based on
                your circumstances and goals.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Proceed</h3>
              <p>
                Move forward with counselling and
                admission support.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="public-page-cta">

        <div>

          <span>
            NEED HELP CHOOSING A COLLEGE?
          </span>

          <h2>
            Let's find the right path together.
          </h2>

          <p>
            Connect with GyanGuru for personalised medical
            admission guidance.
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

export default Colleges;
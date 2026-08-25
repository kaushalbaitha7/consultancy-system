import React from "react";
import { Link } from "react-router-dom";
import "../styles/reviews.css";
import "../styles/navbar.css";
import "../styles/footer.css";

const reviews = [
  {
    initials: "AS",
    name: "Aarav S.",
    course: "MBBS Aspirant",
    location: "Student",
    rating: 5,
    review:
      "The guidance helped us understand the admission process much more clearly. The team explained the available options patiently and helped us make a more informed decision.",
  },
  {
    initials: "PR",
    name: "Priya R.",
    course: "BAMS Aspirant",
    location: "Student",
    rating: 5,
    review:
      "We were confused about college options and counselling. GyanGuru made the process easier to understand and gave us proper direction at every step.",
  },
  {
    initials: "RK",
    name: "Rahul K.",
    course: "BDS Aspirant",
    location: "Student",
    rating: 5,
    review:
      "The counselling experience was professional and easy to follow. I especially appreciated the way different options were explained before making a decision.",
  },
  {
    initials: "NM",
    name: "Neha M.",
    course: "Nursing Aspirant",
    location: "Student",
    rating: 5,
    review:
      "The team was approachable and answered our questions clearly. It gave both me and my parents much more confidence during the admission process.",
  },
  {
    initials: "VK",
    name: "Vikram K.",
    course: "PG Medical Aspirant",
    location: "Student",
    rating: 5,
    review:
      "The guidance was structured and focused on what actually mattered for our admission journey. The overall experience was smooth and professional.",
  },
  {
    initials: "SD",
    name: "Sneha D.",
    course: "MBBS Aspirant",
    location: "Student",
    rating: 5,
    review:
      "A very helpful experience for our family. The counselling process was explained step by step and we felt much more prepared afterwards.",
  },
];

function Reviews() {
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
      <section className="inner-page-hero reviews-page-hero">

        <div className="inner-page-content">

          <span>
            STUDENT EXPERIENCES
          </span>

          <h1>
            Real journeys.
            <br />
            <strong>Real experiences.</strong>
          </h1>

          <p>
            Hear from students and families who have experienced
            the GyanGuru approach to medical admission guidance.
          </p>

        </div>

      </section>


      {/* INTRO */}
      <section className="reviews-intro-section">

        <div className="section-container">

          <div className="reviews-intro-content">

            <span>
              TRUST BUILT OVER TIME
            </span>

            <h2>
              Every student's journey
              <br />
              is different.
            </h2>

            <p>
              Choosing a medical education pathway is a major
              decision for students and their families. The
              experiences shared by past students help us
              continuously improve the way we provide guidance.
            </p>

          </div>

        </div>

      </section>


      {/* REVIEW STATS */}
      <section className="review-stats-section">

        <div className="section-container">

          <div className="review-stats-grid">

            <div>
              <strong>4.9</strong>
              <span>Average Experience Rating</span>
            </div>

            <div>
              <strong>500+</strong>
              <span>Students Guided</span>
            </div>

            <div>
              <strong>5</strong>
              <span>Medical Pathways</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Student Focused</span>
            </div>

          </div>

        </div>

      </section>


      {/* REVIEWS */}
      <section className="reviews-directory-section">

        <div className="section-container">

          <div className="section-heading centered">

            <span>
              STUDENT REVIEWS
            </span>

            <h2>
              What our students say.
            </h2>

            <p>
              Experiences from students and families who have
              received guidance from GyanGuru.
            </p>

          </div>


          <div className="reviews-grid">

            {reviews.map((review) => (

              <article
                className="review-card"
                key={review.name}
              >

                <div className="review-card-top">

                  <div className="review-avatar">
                    {review.initials}
                  </div>

                  <div>

                    <h3>
                      {review.name}
                    </h3>

                    <span>
                      {review.course}
                    </span>

                  </div>

                </div>


                <div className="review-stars">

                  {"★★★★★".slice(
                    0,
                    review.rating
                  )}

                </div>


                <p>
                  "{review.review}"
                </p>


                <div className="review-card-bottom">

                  <span>
                    {review.location}
                  </span>

                  <span>
                    Verified Experience
                  </span>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* REVIEW CTA */}
      <section className="review-share-section">

        <div className="section-container">

          <div className="review-share-card">

            <div>

              <span>
                YOUR EXPERIENCE MATTERS
              </span>

              <h2>
                Have you been guided by GyanGuru?
              </h2>

              <p>
                We value feedback from every student and family.
                Your experience can help future students make
                confident decisions.
              </p>

            </div>

            <Link
              to="/contact"
              className="primary-button"
            >
              Share Your Experience →
            </Link>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="public-page-cta">

        <div>

          <span>
            START YOUR JOURNEY
          </span>

          <h2>
            Your story could be next.
          </h2>

          <p>
            Begin your medical admission journey with clear,
            structured guidance.
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

export default Reviews;
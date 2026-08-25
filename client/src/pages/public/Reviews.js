import React from "react";
import { Link } from "react-router-dom";

import "../../styles/reviews.css";
import PublicNavbar from "../../components/PublicNavbar";


const reviews = [
  {
    name: "Rahul Sharma",
    course: "MBBS Admission",
    location: "Maharashtra",
    review:
      "GyanGuru helped me understand my admission options clearly. The counselling process became much easier to follow."
  },

  {
    name: "Priya Verma",
    course: "BAMS Admission",
    location: "Madhya Pradesh",
    review:
      "The team explained the college options and admission process in a simple and professional manner."
  },

  {
    name: "Aman Kumar",
    course: "BDS Admission",
    location: "Rajasthan",
    review:
      "I received proper guidance from college selection through the admission process. Everything felt organised."
  },

  {
    name: "Sneha Patil",
    course: "Nursing Admission",
    location: "Maharashtra",
    review:
      "GyanGuru gave me confidence during my admission journey and helped me understand my available choices."
  }
];


function Reviews() {

  return (

    <div className="reviews-page">

      <PublicNavbar />


      {/* HERO */}

      <section className="reviews-hero">

        <div className="reviews-hero-inner">

          <span>
            STUDENT REVIEWS
          </span>

          <h1>
            Experiences that
            <br />
            <strong>matter to us.</strong>
          </h1>

          <p>
            Hear from students and families who have experienced
            GyanGuru's medical admission guidance.
          </p>

        </div>

      </section>


      {/* REVIEWS */}

      <section className="reviews-content">

        <div className="reviews-grid">

          {reviews.map((review) => (

            <article
              className="review-page-card"
              key={review.name}
            >

              <div className="review-page-stars">
                ★★★★★
              </div>


              <blockquote>
                "{review.review}"
              </blockquote>


              <div className="review-page-person">

                <div className="review-page-avatar">
                  {review.name.charAt(0)}
                </div>


                <div>

                  <strong>
                    {review.name}
                  </strong>

                  <span>
                    {review.course}
                    {" · "}
                    {review.location}
                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* CTA */}

        <div className="review-cta">

          <h2>
            Your journey could be next.
          </h2>

          <p>
            If you are planning a medical admission and need
            guidance, speak with the GyanGuru counselling team.
          </p>

          <Link to="/contact">
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


export default Reviews;
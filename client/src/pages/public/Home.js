import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";
import "../../styles/navbar.css";
import "../../styles/footer.css";


import PublicNavbar from "../../components/PublicNavbar";
import BackToTop from "../../components/BackToTop";

/* =========================================================
   NOTICE POSTERS
========================================================= */

const posters = [
  {
    image: "/posters/poster1.jpg",
    title: "Medical Admission 2026",
    text:
      "Get expert guidance for your medical admission journey.",
  },
  {
    image: "/posters/poster2.jpg",
    title: "NEET Counselling Guidance",
    text:
      "Understand your options and choose the right college.",
  },
  {
    image: "/posters/poster3.jpg",
    title: "UG Medical Admissions",
    text:
      "MBBS, BDS, BAMS and Nursing admission assistance.",
  },
  {
    image: "/posters/poster4.jpg",
    title: "PG Medical Admissions",
    text:
      "Professional guidance for postgraduate medical admissions.",
  },
];


/* =========================================================
   STUDENT REVIEWS
========================================================= */

const reviews = [
  {
    name: "Rahul Sharma",
    course: "MBBS Admission",
    location: "Maharashtra",
    rating: 5,
    review:
      "GyanGuru helped me understand the admission process clearly. Their guidance made the counselling journey much easier.",
  },
  {
    name: "Priya Verma",
    course: "BAMS Admission",
    location: "Madhya Pradesh",
    rating: 5,
    review:
      "The counselling team explained my college options and admission procedure in a very simple and professional way.",
  },
  {
    name: "Aman Kumar",
    course: "BDS Admission",
    location: "Rajasthan",
    rating: 5,
    review:
      "I received proper guidance from college selection to admission. The entire process felt organised and transparent.",
  },
  {
    name: "Sneha Patil",
    course: "Nursing Admission",
    location: "Maharashtra",
    rating: 5,
    review:
      "GyanGuru gave me confidence during the admission process and helped me understand the available options.",
  },
];


/* =========================================================
   MEDICAL COURSES
========================================================= */

const medicalCourses = [
  {
    title: "MBBS",
    description:
      "Guidance for undergraduate medical admission, college selection and counselling.",
  },
  {
    title: "BDS",
    description:
      "Admission assistance and counselling support for dental education.",
  },
  {
    title: "BAMS",
    description:
      "Guidance for Ayurveda medical admissions and suitable college options.",
  },
  {
    title: "Nursing",
    description:
      "Admission guidance for nursing programmes and college selection.",
  },
  {
    title: "PG Medical",
    description:
      "Support for postgraduate medical admission and counselling decisions.",
  },
];


function Home() {

const [posterIndex, setPosterIndex] = useState(0);

const [posterError, setPosterError] = useState(false);

const [selectedPoster, setSelectedPoster] = useState(null);

const [reviewIndex, setReviewIndex] = useState(0);


  /* =======================================================
     POSTER AUTO SLIDER
  ======================================================= */

  useEffect(() => {

    const posterTimer = setInterval(() => {

      setPosterIndex((previous) => {

        return (previous + 1) % posters.length;

      });

    }, 4000);


    return () => {

      clearInterval(posterTimer);

    };

  }, []);


  /* =======================================================
     REVIEW AUTO SLIDER
  ======================================================= */

  useEffect(() => {

    const reviewTimer = setInterval(() => {

      setReviewIndex((previous) => {

        return (previous + 1) % reviews.length;

      });

    }, 5000);


    return () => {

      clearInterval(reviewTimer);

    };

  }, []);


const currentPoster = posters[posterIndex];

const currentReview = reviews[reviewIndex];

useEffect(() => {
  setPosterError(false);
}, [posterIndex]);


  return (

    <div className="gyanguru-site">


      {/* =================================================
          FIXED PUBLIC NAVBAR
      ================================================= */}

      <PublicNavbar />

            <main>

            {/* =================================================
                ADMISSION JOURNEY BAR
            ================================================= */}

            <section className="admission-journey-bar">

                <div className="journey-bar-inner">

                <div className="journey-bar-heading">

                    <span>
                    YOUR ADMISSION JOURNEY
                    </span>

                    <h2>
                    From NEET to Admission
                    </h2>

                </div>


                <div className="journey-progress">

                    <div className="journey-line">
                    <div className="journey-line-progress"></div>
                    </div>


                    <div className="journey-item active">

                    <div className="journey-circle">
                        01
                    </div>

                    <div className="journey-item-text">
                        <strong>
                        Understand
                        </strong>

                        <small>
                        Know your options
                        </small>
                    </div>

                    </div>


                    <div className="journey-item active">

                    <div className="journey-circle">
                        02
                    </div>

                    <div className="journey-item-text">
                        <strong>
                        Select
                        </strong>

                        <small>
                        Choose suitable colleges
                        </small>
                    </div>

                    </div>


                    <div className="journey-item active">

                    <div className="journey-circle">
                        03
                    </div>

                    <div className="journey-item-text">
                        <strong>
                        Counselling
                        </strong>

                        <small>
                        Application support
                        </small>
                    </div>

                    </div>


                    <div className="journey-item active">

                    <div className="journey-circle">
                        04
                    </div>

                    <div className="journey-item-text">
                        <strong>
                        Admission
                        </strong>

                        <small>
                        Move forward confidently
                        </small>
                    </div>

                    </div>

                </div>

                </div>

            </section>


  {/* =================================================
      HERO SECTION
  ================================================= */}

  <section
    className="hero-section"
    id="home"
  >

          <div className="hero-content">


            <div className="hero-label">

              <span className="hero-label-dot"></span>

              SPECIALISED MEDICAL ADMISSION CONSULTANCY

            </div>


            <h1>

              Your Medical

              <br />

              Career.

              <span>
                {" "}
                Our Guidance.
              </span>

            </h1>


            <p className="hero-description">

              Trusted guidance for MBBS, BDS, BAMS, Nursing and
              postgraduate medical admissions. From college selection
              to counselling and admission, we help students move
              forward with confidence.

            </p>


            <div className="hero-actions">


              <a
                href="#courses"
                className="primary-button"
              >

                Explore Medical Admissions

                <span>
                  →
                </span>

              </a>


              <a
                href="#contact"
                className="secondary-button"
              >

                Talk to a Counsellor

              </a>


            </div>


            <div className="hero-points">


              <div className="hero-point">

                <span>
                  ✓
                </span>

                <div>

                  <strong>
                    Admission Guidance
                  </strong>

                  <small>
                    End-to-end support
                  </small>

                </div>

              </div>


              <div className="hero-point">

                <span>
                  ✓
                </span>

                <div>

                  <strong>
                    College Selection
                  </strong>

                  <small>
                    Informed decisions
                  </small>

                </div>

              </div>


              <div className="hero-point">

                <span>
                  ✓
                </span>

                <div>

                  <strong>
                    Counselling Support
                  </strong>

                  <small>
                    Step-by-step assistance
                  </small>

                </div>

              </div>


            </div>

          </div>


          {/* =================================================
              HERO VISUAL
          ================================================= */}

          <div className="hero-visual">


            {/* =================================================
                NOTICE CARD
            ================================================= */}

            <div className="notice-wrapper">


              <div className="notice-heading">

                <div>

                  <span className="notice-small-title">
                    GYANGURU UPDATES
                  </span>

                  <h3>
                    Latest Notices
                  </h3>

                </div>


                <span className="notice-live">

                  <span></span>

                  LIVE

                </span>

              </div>


              <div className="poster-window">


                <div
                  key={posterIndex}
                  className="poster-slide"
                >


                  {!posterError ? (
  <img
    src={currentPoster.image}
    alt={currentPoster.title}
    onError={() => {
      setPosterError(true);
    }}
    onClick={() => {
      setSelectedPoster(currentPoster);
    }}
    className="clickable-poster"
  />
) : (
                    <div className="poster-fallback">
                        <div className="poster-icon">
                        G
                        </div>

    <span>
      GYANGURU
    </span>

    <h4>
      {currentPoster.title}
    </h4>

    <p>
      {currentPoster.text}
    </p>

    <a
      href="#courses"
      className="poster-button"
    >
      View Admission Details →
    </a>
  </div>
)}


                </div>


              </div>


              <div className="poster-bottom">


                <div className="poster-dots">

                  {posters.map((poster, index) => (

                    <button
                      type="button"
                      key={poster.title}
                      className={
                        index === posterIndex
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        setPosterIndex(index)
                      }
                      aria-label={`Show poster ${index + 1}`}
                    />

                  ))}

                </div>


                <span>
                  Admission Updates
                </span>


              </div>


            </div>


            


          </div>


        </section>


        {/* =================================================
            ABOUT SECTION
        ================================================= */}

        <section
          className="about-section section-container"
          id="about"
        >


          <div className="section-heading">

            <span>
              ABOUT GYANGURU
            </span>

            <h2>

              Guidance that makes

              <br />

              admission simpler.

            </h2>

          </div>


          <div className="about-content">

            <p>

              GyanGuru Consultancy is focused exclusively on
              medical education and admission guidance. We help
              students and families understand their choices,
              evaluate colleges and navigate the admission journey
              with clarity.

            </p>


            <p>

              Our approach is simple — understand the student's
              requirements, provide relevant information and support
              every important decision throughout the admission
              process.

            </p>

          </div>


        </section>


        {/* =================================================
            MEDICAL COURSES
        ================================================= */}

        <section
          className="courses-section section-container"
          id="courses"
        >


          <div className="section-heading centered">

            <span>
              MEDICAL ADMISSIONS
            </span>

            <h2>
              Courses we guide you through.
            </h2>

            <p>

              Explore medical education pathways with structured
              admission guidance.

            </p>

          </div>


          <div className="course-grid">


            {medicalCourses.map((course, index) => (

              <div
                className="course-card"
                key={course.title}
              >


                <div className="course-number">

                  {String(index + 1).padStart(2, "0")}

                </div>


                <h3>
                  {course.title}
                </h3>


                <p>
                  {course.description}
                </p>


                <a href="#contact">
                  Get Guidance →
                </a>


              </div>

            ))}


          </div>


        </section>


        {/* =================================================
            SERVICES
        ================================================= */}

        <section
          className="services-section"
          id="services"
        >


          <div className="section-container">


            <div className="section-heading centered">

              <span>
                OUR SERVICES
              </span>

              <h2>
                Support at every important step.
              </h2>

            </div>


            <div className="services-grid">


              <div className="service-card">

                <div className="service-icon">
                  01
                </div>

                <h3>
                  College Selection
                </h3>

                <p>

                  Understand college options and make informed
                  admission decisions.

                </p>

              </div>


              <div className="service-card">

                <div className="service-icon">
                  02
                </div>

                <h3>
                  Counselling Guidance
                </h3>

                <p>

                  Step-by-step support throughout the counselling
                  and application process.

                </p>

              </div>


              <div className="service-card">

                <div className="service-icon">
                  03
                </div>

                <h3>
                  Admission Assistance
                </h3>

                <p>

                  Guidance through important admission procedures
                  and documentation.

                </p>

              </div>


              <div className="service-card">

                <div className="service-icon">
                  04
                </div>

                <h3>
                  Student Support
                </h3>

                <p>

                  Dedicated assistance to help students move
                  confidently towards their chosen medical career.

                </p>

              </div>


            </div>


          </div>


        </section>


        {/* =================================================
            COLLEGES
        ================================================= */}

        <section
          className="colleges-section section-container"
          id="colleges"
        >


          <div className="college-banner">


            <div>

              <span>
                COLLEGE INFORMATION
              </span>

              <h2>

                Find the right medical college
                for your journey.

              </h2>

              <p>

                Explore college information and understand the
                admission opportunities available to you.

              </p>

            </div>


            <Link
              to="/colleges"
              className="light-button"
            >

              Explore Colleges →

            </Link>


          </div>


        </section>


        {/* =================================================
            STUDENT REVIEWS
        ================================================= */}

        <section
          className="reviews-section"
          id="reviews"
        >


          <div className="section-container">


            <div className="section-heading centered">

              <span>
                STUDENT REVIEWS
              </span>

              <h2>
                What our students say.
              </h2>

              <p>

                Experiences shared by students who trusted
                GyanGuru for their admission journey.

              </p>

            </div>


            <div className="review-slider">


              <button
                type="button"
                className="review-arrow"
                onClick={() => {

                  setReviewIndex(
                    (reviewIndex - 1 + reviews.length) %
                      reviews.length
                  );

                }}
                aria-label="Previous review"
              >

                ←

              </button>


              <div
                key={reviewIndex}
                className="review-card"
              >


                <div className="review-stars">

                  {"★".repeat(currentReview.rating)}

                </div>


                <blockquote>

                  “{currentReview.review}”

                </blockquote>


                <div className="review-person">


                  <div className="review-avatar">

                    {currentReview.name.charAt(0)}

                  </div>


                  <div>

                    <strong>
                      {currentReview.name}
                    </strong>

                    <span>

                      {currentReview.course}

                      {" · "}

                      {currentReview.location}

                    </span>

                  </div>


                </div>


              </div>


              <button
                type="button"
                className="review-arrow"
                onClick={() => {

                  setReviewIndex(
                    (reviewIndex + 1) %
                      reviews.length
                  );

                }}
                aria-label="Next review"
              >

                →

              </button>


            </div>


            <div className="review-dots">


              {reviews.map((review, index) => (

                <button
                  type="button"
                  key={review.name}
                  className={
                    index === reviewIndex
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setReviewIndex(index)
                  }
                  aria-label={`Show review ${index + 1}`}
                />

              ))}


            </div>


          </div>


        </section>


        {/* =================================================
            CONTACT CTA
        ================================================= */}

        <section
          className="contact-section"
          id="contact"
        >


          <div className="contact-card">


            <div>

              <span>
                START YOUR JOURNEY
              </span>

              <h2>

                Need guidance for your
                medical admission?

              </h2>

              <p>

                Speak with our counselling team and understand
                your next step with clarity.

              </p>

            </div>


            <div className="contact-actions">


              <a
                href="tel:+919999999999"
                className="contact-primary"
              >

                Talk to a Counsellor →

              </a>


              <Link
                to="/login"
                className="contact-secondary"
              >

                Student Login

              </Link>


            </div>


          </div>


        </section>


      </main>


      {/* =================================================
          FULL NOTICE VIEWER
      ================================================= */}

      {selectedPoster && (

        <div
          className="notice-modal"
          onClick={() => setSelectedPoster(null)}
        >

          <div
            className="notice-modal-content"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              className="notice-modal-close"
              onClick={() => setSelectedPoster(null)}
              aria-label="Close notice"
            >
              ×
            </button>


            <div className="notice-modal-header">

              <div>

                <span>
                  GYANGURU NOTICE
                </span>

                <h2>
                  {selectedPoster.title}
                </h2>

              </div>

            </div>


            <div className="notice-modal-document">

              <img
                src={selectedPoster.image}
                alt={selectedPoster.title}
              />

            </div>

          </div>

        </div>

      )}


      {/* =================================================
          FOOTER
      ================================================= */}

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


            <a href="/#about">
              About Us
            </a>


            <a href="/#courses">
              Medical Courses
            </a>


            <Link to="/colleges">
              Colleges
            </Link>


            <a href="/#services">
              Services
            </a>


          </div>


          <div className="footer-column">


            <h4>
              Support
            </h4>


            <a href="/#reviews">
              Student Reviews
            </a>


            <a href="/#contact">
              Contact
            </a>


            <Link to="/login">
              Student Login
            </Link>


          </div>


        </div>


        <div className="footer-bottom">


          <span>

            © {new Date().getFullYear()}
            {" "}
            GyanGuru Consultancy.
            All rights reserved.

          </span>


          <span>
            Medical Admission Guidance
          </span>


        </div>


      </footer>


      {/* =================================================
          BACK TO TOP
      ================================================= */}

      <BackToTop />


    </div>

  );

}


export default Home;
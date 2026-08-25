import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";


/* =========================================================
   GYANGURU HOME NOTICES
========================================================= */

const homeNotices = [
  {
    id: 1,
    title: "UG Medical Admissions",
    description:
      "MBBS, BDS, BAMS and Nursing admission guidance and counselling support.",
    button: "View Admissions",
    link: "/courses"
  },
  {
    id: 2,
    title: "College Selection",
    description:
      "Explore suitable medical colleges and understand your admission options.",
    button: "Explore Colleges",
    link: "/colleges"
  },
  {
    id: 3,
    title: "Counselling Guidance",
    description:
      "Get structured support throughout your medical admission journey.",
    button: "Our Services",
    link: "/services"
  },
  {
    id: 4,
    title: "PG Medical Admissions",
    description:
      "Guidance for postgraduate medical admission and counselling.",
    button: "Explore PG",
    link: "/courses"
  }
];


/* =========================================================
   HOME PAGE
========================================================= */

function Home() {

  const [activeNotice, setActiveNotice] = useState(0);


  /* =======================================================
     AUTOMATIC NOTICE SLIDER
  ======================================================= */

  useEffect(() => {

    const noticeTimer = setInterval(() => {

      setActiveNotice((current) => {

        return (
          (current + 1) %
          homeNotices.length
        );

      });

    }, 4500);


    return () => {

      clearInterval(noticeTimer);

    };

  }, []);


  return (

    <main className="home-page">


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="home-hero">

        <div className="home-hero-inner">


          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="home-hero-content">


            <div className="home-hero-label">

              SPECIALISED MEDICAL ADMISSION CONSULTANCY

            </div>


            <h1 className="home-hero-title">

              Your Medical
              <br />

              Career.{" "}

              <span>
                Our Guidance.
              </span>

            </h1>


            <p className="home-hero-description">

              Trusted guidance for MBBS, BDS, BAMS, Nursing
              and postgraduate medical admissions. From college
              selection to counselling and admission, we help
              students move forward with confidence.

            </p>


            {/* =================================================
                ACTION BUTTONS
            ================================================= */}

            <div className="home-hero-actions">

              <Link
                to="/courses"
                className="home-primary-button"
              >
                Explore Medical Admissions
                <span>→</span>
              </Link>


              <Link
                to="/contact"
                className="home-secondary-button"
              >
                Talk to a Counsellor
              </Link>

            </div>


            {/* =================================================
                TRUST POINTS
            ================================================= */}

            <div className="home-trust-row">


              <div className="home-trust-item">

                <div className="home-trust-check">
                  ✓
                </div>

                <div>

                  <strong>
                    Admission Guidance
                  </strong>

                  <span>
                    End-to-end support
                  </span>

                </div>

              </div>


              <div className="home-trust-item">

                <div className="home-trust-check">
                  ✓
                </div>

                <div>

                  <strong>
                    College Selection
                  </strong>

                  <span>
                    Informed decisions
                  </span>

                </div>

              </div>


              <div className="home-trust-item">

                <div className="home-trust-check">
                  ✓
                </div>

                <div>

                  <strong>
                    Counselling Support
                  </strong>

                  <span>
                    Guidance when needed
                  </span>

                </div>

              </div>


            </div>


          </div>


          {/* =================================================
              RIGHT HERO AREA
          ================================================= */}

          <div className="home-hero-visual">


            {/* ===============================================
                NOTICE PANEL
            =============================================== */}

            <div className="home-notice-carousel">


              <div className="home-notice-top">


                <div>

                  <span className="home-notice-label">
                    GYANGURU UPDATES
                  </span>

                  <h3>
                    Latest Notices
                  </h3>

                </div>


                <span className="home-live-badge">

                  <i></i>

                  LIVE

                </span>


              </div>


              {/* =============================================
                  NOTICE SLIDER
              ============================================= */}

              <div className="home-notice-window">

                {homeNotices.map(
                  (notice, index) => (

                    <div
                      key={notice.id}
                      className={
                        index === activeNotice
                          ? "home-notice-slide active"
                          : "home-notice-slide"
                      }
                    >

                      <div className="home-notice-poster">


                        <div className="home-poster-logo">
                          G
                        </div>


                        <span className="home-poster-brand">
                          GYANGURU
                        </span>


                        <h4>
                          {notice.title}
                        </h4>


                        <p>
                          {notice.description}
                        </p>


                        <Link
                          to={notice.link}
                          className="home-notice-button"
                        >
                          {notice.button}
                          <span>→</span>
                        </Link>


                      </div>

                    </div>

                  )
                )}

              </div>


              {/* =============================================
                  NOTICE FOOTER
              ============================================= */}

              <div className="home-notice-footer">


                <div className="home-notice-dots">

                  {homeNotices.map(
                    (notice, index) => (

                      <button
                        key={notice.id}
                        type="button"
                        className={
                          index === activeNotice
                            ? "active"
                            : ""
                        }
                        onClick={() =>
                          setActiveNotice(index)
                        }
                        aria-label={
                          `Show notice ${index + 1}`
                        }
                      />

                    )
                  )}

                </div>


                <span>
                  Admission Updates
                </span>


              </div>


            </div>


            {/* ===============================================
                ADMISSION JOURNEY
            =============================================== */}

            <div className="home-admission-card">


              <div className="home-admission-header">


                <div>

                  <span>
                    YOUR ADMISSION JOURNEY
                  </span>

                  <h2>
                    From NEET to Admission
                  </h2>

                </div>


                <div className="home-guidance-badge">

                  <i></i>

                  Guidance

                </div>


              </div>


              {/* =============================================
                  JOURNEY STEPS
              ============================================= */}

              <div className="home-journey-list">


                <div className="home-journey-item active">

                  <strong>
                    01
                  </strong>

                  <div>

                    <b>
                      Understand
                    </b>

                    <span>
                      Know your options
                    </span>

                  </div>

                </div>


                <div className="home-journey-item">

                  <strong>
                    02
                  </strong>

                  <div>

                    <b>
                      Select
                    </b>

                    <span>
                      Choose suitable colleges
                    </span>

                  </div>

                </div>


                <div className="home-journey-item">

                  <strong>
                    03
                  </strong>

                  <div>

                    <b>
                      Counselling
                    </b>

                    <span>
                      Application support
                    </span>

                  </div>

                </div>


                <div className="home-journey-item">

                  <strong>
                    04
                  </strong>

                  <div>

                    <b>
                      Admission
                    </b>

                    <span>
                      Move forward confidently
                    </span>

                  </div>

                </div>


              </div>


              {/* =============================================
                  ADMISSION CATEGORIES
              ============================================= */}

              <div className="home-admission-bottom">


                <div>

                  <strong>
                    UG
                  </strong>

                  <span>
                    Medical
                  </span>

                </div>


                <div>

                  <strong>
                    PG
                  </strong>

                  <span>
                    Medical
                  </span>

                </div>


                <div>

                  <strong>
                    Guidance
                  </strong>

                  <span>
                    Support
                  </span>

                </div>


              </div>


            </div>


          </div>


        </div>

      </section>


      {/* ===================================================
          WHY GYANGURU
      =================================================== */}

      <section className="home-intro-section">

        <div className="home-intro-inner">


          <div className="home-intro-heading">

            <span>
              WHY GYANGURU
            </span>

            <h2>
              A clearer path to
              your medical admission.
            </h2>

          </div>


          <div className="home-intro-text">

            <p>

              Medical admission can involve many choices,
              deadlines and counselling stages. GyanGuru
              Consultancy brings the process together with
              practical guidance and student-focused support.

            </p>

            <Link
              to="/about"
              className="home-text-link"
            >
              Know More About Us →
            </Link>

          </div>


        </div>

      </section>


    </main>

  );

}


export default Home;
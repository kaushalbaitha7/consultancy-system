import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/colleges.css";
import PublicNavbar from "../../components/PublicNavbar";


/* =========================================================
   GYANGURU COLLEGE CATEGORIES
========================================================= */

const collegeCategories = [
  {
    id: "ug-state",
    number: "01",
    title: "UG Medical Colleges",
    subtitle: "State-wise",
    description:
      "Explore MBBS and other undergraduate medical admission options across states.",
    tag: "MBBS",
    route: "/colleges/ug-state",
  },

  {
    id: "ug-deemed",
    number: "02",
    title: "Deemed Medical Colleges",
    subtitle: "UG Medical",
    description:
      "Explore deemed university medical colleges and understand their admission pathways.",
    tag: "DEEMED",
    route: "/colleges/deemed",
  },

  {
    id: "bams",
    number: "03",
    title: "BAMS Colleges",
    subtitle: "Ayurveda",
    description:
      "Explore undergraduate Ayurveda colleges and understand available admission options.",
    tag: "BAMS",
    route: "/colleges/bams",
  },

  {
    id: "pg",
    number: "04",
    title: "PG Medical Colleges",
    subtitle: "Postgraduate",
    description:
      "Explore postgraduate medical education options and specialisation pathways.",
    tag: "PG",
    route: "/colleges/pg",
  },

  {
    id: "dental",
    number: "05",
    title: "Dental / BDS Colleges",
    subtitle: "Dental Education",
    description:
      "Explore BDS colleges and understand undergraduate dental admission opportunities.",
    tag: "BDS",
    route: "/colleges/dental",
  },

  {
    id: "bhms",
    number: "06",
    title: "BHMS Colleges",
    subtitle: "Homeopathy",
    description:
      "Explore Homeopathic medical colleges and understand relevant admission options.",
    tag: "BHMS",
    route: "/colleges/bhms",
  },

  {
    id: "nursing",
    number: "07",
    title: "Nursing Institutions",
    subtitle: "Nursing Education",
    description:
      "Explore nursing institutions and understand undergraduate nursing admission pathways.",
    tag: "NURSING",
    route: "/colleges/nursing",
  },

  {
    id: "catalogue",
    number: "08",
    title: "College Catalogue",
    subtitle: "Updated Information",
    description:
      "Access structured college information including courses, locations and admission details.",
    tag: "CATALOGUE",
    route: "/colleges/catalogue",
  },
];


function Colleges() {

  const [search, setSearch] = useState("");


  /* =======================================================
     SEARCH
  ======================================================= */

  const filteredCategories = useMemo(() => {

    const query = search.trim().toLowerCase();

    if (!query) {
      return collegeCategories;
    }

    return collegeCategories.filter((college) => {

      const searchableText = `
        ${college.title}
        ${college.subtitle}
        ${college.description}
        ${college.tag}
      `.toLowerCase();

      return searchableText.includes(query);

    });

  }, [search]);


  return (

    <div className="colleges-page">

      <PublicNavbar />


      {/* =================================================
          HERO
      ================================================= */}

      <section className="colleges-hero">

        <div className="colleges-hero-inner">

          <div className="colleges-eyebrow">

            <span className="eyebrow-dot"></span>

            MEDICAL COLLEGE DIRECTORY

          </div>


          <h1>

            Explore medical

            <br />

            <strong>college options.</strong>

          </h1>


          <p>

            Discover medical colleges, understand your options and
            move towards the right admission pathway with guidance
            from GyanGuru Consultancy.

          </p>


          {/* =================================================
              SEARCH
          ================================================= */}

          <div className="college-search">

            <div className="college-search-icon">
              ⌕
            </div>


            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search colleges, courses or categories..."
              aria-label="Search colleges"
            />


            {search && (

              <button
                type="button"
                className="college-search-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>

            )}


            <button
              type="button"
              className="college-search-button"
            >
              Search
            </button>

          </div>


          <div className="college-search-hints">

            <span>
              Popular:
            </span>


            <button
              type="button"
              onClick={() => setSearch("MBBS")}
            >
              MBBS
            </button>


            <button
              type="button"
              onClick={() => setSearch("BAMS")}
            >
              BAMS
            </button>


            <button
              type="button"
              onClick={() => setSearch("BDS")}
            >
              BDS
            </button>


            <button
              type="button"
              onClick={() => setSearch("PG")}
            >
              PG Medical
            </button>

          </div>

        </div>

      </section>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <main className="colleges-content">


        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="college-section-header">

          <div>

            <span>
              EXPLORE BY CATEGORY
            </span>


            <h2>
              Find the right college pathway.
            </h2>

          </div>


          <p>
            Choose a medical education category
            to begin exploring your options.
          </p>

        </div>


        {/* =================================================
            CATEGORY GRID
        ================================================= */}

        <div className="college-grid">

          {filteredCategories.map((college) => (

            /*
             * IMPORTANT:
             * The entire card is now clickable.
             *
             * Each category has its own route so that we can
             * create its individual page later.
             */

            <Link
              className="college-card"
              key={college.id}
              to={college.route}
            >

              <div className="college-card-top">

                <div className="college-card-number">
                  {college.number}
                </div>


                <span className="college-card-tag">
                  {college.tag}
                </span>

              </div>


              <div className="college-card-icon">

                <span>
                  ✦
                </span>

              </div>


              <div className="college-card-body">

                <span className="college-card-subtitle">
                  {college.subtitle}
                </span>


                <h3>
                  {college.title}
                </h3>


                <p>
                  {college.description}
                </p>


                {/* This is now only a visual CTA.
                    The complete card is the Link. */}

                <div className="college-card-link">

                  Explore Options

                  <span>
                    →
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>


        {/* =================================================
            NO RESULTS
        ================================================= */}

        {filteredCategories.length === 0 && (

          <div className="college-no-results">

            <div className="no-results-icon">
              ?
            </div>


            <h3>
              No matching category found
            </h3>


            <p>
              Try searching for MBBS, BAMS, BDS, PG,
              Nursing or another medical category.
            </p>


            <button
              type="button"
              onClick={() => setSearch("")}
            >
              Clear Search
            </button>

          </div>

        )}


        {/* =================================================
            IMPORTANT CATALOGUE STRIP
        ================================================= */}

        <section className="college-catalogue">

          <div className="catalogue-icon">
            ✓
          </div>


          <div className="catalogue-content">

            <span>
              GYANGURU COLLEGE CATALOGUE
            </span>


            <h3>
              Important college information, organised for you.
            </h3>


            <p>
              College availability, courses, eligibility,
              seats, fees and admission information can vary
              by course, state, authority and admission year.
            </p>

          </div>


          <Link
            to="/colleges/catalogue"
            className="catalogue-button"
          >

            View Catalogue

            <span>
              →
            </span>

          </Link>

        </section>


        {/* =================================================
            INFORMATION NOTE
        ================================================= */}

        <div className="college-information-note">

          <span className="information-note-icon">
            i
          </span>


          <p>

            <strong>
              Important:
            </strong>{" "}

            College availability, eligibility, counselling
            rules and admission procedures may vary by
            course, state, authority and admission year.
            Students should verify applicable information
            before making final admission decisions.

          </p>

        </div>


        {/* =================================================
            COUNSELLING CTA
        ================================================= */}

        <section className="college-cta">

          <div className="college-cta-content">

            <span>
              NEED HELP SELECTING?
            </span>


            <h2>
              Not sure which college is right for you?
            </h2>


            <p>
              Discuss your options with the GyanGuru
              counselling team and understand your
              next step with greater clarity.
            </p>

          </div>


          <Link
            to="/contact"
            className="college-cta-button"
          >

            Talk to a Counsellor

            <span>
              →
            </span>

          </Link>

        </section>

      </main>


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


export default Colleges;
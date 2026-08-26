import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/deemed-colleges.css";
import PublicNavbar from "../../components/PublicNavbar";


/* =========================================================
   GYANGURU
   DEEMED UNIVERSITY MBBS COLLEGES - 2026

   63 colleges
   14 States / UTs

   Data basis:
   MCC NEET UG 2026 Round 1 deemed-university MBBS matrix.
========================================================= */

const deemedColleges = [

  /* =======================================================
     ANDHRA PRADESH
  ======================================================= */

  {
    id: "gitam-gimsr",
    name: "GITAM Institute of Medical Sciences and Research",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    domain: "gitam.edu",
  },


  /* =======================================================
     DELHI
  ======================================================= */

  {
    id: "himssr-delhi",
    name: "Hamdard Institute of Medical Sciences & Research",
    city: "New Delhi",
    state: "Delhi",
    domain: "himsr.co.in",
  },


  /* =======================================================
     GUJARAT
  ======================================================= */

  {
    id: "sbks-vadodara",
    name: "SBKS Medical Institute & Research Centre",
    city: "Vadodara",
    state: "Gujarat",
    domain: "sumandeepuniversity.co.in",
  },


  /* =======================================================
     HARYANA
  ======================================================= */

  {
    id: "mmimsr-mullana",
    name: "Maharishi Markandeshwar Institute of Medical Sciences & Research",
    city: "Mullana, Ambala",
    state: "Haryana",
    domain: "mmimsr.edu.in",
  },

  {
    id: "amrita-faridabad",
    name: "Amrita School of Medicine",
    city: "Faridabad",
    state: "Haryana",
    domain: "amrita.edu",
  },


  /* =======================================================
     JHARKHAND
  ======================================================= */

  {
    id: "manipal-tata-jamshedpur",
    name: "Manipal Tata Medical College",
    city: "Jamshedpur",
    state: "Jharkhand",
    domain: "manipal.edu",
  },


  /* =======================================================
     KARNATAKA
  ======================================================= */

  {
    id: "jnmc-belagavi",
    name: "Jawaharlal Nehru Medical College",
    city: "Belagavi",
    state: "Karnataka",
    domain: "kledeemeduniversity.edu.in",
  },

  {
    id: "jss-mysuru",
    name: "JSS Medical College",
    city: "Mysuru",
    state: "Karnataka",
    domain: "jssuni.edu.in",
  },

  {
    id: "ks-hegde",
    name: "K.S. Hegde Medical Academy",
    city: "Mangaluru",
    state: "Karnataka",
    domain: "nitte.edu.in",
  },

  {
    id: "kmc-mangalore",
    name: "Kasturba Medical College",
    city: "Mangaluru",
    state: "Karnataka",
    domain: "manipal.edu",
  },

  {
    id: "kmc-manipal",
    name: "Kasturba Medical College",
    city: "Manipal",
    state: "Karnataka",
    domain: "manipal.edu",
  },

  {
    id: "bm-patil-vijayapura",
    name: "Shri B.M. Patil Medical College, Hospital & Research Centre",
    city: "Vijayapura",
    state: "Karnataka",
    domain: "bldedu.ac.in",
  },

  {
    id: "sdu-kolar",
    name: "Sri Devaraj Urs Medical College",
    city: "Kolar",
    state: "Karnataka",
    domain: "sdumc.ac.in",
  },

  {
    id: "sri-siddhartha-tumkur",
    name: "Sri Siddhartha Medical College",
    city: "Tumakuru",
    state: "Karnataka",
    domain: "ssahe.edu.in",
  },

  {
    id: "yenepoya-mangalore",
    name: "Yenepoya Medical College",
    city: "Mangaluru",
    state: "Karnataka",
    domain: "yenepoya.edu.in",
  },

  {
    id: "rrmch-bangalore",
    name: "RajaRajeswari Medical College & Hospital",
    city: "Bengaluru",
    state: "Karnataka",
    domain: "rrmch.org",
  },

  {
    id: "ssims-begur",
    name: "Sri Siddhartha Institute of Medical Sciences & Research Centre",
    city: "Bengaluru",
    state: "Karnataka",
    domain: "ssahe.edu.in",
  },

  {
    id: "jgmmm-hubballi",
    name: "Jagadguru Gangadhar Mahaswamigalu Moorusavirmath Medical College",
    city: "Hubballi",
    state: "Karnataka",
    domain: "kledeemeduniversity.edu.in",
  },

  {
    id: "chettinad-kolar",
    name: "Chettinad Institute of Medical Education and Research",
    city: "Kolar Gold Fields",
    state: "Karnataka",
    domain: "care.edu.in",
  },


  /* =======================================================
     KERALA
  ======================================================= */

  {
    id: "amrita-kochi",
    name: "Amrita School of Medicine",
    city: "Kochi",
    state: "Kerala",
    domain: "amrita.edu",
  },


  /* =======================================================
     MAHARASHTRA
  ======================================================= */

  {
    id: "bvdu-sangli",
    name: "Bharati Vidyapeeth Deemed University Medical College & Hospital",
    city: "Sangli",
    state: "Maharashtra",
    domain: "bvdu.ac.in",
  },

  {
    id: "bvdu-pune",
    name: "Bharati Vidyapeeth University Medical College",
    city: "Pune",
    state: "Maharashtra",
    domain: "bvdu.ac.in",
  },

  {
    id: "dy-patil-pimpri",
    name: "Dr. D.Y. Patil Medical College, Hospital & Research Centre",
    city: "Pimpri, Pune",
    state: "Maharashtra",
    domain: "dpu.edu.in",
  },

  {
    id: "dy-patil-kolhapur",
    name: "Dr. D.Y. Patil Medical College",
    city: "Kolhapur",
    state: "Maharashtra",
    domain: "dypatilunikop.org",
  },

  {
    id: "jnmc-wardha",
    name: "Jawaharlal Nehru Medical College, Sawangi (Meghe)",
    city: "Wardha",
    state: "Maharashtra",
    domain: "dmiher.edu.in",
  },

  {
    id: "krishna-karad",
    name: "Krishna Institute of Medical Sciences",
    city: "Karad",
    state: "Maharashtra",
    domain: "kvv.edu.in",
  },

  {
    id: "mgm-aurangabad",
    name: "Mahatma Gandhi Missions Medical College",
    city: "Chhatrapati Sambhajinagar",
    state: "Maharashtra",
    domain: "mgmmcha.org",
  },

  {
    id: "mgm-navi-mumbai",
    name: "Mahatma Gandhi Missions Medical College",
    city: "Navi Mumbai",
    state: "Maharashtra",
    domain: "mgmmcnm.edu.in",
  },

  {
    id: "rural-medical-loni",
    name: "Rural Medical College",
    city: "Loni",
    state: "Maharashtra",
    domain: "pims.ac.in",
  },

  {
    id: "datta-meghe-nagpur",
    name: "Datta Meghe Medical College",
    city: "Nagpur",
    state: "Maharashtra",
    domain: "dmiher.edu.in",
  },

  {
    id: "symbiosis-smcw",
    name: "Symbiosis Medical College for Women",
    city: "Pune",
    state: "Maharashtra",
    domain: "siu.edu.in",
  },

  {
    id: "mgm-vashi",
    name: "MGM Medical College",
    city: "Vashi, Navi Mumbai",
    state: "Maharashtra",
    domain: "mgmmcvashi.edu.in",
  },

  {
    id: "mgm-nerul",
    name: "MGM Medical College",
    city: "Nerul, Navi Mumbai",
    state: "Maharashtra",
    domain: "mgmmcnm.edu.in",
  },

  {
    id: "dypatil-maval",
    name: "D.Y. Patil University, School of Medicine",
    city: "Maval, Pune",
    state: "Maharashtra",
    domain: "dpu.edu.in",
  },

  {
    id: "mgm-panvel",
    name: "MGM Medical College",
    city: "Panvel",
    state: "Maharashtra",
    domain: "mgmmcpanvel.in",
  },

  {
    id: "dypatil-nerul",
    name: "Padmashree Dr. D.Y. Patil Medical College",
    city: "Nerul, Navi Mumbai",
    state: "Maharashtra",
    domain: "dypatil.edu",
  },


  /* =======================================================
     ODISHA
  ======================================================= */

  {
    id: "ims-sum-bhubaneswar",
    name: "Institute of Medical Sciences & SUM Hospital",
    city: "Bhubaneswar",
    state: "Odisha",
    domain: "soa.ac.in",
  },

  {
    id: "kims-bhubaneswar",
    name: "Kalinga Institute of Medical Sciences",
    city: "Bhubaneswar",
    state: "Odisha",
    domain: "kiit.ac.in",
  },

  {
    id: "ims-sum-campus-2",
    name: "Institute of Medical Sciences & SUM Hospital, Campus-II",
    city: "Phulnakhara, Bhubaneswar",
    state: "Odisha",
    domain: "soa.ac.in",
  },


  /* =======================================================
     PUDUCHERRY
  ======================================================= */

  {
    id: "avmc-puducherry",
    name: "Aarupadai Veedu Medical College",
    city: "Puducherry",
    state: "Puducherry",
    domain: "avmc.edu.in",
  },

  {
    id: "mgmcri-puducherry",
    name: "Mahatma Gandhi Medical College & Research Institute",
    city: "Puducherry",
    state: "Puducherry",
    domain: "mgmcri.ac.in",
  },

  {
    id: "slims-puducherry",
    name: "Sri Lakshmi Narayana Institute of Medical Sciences",
    city: "Puducherry",
    state: "Puducherry",
    domain: "slims.ac.in",
  },

  {
    id: "vmmc-karaikal",
    name: "Vinayaka Missions Medical College",
    city: "Karaikal",
    state: "Puducherry",
    domain: "vmrfdu.edu.in",
  },


  /* =======================================================
     TAMIL NADU
  ======================================================= */

  {
    id: "acs-chennai",
    name: "ACS Medical College and Hospital",
    city: "Chennai",
    state: "Tamil Nadu",
    domain: "acsmch.ac.in",
  },

  {
    id: "chettinad-kanchipuram",
    name: "Chettinad Hospital & Research Institute",
    city: "Kanchipuram",
    state: "Tamil Nadu",
    domain: "care.edu.in",
  },

  {
    id: "meenakshi-kanchipuram",
    name: "Meenakshi Medical College & Research Institute",
    city: "Kanchipuram",
    state: "Tamil Nadu",
    domain: "mmchri.ac.in",
  },

  {
    id: "saveetha-chennai",
    name: "Saveetha Medical College & Hospital",
    city: "Chennai",
    state: "Tamil Nadu",
    domain: "saveetha.com",
  },

  {
    id: "sathya-sai-kanchipuram",
    name: "Shri Sathya Sai Medical College & Research Institute",
    city: "Kanchipuram",
    state: "Tamil Nadu",
    domain: "sbv.edu.in",
  },

  {
    id: "sree-balaji-chennai",
    name: "Sree Balaji Medical College & Hospital",
    city: "Chennai",
    state: "Tamil Nadu",
    domain: "bharatuniv.ac.in",
  },

  {
    id: "sri-ramachandra-chennai",
    name: "Sri Ramachandra Medical College & Research Institute",
    city: "Chennai",
    state: "Tamil Nadu",
    domain: "sriramachandra.edu.in",
  },

  {
    id: "srm-kanchipuram",
    name: "SRM Medical College Hospital & Research Centre",
    city: "Kattankulathur",
    state: "Tamil Nadu",
    domain: "srmist.edu.in",
  },

  {
    id: "vmkv-salem",
    name: "Vinayaka Missions Kirupananda Variyar Medical College",
    city: "Salem",
    state: "Tamil Nadu",
    domain: "vmrfdu.edu.in",
  },

  {
    id: "bhaarath-chennai",
    name: "Bhaarath Medical College & Hospital",
    city: "Chennai",
    state: "Tamil Nadu",
    domain: "bharatuniv.ac.in",
  },

  {
    id: "vels-chennai",
    name: "VELS Medical College & Hospital",
    city: "Tiruvallur",
    state: "Tamil Nadu",
    domain: "velsuniv.ac.in",
  },

  {
    id: "lalithambigai-chennai",
    name: "Sri Lalithambigai Medical College & Hospital",
    city: "Chennai",
    state: "Tamil Nadu",
    domain: "drmgrdu.ac.in",
  },

  {
    id: "jr-medical-villupuram",
    name: "J.R. Medical College & Hospital",
    city: "Villupuram",
    state: "Tamil Nadu",
    domain: "jrmedicalcollege.com",
  },

  {
    id: "dhanalakshmi-perambalur",
    name: "Dhanalakshmi Srinivasan Institute of Medical Sciences & Hospital",
    city: "Perambalur",
    state: "Tamil Nadu",
    domain: "dsgroup.org",
  },

  {
    id: "st-peters-hosur",
    name: "St. Peter's Medical College, Hospital & Research Institute",
    city: "Hosur",
    state: "Tamil Nadu",
    domain: "stpetersmedicalcollege.com",
  },

  {
    id: "srinivasan-trichy",
    name: "Srinivasan Medical College & Hospital",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    domain: "srinivasanmedicalcollege.com",
  },


  /* =======================================================
     TELANGANA
  ======================================================= */

  {
    id: "malla-reddy-women",
    name: "Malla Reddy Medical College for Women",
    city: "Hyderabad",
    state: "Telangana",
    domain: "mrims.edu.in",
  },

  {
    id: "malla-reddy-institute",
    name: "Malla Reddy Institute of Medical Sciences",
    city: "Hyderabad",
    state: "Telangana",
    domain: "mrims.edu.in",
  },


  /* =======================================================
     UTTAR PRADESH
  ======================================================= */

  {
    id: "santosh-ghaziabad",
    name: "Santosh Medical College",
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    domain: "santosh.ac.in",
  },


  /* =======================================================
     UTTARAKHAND
  ======================================================= */

  {
    id: "graphic-era-dehradun",
    name: "Graphic Era Institute of Medical Sciences",
    city: "Dehradun",
    state: "Uttarakhand",
    domain: "geims.geu.ac.in",
  },

];


function makeSlug(college) {
  return college.id;
}


function getLogoUrl(domain) {

  if (!domain) {
    return null;
  }

  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}


function getInitials(name) {

  const words = name
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean);

  if (words.length === 1) {
    return words[0].substring(0, 2).toUpperCase();
  }

  return (
    words[0][0] +
    words[1][0]
  ).toUpperCase();

}


function DeemedColleges() {

  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("All");


  /* =======================================================
     STATES
  ======================================================= */

  const states = useMemo(() => {

    return [
      "All",
      ...Array.from(
        new Set(
          deemedColleges.map(
            (college) => college.state
          )
        )
      ).sort()
    ];

  }, []);


  /* =======================================================
     FILTER
  ======================================================= */

  const filteredColleges = useMemo(() => {

    const query = search
      .trim()
      .toLowerCase();


    return deemedColleges.filter(
      (college) => {

        const matchesSearch =
          !query ||
          `${college.name}
           ${college.city}
           ${college.state}`
            .toLowerCase()
            .includes(query);


        const matchesState =
          stateFilter === "All" ||
          college.state === stateFilter;


        return (
          matchesSearch &&
          matchesState
        );

      }
    );

  }, [search, stateFilter]);


  return (

    <div className="deemed-page">

      <PublicNavbar />


      {/* =================================================
          HERO
      ================================================= */}

      <section className="deemed-hero">

        <div className="deemed-hero-inner">

          <div className="deemed-eyebrow">

            <span className="deemed-eyebrow-dot"></span>

            GYANGURU MEDICAL COLLEGE DIRECTORY

          </div>


          <h1>

            Deemed Colleges of

            <br />

            <strong>UG Medical.</strong>

          </h1>


          <p>

            Explore deemed-university medical colleges
            participating in NEET UG counselling and
            discover your MBBS admission options.

          </p>


          <div className="deemed-hero-stats">

            <div>
              <strong>63</strong>
              <span>Colleges</span>
            </div>

            <div>
              <strong>14</strong>
              <span>States / UTs</span>
            </div>

            <div>
              <strong>MBBS</strong>
              <span>UG Medical</span>
            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          DIRECTORY
      ================================================= */}

      <main className="deemed-content">


        {/* =================================================
            DIRECTORY HEADER
        ================================================= */}

        <section className="deemed-directory-header">

          <div>

            <span>
              DEEMED UNIVERSITY DIRECTORY
            </span>

            <h2>
              Explore all deemed medical colleges.
            </h2>

            <p>
              Select a college to open its dedicated
              GyanGuru information page.
            </p>

          </div>


          <div className="deemed-count">

            Showing

            <strong>
              {filteredColleges.length}
            </strong>

            of 63

          </div>

        </section>


        {/* =================================================
            SEARCH + FILTER
        ================================================= */}

        <section className="deemed-controls">

          <div className="deemed-search">

            <span>
              ⌕
            </span>

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search college, city or state..."
            />

            {search && (

              <button
                type="button"
                onClick={() => setSearch("")}
              >
                ×
              </button>

            )}

          </div>


          <select
            value={stateFilter}
            onChange={(event) =>
              setStateFilter(event.target.value)
            }
            className="deemed-state-filter"
          >

            {states.map((state) => (

              <option
                key={state}
                value={state}
              >
                {state === "All"
                  ? "All States / UTs"
                  : state}
              </option>

            ))}

          </select>

        </section>


        {/* =================================================
            COLLEGE GRID
        ================================================= */}

        <section className="deemed-grid">

          {filteredColleges.map(
            (college, index) => (

              <Link
                key={college.id}
                to={`/colleges/deemed/${makeSlug(college)}`}
                className="deemed-card"
              >

                <div className="deemed-card-top">

                  <span className="deemed-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="deemed-badge">
                    DEEMED
                  </span>

                </div>


                {/* =================================================
                    LOGO
                ================================================= */}

                <div className="deemed-logo-wrap">

                  <img
                    src={getLogoUrl(college.domain)}
                    alt={`${college.name} official logo`}
                    className="deemed-logo"
                    loading="lazy"
                    onError={(event) => {

                      event.currentTarget.style.display =
                        "none";

                      const fallback =
                        event.currentTarget
                          .nextElementSibling;

                      if (fallback) {
                        fallback.style.display =
                          "flex";
                      }

                    }}
                  />


                  <div className="deemed-logo-fallback">

                    {getInitials(college.name)}

                  </div>

                </div>


                {/* =================================================
                    CARD BODY
                ================================================= */}

                <div className="deemed-card-body">

                  <span className="deemed-course">
                    UG MEDICAL • MBBS
                  </span>


                  <h3>
                    {college.name}
                  </h3>


                  <div className="deemed-location">

                    <span>
                      ●
                    </span>

                    {college.city}, {college.state}

                  </div>


                  <div className="deemed-card-footer">

                    <span>
                      View College
                    </span>

                    <span className="deemed-arrow">
                      →
                    </span>

                  </div>

                </div>

              </Link>

            )
          )}

        </section>


        {/* =================================================
            NO RESULTS
        ================================================= */}

        {filteredColleges.length === 0 && (

          <div className="deemed-no-results">

            <div>
              ?
            </div>

            <h3>
              No college found
            </h3>

            <p>
              Try another college name, city or state.
            </p>

            <button
              type="button"
              onClick={() => {

                setSearch("");
                setStateFilter("All");

              }}
            >
              Reset Search
            </button>

          </div>

        )}


        {/* =================================================
            INFORMATION STRIP
        ================================================= */}

        <section className="deemed-information">

          <div className="deemed-information-icon">
            i
          </div>


          <div>

            <span>
              ADMISSION INFORMATION
            </span>

            <h3>
              College details will be organised
              inside each college page.
            </h3>

            <p>
              Fees, seat matrix, NEET counselling,
              eligibility, admission pathway, campus
              information and other relevant details
              can be added to each individual college
              profile.
            </p>

          </div>

        </section>


        {/* =================================================
            COUNSELLING CTA
        ================================================= */}

        <section className="deemed-cta">

          <div>

            <span>
              NEED HELP CHOOSING?
            </span>

            <h2>
              Not sure which deemed college
              suits your profile?
            </h2>

            <p>
              Speak with the GyanGuru counselling team
              and understand your available options.
            </p>

          </div>


          <Link
            to="/contact"
            className="deemed-cta-button"
          >
            Talk to a Counsellor →
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
            © {new Date().getFullYear()}
            GyanGuru Consultancy.
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


export default DeemedColleges;
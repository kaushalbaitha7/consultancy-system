import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/deemed-colleges.css";
import PublicNavbar from "../../components/PublicNavbar";


/* =========================================================
   GYANGURU — DEEMED MEDICAL COLLEGES
   SOURCE: NEET 2026 DEEMED COLLEGES MBBS FEES & PACKAGE
   TOTAL LISTED RECORDS: 62
========================================================= */

const deemedColleges = [
  {
    sn: 1,
    name: "GITAM Institute of Medical Sciences & Research (GIMSR)",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    grade: "A+",
    seats: "150",
    fee: "₹25,37,000",
  },
  {
    sn: 2,
    name: "Hamdard Institute of Medical Sciences (HIMSR)",
    city: "New Delhi",
    state: "Delhi",
    grade: "A+",
    seats: "150",
    fee: "₹16,00,000",
  },
  {
    sn: 3,
    name: "SBKS Medical Institute & Research Centre (Sumandeep)",
    city: "Vadodara",
    state: "Gujarat",
    grade: "A-B",
    seats: "250",
    fee: "₹22,75,000",
  },
  {
    sn: 4,
    name: "Amrita School of Medicine",
    city: "Faridabad",
    state: "Haryana",
    grade: "A++",
    seats: "150",
    fee: "₹25,00,000",
  },
  {
    sn: 5,
    name: "MM Institute of Medical Sciences & Research",
    city: "Ambala",
    state: "Haryana",
    grade: "A",
    seats: "200",
    fee: "₹18,00,000",
  },
  {
    sn: 6,
    name: "Manipal Tata Medical College",
    city: "Jamshedpur",
    state: "Jharkhand",
    grade: "A",
    seats: "150",
    fee: "₹16,09,000",
  },
  {
    sn: 7,
    name: "Kasturba Medical College (KMC)",
    city: "Manipal",
    state: "Karnataka",
    grade: "A++",
    seats: "250",
    fee: "₹17,80,000",
  },
  {
    sn: 8,
    name: "Kasturba Medical College (KMC)",
    city: "Mangalore",
    state: "Karnataka",
    grade: "A++",
    seats: "250",
    fee: "₹17,80,000",
  },
  {
    sn: 9,
    name: "JSS Medical College",
    city: "Mysuru",
    state: "Karnataka",
    grade: "A+",
    seats: "250",
    fee: "₹21,95,100",
  },
  {
    sn: 10,
    name: "Jawaharlal Nehru Medical College (JNMC)",
    city: "Belagavi",
    state: "Karnataka",
    grade: "A+",
    seats: "200",
    fee: "₹19,20,000",
  },
  {
    sn: 11,
    name: "BLDE (Deemed University)",
    city: "Vijayapura",
    state: "Karnataka",
    grade: "A",
    seats: "200",
    fee: "₹19,00,000",
  },
  {
    sn: 12,
    name: "Yenepoya Medical College",
    city: "Mangalore",
    state: "Karnataka",
    grade: "A",
    seats: "250",
    fee: "₹23,00,000",
  },
  {
    sn: 13,
    name: "KS Hegde Medical Academy",
    city: "Mangalore",
    state: "Karnataka",
    grade: "A+",
    seats: "150",
    fee: "₹17,50,000",
  },
  {
    sn: 14,
    name: "Sri Siddhartha Medical College",
    city: "Tumkur",
    state: "Karnataka",
    grade: "A+",
    seats: "200",
    fee: "₹18,80,000",
  },
  {
    sn: 15,
    name: "Rajarajeswari Medical College & Hospital",
    city: "Bengaluru",
    state: "Karnataka",
    grade: "A+",
    seats: "250",
    fee: "₹24,50,000",
  },
  {
    sn: 16,
    name: "KLM JGMM Medical College",
    city: "Hubballi",
    state: "Karnataka",
    grade: "A+",
    seats: "150",
    fee: "₹19,20,000",
  },
  {
    sn: 17,
    name: "Amrita School of Medicine",
    city: "Kochi",
    state: "Kerala",
    grade: "A++",
    seats: "149",
    fee: "₹25,00,000",
  },
  {
    sn: 18,
    name: "Dr. D. Y. Patil Medical College",
    city: "Pune",
    state: "Maharashtra",
    grade: "A++",
    seats: "250",
    fee: "₹29,00,000",
  },
  {
    sn: 19,
    name: "Dr. D. Y. Patil Medical College",
    city: "Navi Mumbai",
    state: "Maharashtra",
    grade: "A++",
    seats: "250",
    fee: "₹28,00,000",
  },
  {
    sn: 20,
    name: "Bharati Vidyapeeth Medical College",
    city: "Pune",
    state: "Maharashtra",
    grade: "A+",
    seats: "150",
    fee: "₹28,55,600",
  },
  {
    sn: 21,
    name: "MGM Medical College",
    city: "Navi Mumbai",
    state: "Maharashtra",
    grade: "A",
    seats: "250",
    fee: "₹25,00,000",
  },
  {
    sn: 22,
    name: "Krishna Institute of Medical Sciences",
    city: "Karad",
    state: "Maharashtra",
    grade: "A+",
    seats: "250",
    fee: "₹25,00,000",
  },
  {
    sn: 23,
    name: "Datta Meghe Medical College",
    city: "Wanadongri, Nagpur",
    state: "Maharashtra",
    grade: "A++",
    seats: "250",
    fee: "₹26,00,000",
  },
  {
    sn: 24,
    name: "Kalinga Institute of Medical Sciences (KIMS)",
    city: "Bhubaneswar",
    state: "Odisha",
    grade: "A+",
    seats: "250",
    fee: "₹22,50,000",
  },
  {
    sn: 25,
    name: "IMS & SUM Hospital",
    city: "Bhubaneswar",
    state: "Odisha",
    grade: "A++",
    seats: "250",
    fee: "₹22,95,000",
  },
  {
    sn: 26,
    name: "Mahatma Gandhi Medical College & Research Institute",
    city: "Puducherry",
    state: "Puducherry",
    grade: "A",
    seats: "150",
    fee: "₹25,00,000",
  },
  {
    sn: 27,
    name: "Aarupadai Veedu Medical College",
    city: "Puducherry",
    state: "Puducherry",
    grade: "A",
    seats: "150",
    fee: "₹25,00,000",
  },
  {
    sn: 28,
    name: "Sri Ramachandra Medical College",
    city: "Chennai",
    state: "Tamil Nadu",
    grade: "A++",
    seats: "250",
    fee: "₹35,00,000",
  },
  {
    sn: 29,
    name: "SRM Medical College Hospital",
    city: "Chennai",
    state: "Tamil Nadu",
    grade: "A++",
    seats: "250",
    fee: "₹31,50,000",
  },
  {
    sn: 30,
    name: "Saveetha Medical College",
    city: "Chennai",
    state: "Tamil Nadu",
    grade: "A++",
    seats: "250",
    fee: "₹25,00,000",
  },
  {
    sn: 31,
    name: "Chettinad Hospital & Research Institute",
    city: "Kelambakkam",
    state: "Tamil Nadu",
    grade: "A",
    seats: "250",
    fee: "₹30,00,000",
  },
  {
    sn: 32,
    name: "Sree Balaji Medical College",
    city: "Chennai",
    state: "Tamil Nadu",
    grade: "A",
    seats: "250",
    fee: "₹25,00,000",
  },
  {
    sn: 33,
    name: "ACS Medical College and Hospital",
    city: "Chennai",
    state: "Tamil Nadu",
    grade: "A",
    seats: "250",
    fee: "₹25,00,000",
  },
  {
    sn: 34,
    name: "Santosh Medical College",
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    grade: "A",
    seats: "150",
    fee: "₹24,00,000",
  },
  {
    sn: 35,
    name: "Graphic Era Institute of Medical Sciences",
    city: "Dehradun",
    state: "Uttarakhand",
    grade: "A",
    seats: "150",
    fee: "₹24,50,000",
  },
  {
    sn: 36,
    name: "Sri Devaraj Urs Medical College",
    city: "Kolar",
    state: "Karnataka",
    grade: "A",
    seats: "150",
    fee: "₹20,20,000",
  },
  {
    sn: 37,
    name: "Sri Siddhartha Institute of Medical Sciences",
    city: "Bengaluru",
    state: "Karnataka",
    grade: "A+",
    seats: "150",
    fee: "₹18,10,000",
  },
  {
    sn: 38,
    name: "Symbiosis Medical College for Women",
    city: "Pune",
    state: "Maharashtra",
    grade: "A++",
    seats: "150",
    fee: "₹10,00,000",
  },
  {
    sn: 39,
    name: "Rural Medical College (PIMS)",
    city: "Loni",
    state: "Maharashtra",
    grade: "A",
    seats: "200",
    fee: "₹19,00,000",
  },
  {
    sn: 40,
    name: "MGM Medical College",
    city: "Sambhajinagar",
    state: "Maharashtra",
    grade: "A++",
    seats: "200",
    fee: "₹25,00,000",
  },
  {
    sn: 41,
    name: "Jawaharlal Nehru Medical College",
    city: "Wardha",
    state: "Maharashtra",
    grade: "A+",
    seats: "250",
    fee: "₹27,00,000",
  },
  {
    sn: 42,
    name: "Dr. D. Y. Patil Medical College",
    city: "Kolhapur",
    state: "Maharashtra",
    grade: "A++",
    seats: "150",
    fee: "₹24,10,000",
  },
  {
    sn: 43,
    name: "Bharati Vidyapeeth Medical College",
    city: "Sangli",
    state: "Maharashtra",
    grade: "A+",
    seats: "150",
    fee: "₹25,52,550",
  },
  {
    sn: 44,
    name: "Sri Lakshmi Narayana Institute of Medical Sciences",
    city: "Puducherry",
    state: "Puducherry",
    grade: "B",
    seats: "250",
    fee: "₹26,00,000",
  },
  {
    sn: 45,
    name: "Vinayaka Mission's Kirupananda Variyar Medical College",
    city: "Salem",
    state: "Tamil Nadu",
    grade: "B",
    seats: "200",
    fee: "₹22,50,000",
  },
  {
    sn: 46,
    name: "Vinayaka Missions Medical College",
    city: "Karaikal",
    state: "Puducherry",
    grade: "A",
    seats: "200",
    fee: "₹22,50,000",
  },
  {
    sn: 47,
    name: "Meenakshi Medical College",
    city: "Kanchipuram",
    state: "Tamil Nadu",
    grade: "B",
    seats: "250",
    fee: "₹25,00,000",
  },
  {
    sn: 48,
    name: "Sri Lalithambigai Medical College",
    city: "Chennai",
    state: "Tamil Nadu",
    grade: "B",
    seats: "200",
    fee: "₹23,00,000",
  },
  {
    sn: 49,
    name: "Shri Sathya Sai Medical College",
    city: "Chengalpattu",
    state: "Tamil Nadu",
    grade: "B",
    seats: "250",
    fee: "₹22,00,000",
  },
  {
    sn: 50,
    name: "SRM Medical College (Trichy Campus)",
    city: "Trichy",
    state: "Tamil Nadu",
    grade: "A++",
    seats: "150",
    fee: "₹13,50,000",
  },
  {
    sn: 51,
    name: "Bhaarath Medical College",
    city: "Chennai",
    state: "Tamil Nadu",
    grade: "B",
    seats: "250",
    fee: "₹30,00,000",
  },
  {
    sn: 52,
    name: "Vels Medical College & Hospital",
    city: "Thiruvallur",
    state: "Tamil Nadu",
    grade: "B",
    seats: "250",
    fee: "₹30,00,000",
  },
  {
    sn: 53,
    name: "Dhanalakshmi Srinivasan Medical College",
    city: "Perambalur",
    state: "Tamil Nadu",
    grade: "A",
    seats: "250",
    fee: "₹15,00,000 (Mgmt)",
  },
  {
    sn: 54,
    name: "Veltech Multispeciality Medical College",
    city: "Avadi",
    state: "Tamil Nadu",
    grade: "B",
    seats: "150",
    fee: "₹22,00,000",
  },
  {
    sn: 55,
    name: "Sri Venkateshwaraa Medical College",
    city: "Puducherry",
    state: "Puducherry",
    grade: "B",
    seats: "250",
    fee: "₹16,80,000",
  },
  {
    sn: 56,
    name: "MM College of Medical Sciences",
    city: "Solan",
    state: "Himachal Pradesh",
    grade: "A",
    seats: "150",
    fee: "₹15,97,200",
  },
  {
    sn: 57,
    name: "IMS & SUM Hospital (Campus 2)",
    city: "Bhubaneswar",
    state: "Odisha",
    grade: "A++",
    seats: "250",
    fee: "₹17,95,000",
  },
  {
    sn: 58,
    name: "MGM Medical College",
    city: "Vashi / Navi Mumbai",
    state: "Maharashtra",
    grade: "A++",
    seats: "100",
    fee: "₹25,00,000",
  },
  {
    sn: 59,
    name: "Dhanalakshmi Srinivasan Medical College",
    city: "Perambalur",
    state: "Tamil Nadu",
    grade: "B++",
    seats: "250",
    fee: "₹27,00,000",
  },
  {
    sn: 60,
    name: "Chettinad Institute of Medical Education & Research (CIMER)",
    city: "KGF",
    state: "Karnataka",
    grade: "A++ (CARE / NAAC)",
    seats: "100",
    fee: "₹22,22,222",
  },
  {
    sn: 61,
    name: "Sri Nivasan Medical College",
    city: "Trichy",
    state: "Tamil Nadu",
    grade: "Not specified",
    seats: "250",
    fee: "₹16,20,000",
  },
  {
    sn: 62,
    name: "St. Peter's Medical College",
    city: "Krishnagiri",
    state: "Tamil Nadu",
    grade: "Not specified",
    seats: "Not specified",
    fee: "Not specified",
  },
];


/* =========================================================
   STATE LIST
========================================================= */

const states = [
  "All States",
  ...Array.from(
    new Set(deemedColleges.map((college) => college.state))
  ).sort(),
];


/* =========================================================
   COMPONENT
========================================================= */

function DeemedColleges() {
  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] =
    useState("All States");


  /* =======================================================
     SEARCH + STATE FILTER
  ======================================================= */

  const filteredColleges = useMemo(() => {
    const query = search.trim().toLowerCase();

    return deemedColleges.filter((college) => {
      const matchesSearch =
        !query ||
        `
          ${college.name}
          ${college.city}
          ${college.state}
          ${college.grade}
          ${college.seats}
          ${college.fee}
        `
          .toLowerCase()
          .includes(query);

      const matchesState =
        selectedState === "All States" ||
        college.state === selectedState;

      return matchesSearch && matchesState;
    });
  }, [search, selectedState]);


  return (
    <div className="deemed-page">

      <PublicNavbar />


      {/* =================================================
          PAGE HERO
      ================================================= */}

      <section className="deemed-hero">

        <div className="deemed-hero-inner">

          <div className="deemed-eyebrow">
            <span className="deemed-eyebrow-dot"></span>

            DEEMED MEDICAL COLLEGES

          </div>


          <h1>
            Explore deemed
            <br />
            <strong>medical colleges.</strong>
          </h1>


          <p>
            Compare deemed medical colleges with important
            admission information including grade, available
            seats and indicative annual MBBS fee.
          </p>


          {/* =================================================
              SEARCH
          ================================================= */}

          <div className="deemed-search">

            <span className="deemed-search-icon">
              ⌕
            </span>

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search college, city, state..."
              aria-label="Search deemed medical colleges"
            />

            {search && (
              <button
                type="button"
                className="deemed-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}

            <button
              type="button"
              className="deemed-search-button"
            >
              Search
            </button>

          </div>


          {/* =================================================
              FILTERS
          ================================================= */}

          <div className="deemed-filter-row">

            <div className="deemed-filter">

              <label htmlFor="state-filter">
                State
              </label>

              <select
                id="state-filter"
                value={selectedState}
                onChange={(event) =>
                  setSelectedState(event.target.value)
                }
              >
                {states.map((state) => (
                  <option
                    key={state}
                    value={state}
                  >
                    {state}
                  </option>
                ))}
              </select>

            </div>


            <div className="deemed-result-count">

              <strong>
                {filteredColleges.length}
              </strong>

              <span>
                colleges found
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          COLLEGE DIRECTORY
      ================================================= */}

      <main className="deemed-directory">

        <div className="deemed-directory-header">

          <div>

            <span>
              2026 MBBS DIRECTORY
            </span>

            <h2>
              Deemed Medical Colleges
            </h2>

            <p>
              College information for admission planning
              and counselling guidance.
            </p>

          </div>


          <div className="deemed-total">

            <strong>
              {deemedColleges.length}
            </strong>

            <span>
              Listed Records
            </span>

          </div>

        </div>


        {/* =================================================
            CARDS
        ================================================= */}

        {filteredColleges.length > 0 ? (

          <div className="deemed-college-grid">

            {filteredColleges.map((college) => (

              <article
                className="deemed-college-card"
                key={`${college.sn}-${college.name}-${college.city}`}
              >

                {/* CARD TOP */}

                <div className="deemed-card-top">

                  <div className="deemed-card-logo">

                    <img
                      src="/logo.png"
                      alt="GyanGuru"
                    />

                  </div>


                  <span className="deemed-card-number">
                    {String(college.sn).padStart(2, "0")}
                  </span>

                </div>


                {/* COLLEGE NAME */}

                <div className="deemed-card-heading">

                  <h3>
                    {college.name}
                  </h3>

                  <p>
                    {college.city}, {college.state}
                  </p>

                </div>


                {/* DETAILS */}

                <div className="deemed-card-details">

                  <div className="deemed-detail">

                    <span>
                      GRADE
                    </span>

                    <strong className="grade-value">
                      {college.grade}
                    </strong>

                  </div>


                  <div className="deemed-detail">

                    <span>
                      SEATS
                    </span>

                    <strong>
                      {college.seats}
                    </strong>

                  </div>


                  <div className="deemed-detail deemed-fee">

                    <span>
                      FEE / YEAR
                    </span>

                    <strong>
                      {college.fee}
                    </strong>

                  </div>

                </div>


                {/* CARD FOOTER */}

                <div className="deemed-card-footer">

                  <span>
                    MBBS · DEEMED
                  </span>

                  <Link to="/contact">
                    Get Guidance →
                  </Link>

                </div>

              </article>

            ))}

          </div>

        ) : (

          <div className="deemed-no-results">

            <div className="deemed-no-results-icon">
              G
            </div>

            <h3>
              No colleges found
            </h3>

            <p>
              Try another college name, city or state.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedState("All States");
              }}
            >
              Reset Search
            </button>

          </div>

        )}

      </main>


      {/* =================================================
          BOTTOM CTA
      ================================================= */}

      <section className="deemed-cta">

        <div>

          <span>
            NEED ADMISSION GUIDANCE?
          </span>

          <h2>
            Let GyanGuru help you choose wisely.
          </h2>

          <p>
            Understand your options before making an
            important medical admission decision.
          </p>

        </div>


        <Link
          to="/contact"
          className="deemed-cta-button"
        >
          Talk to a Counsellor →
        </Link>

      </section>

    </div>
  );
}


export default DeemedColleges;
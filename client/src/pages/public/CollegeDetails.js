import React from "react";
import {
  Link,
  useParams,
} from "react-router-dom";

import PublicNavbar from "../../components/PublicNavbar";

import "../../styles/college-details.css";

import {
  getCollegeDetails,
} from "../../data/collegeDetails";


/* =========================================================
   COLLEGE DIRECTORY DATA

   Keep this small here.

   Later this can be replaced completely by the
   Excel / PDF database.
========================================================= */

const colleges = {

  "gitam-gimsr": {
    name:
      "GITAM Institute of Medical Sciences and Research",
    city:
      "Visakhapatnam",
    state:
      "Andhra Pradesh",
    domain:
      "gitam.edu",
  },

  "himssr-delhi": {
    name:
      "Hamdard Institute of Medical Sciences & Research",
    city:
      "New Delhi",
    state:
      "Delhi",
    domain:
      "himsr.co.in",
  },

  "sbks-vadodara": {
    name:
      "SBKS Medical Institute & Research Centre",
    city:
      "Vadodara",
    state:
      "Gujarat",
    domain:
      "sumandeepuniversity.co.in",
  },

  "amrita-faridabad": {
    name:
      "Amrita School of Medicine",
    city:
      "Faridabad",
    state:
      "Haryana",
    domain:
      "amrita.edu",
  },

  "mmimsr-mullana": {
    name:
      "Maharishi Markandeshwar Institute of Medical Sciences & Research",
    city:
      "Mullana, Ambala",
    state:
      "Haryana",
    domain:
      "mmimsr.edu.in",
  },

  "manipal-tata-jamshedpur": {
    name:
      "Manipal Tata Medical College",
    city:
      "Jamshedpur",
    state:
      "Jharkhand",
    domain:
      "manipal.edu",
  },

};


/* =========================================================
   FALLBACK

   Allows the profile to work for all colleges once their
   directory object is connected to the central data file.
========================================================= */

function createCollegeFromId(id) {

  if (colleges[id]) {
    return colleges[id];
  }

  return {

    name:
      id
        .replace(/-/g, " ")
        .replace(/\b\w/g, (letter) =>
          letter.toUpperCase()
        ),

    city:
      "India",

    state:
      "India",

    domain:
      "",

  };

}


/* =========================================================
   LOGO
========================================================= */

function getLogoUrl(domain) {

  if (!domain) {
    return null;
  }

  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

}


/* =========================================================
   TABS
========================================================= */

const tabs = [

  {
    key: "overview",
    label: "Overview",
  },

  {
    key: "cutoff",
    label: "Cutoff",
  },

  {
    key: "fees",
    label: "Fees",
  },

  {
    key: "admission",
    label: "Admission",
  },

  {
    key: "hospital",
    label: "Hospital",
  },

  {
    key: "facilities",
    label: "Facilities",
  },

];


/* =========================================================
   COMPONENT
========================================================= */

function CollegeDetails() {

  const {
    collegeId,
    section,
  } = useParams();



  const college =
    createCollegeFromId(collegeId);


  const details =
    getCollegeDetails(collegeId);


  const activeSection =
    section || "overview";


  const validSection =
    tabs.some(
      (tab) =>
        tab.key === activeSection
    )
      ? activeSection
      : "overview";


  const logo =
    getLogoUrl(college.domain);


  return (

    <div className="college-details-page">

      <PublicNavbar />


      {/* =================================================
          COLLEGE HEADER
      ================================================= */}

      <header className="college-profile-header">

        <div className="college-profile-inner">


          {/* BACK */}

          <Link
            to="/colleges/deemed"
            className="college-back"
          >
            ← Back to Colleges
          </Link>


          {/* =================================================
              IDENTITY
          ================================================= */}

          <div className="college-identity">

            <div className="college-profile-logo">

              {logo ? (

                <img
                  src={logo}
                  alt={`${college.name} official logo`}
                />

              ) : (

                <span>
                  {college.name
                    .substring(0, 2)
                    .toUpperCase()}
                </span>

              )}

            </div>


            <div className="college-profile-title">

              <span className="college-profile-label">
                DEEMED UNIVERSITY • MBBS
              </span>


              <h1>
                {college.name}
              </h1>


              <p>
                ● {college.city}, {college.state}
              </p>

            </div>

          </div>


          {/* =================================================
              QUICK INFO
          ================================================= */}

          <section className="college-quick-info">

            <div className="quick-info-heading">

              <span>
                QUICK INFORMATION
              </span>

              <strong>
                {details.type}
              </strong>

            </div>


            <div className="quick-info-grid">


              <div className="quick-info-item">

                <span>
                  ESTABLISHED
                </span>

                <strong>
                  {details.established}
                </strong>

              </div>


              <div className="quick-info-item">

                <span>
                  GRADE
                </span>

                <strong className="quick-grade">
                  {details.grade}
                </strong>

              </div>


              <div className="quick-info-item">

                <span>
                  MBBS SEATS
                </span>

                <strong>
                  {details.seats}
                </strong>

              </div>


              <div className="quick-info-item">

                <span>
                  COURSE
                </span>

                <strong>
                  {details.course}
                </strong>

              </div>


              <div className="quick-info-item">

                <span>
                  UNIVERSITY
                </span>

                <strong>
                  {details.university}
                </strong>

              </div>

            </div>

          </section>

        </div>

      </header>


      {/* =================================================
          INTERNAL COLLEGE NAVIGATION
      ================================================= */}

      <div className="college-section-navigation">

        <div className="college-section-navigation-inner">

          {tabs.map((tab) => (

            <Link
              key={tab.key}
              to={
                tab.key === "overview"
                  ? `/colleges/deemed/${collegeId}`
                  : `/colleges/deemed/${collegeId}/${tab.key}`
              }
              className={
                validSection === tab.key
                  ? "college-section-link active"
                  : "college-section-link"
              }
            >

              {tab.label}

            </Link>

          ))}

        </div>

      </div>


      {/* =================================================
          CONTENT
      ================================================= */}

      <main className="college-profile-content">

        {validSection === "overview" && (

          <OverviewSection
            college={college}
            details={details}
          />

        )}


        {validSection === "cutoff" && (

          <CutoffSection
            details={details}
          />

        )}


        {validSection === "fees" && (

          <FeesSection
            details={details}
          />

        )}


        {validSection === "admission" && (

          <AdmissionSection
            details={details}
          />

        )}


        {validSection === "hospital" && (

          <HospitalSection
            details={details}
          />

        )}


        {validSection === "facilities" && (

          <FacilitiesSection
            details={details}
          />

        )}


        {/* =================================================
            COUNSELLING CTA
        ================================================= */}

        <section className="college-profile-cta">

          <div>

            <span>
              GYANGURU COUNSELLING
            </span>

            <h2>
              Need help understanding this college?
            </h2>

            <p>
              Speak with the GyanGuru counselling team
              before making an important admission decision.
            </p>

          </div>


          <Link
            to="/contact"
            className="college-profile-cta-button"
          >
            Talk to a Counsellor →
          </Link>

        </section>

      </main>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="college-profile-footer">

        <div>

          <strong>
            GYANGURU
          </strong>

          <span>
            CONSULTANCY
          </span>

        </div>


        <p>
          Medical admission guidance for students
          and families.
        </p>

      </footer>

    </div>

  );

}


/* =========================================================
   OVERVIEW
========================================================= */

function OverviewSection({
  college,
  details,
}) {

  return (

    <section className="profile-section">

      <div className="profile-section-heading">

        <span>
          COLLEGE OVERVIEW
        </span>

        <h2>
          About {college.name}
        </h2>

      </div>


      <div className="overview-layout">


        <article className="profile-card about-card">

          <span>
            ABOUT THE COLLEGE
          </span>

          <p>
            {details.about}
          </p>

        </article>


        <article className="profile-card">

          <span>
            LOCATION
          </span>

          <h3>
            {college.city}
          </h3>

          <p>
            {details.address}
          </p>

          <div className="location-placeholder">
            MAP LOCATION
          </div>

        </article>


      </div>


      <div className="profile-section-heading second-heading">

        <span>
          ADMISSION SNAPSHOT
        </span>

        <h2>
          Important at a glance
        </h2>

      </div>


      <div className="snapshot-grid">

        <Snapshot
          label="College Grade"
          value={details.grade}
        />

        <Snapshot
          label="MBBS Seats"
          value={details.seats}
        />

        <Snapshot
          label="Established"
          value={details.established}
        />

        <Snapshot
          label="University"
          value={details.university}
        />

      </div>


      <div className="profile-note">

        <strong>
          Information status
        </strong>

        <p>
          Detailed college information will be expanded
          as verified GyanGuru database records are added.
        </p>

      </div>

    </section>

  );

}


/* =========================================================
   SNAPSHOT
========================================================= */

function Snapshot({
  label,
  value,
}) {

  return (

    <div className="snapshot-card">

      <span>
        {label}
      </span>

      <strong>
        {value}
      </strong>

    </div>

  );

}


/* =========================================================
   CUTOFF
========================================================= */

function CutoffSection({
  details,
}) {

  return (

    <section className="profile-section">

      <SectionHeading
        eyebrow="NEET UG CUTOFF"
        title="Year-wise & round-wise cutoff"
        text="Cutoff information is organised by admission year, counselling round and category."
      />


      {details.cutoff.length === 0 ? (

        <EmptyData
          title="Cutoff data will appear here"
          text="Round-wise cutoff records will be added from the GyanGuru counselling database."
        />

      ) : (

        <div className="data-table-wrapper">

          <table className="college-data-table">

            <thead>

              <tr>

                <th>
                  YEAR
                </th>

                <th>
                  ROUND
                </th>

                <th>
                  CATEGORY
                </th>

                <th>
                  OPENING RANK
                </th>

                <th>
                  CLOSING RANK
                </th>

                <th>
                  SCORE
                </th>

              </tr>

            </thead>


            <tbody>

              {details.cutoff.map(
                (row, index) => (

                  <tr key={index}>

                    <td>
                      {row.year}
                    </td>

                    <td>
                      {row.round}
                    </td>

                    <td>
                      {row.category}
                    </td>

                    <td>
                      {row.openingRank}
                    </td>

                    <td>
                      {row.closingRank}
                    </td>

                    <td>
                      {row.score}
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      )}

    </section>

  );

}


/* =========================================================
   FEES
========================================================= */

function FeesSection({
  details,
}) {

  return (

    <section className="profile-section">

      <SectionHeading
        eyebrow="MBBS FEE STRUCTURE"
        title="Fees & packages"
        text="Fee information is organised so students can understand the major cost components."
      />


      {details.fees.length === 0 ? (

        <EmptyData
          title="Fee structure will appear here"
          text="Detailed tuition, hostel and other fee components will be added to the database."
        />

      ) : (

        <div className="data-table-wrapper">

          <table className="college-data-table fee-table">

            <thead>

              <tr>

                <th>
                  PARTICULAR
                </th>

                <th>
                  AMOUNT
                </th>

              </tr>

            </thead>


            <tbody>

              {details.fees.map(
                (fee, index) => (

                  <tr key={index}>

                    <td>
                      {fee.particular}
                    </td>

                    <td>
                      <strong>
                        {fee.amount}
                      </strong>
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      )}


      <div className="profile-note">

        <strong>
          Important
        </strong>

        <p>
          Fees may vary by admission year, category,
          applicable package and institutional rules.
          Verify the applicable fee before admission.
        </p>

      </div>

    </section>

  );

}


/* =========================================================
   ADMISSION
========================================================= */

function AdmissionSection({
  details,
}) {

  const admission =
    details.admission;


  return (

    <section className="profile-section">

      <SectionHeading
        eyebrow="ADMISSION"
        title="Admission pathway"
        text="Important admission and counselling information for the college."
      />


      <div className="admission-grid">


        <InfoCard
          title="Eligibility"
          value={admission.eligibility}
        />


        <InfoCard
          title="Counselling"
          value={admission.counselling}
        />


        <InfoCard
          title="Quota"
          value={admission.quota}
        />


        <InfoCard
          title="Admission Process"
          value={admission.process}
        />

      </div>


      <div className="profile-section-heading second-heading">

        <span>
          DOCUMENTS
        </span>

        <h2>
          Documents to keep ready
        </h2>

      </div>


      <div className="document-grid">

        {admission.documents.length === 0 ? (

          <EmptyData
            title="Document list will be updated"
            text="The final checklist will be maintained according to the applicable counselling process."
          />

        ) : (

          admission.documents.map(
            (document, index) => (

              <div
                className="document-item"
                key={index}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                  {document}
                </strong>

              </div>

            )
          )

        )}

      </div>

    </section>

  );

}


/* =========================================================
   HOSPITAL
========================================================= */

function HospitalSection({
  details,
}) {

  const hospital =
    details.hospital;


  const hospitalItems = [

    ["Hospital", hospital.name],

    ["Total Beds", hospital.beds],

    ["ICU Beds", hospital.icu],

    ["Emergency", hospital.emergency],

    ["OPD", hospital.opd],

    ["IPD", hospital.ipd],

    ["Operation Theatre", hospital.operationTheatre],

    ["Blood Bank", hospital.bloodBank],

    ["Pharmacy", hospital.pharmacy],

    ["Diagnostics", hospital.diagnostics],

  ];


  return (

    <section className="profile-section">

      <SectionHeading
        eyebrow="TEACHING HOSPITAL"
        title="Hospital & clinical facilities"
        text="Hospital information is organised for understanding the clinical training environment."
      />


      <div className="hospital-grid">

        {hospitalItems.map(
          ([label, value]) => (

            <div
              className="hospital-item"
              key={label}
            >

              <span>
                {label}
              </span>

              <strong>
                {value}
              </strong>

            </div>

          )
        )}

      </div>


      <div className="profile-note">

        <strong>
          Data verification
        </strong>

        <p>
          Hospital capacity and clinical infrastructure
          can change. Verified institutional data should
          be used when making final comparisons.
        </p>

      </div>

    </section>

  );

}


/* =========================================================
   FACILITIES
========================================================= */

function FacilitiesSection({
  details,
}) {

  return (

    <section className="profile-section">

      <SectionHeading
        eyebrow="CAMPUS"
        title="Facilities & student life"
        text="Important campus and student facilities can be maintained here."
      />


      {details.facilities.length === 0 ? (

        <EmptyData
          title="Facilities data will be added"
          text="Verified campus facilities will appear here once entered into the GyanGuru database."
        />

      ) : (

        <div className="facility-grid">

          {details.facilities.map(
            (facility, index) => (

              <div
                className="facility-card"
                key={facility}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                  {facility}
                </strong>

                <p>
                  College facility
                </p>

              </div>

            )
          )}

        </div>

      )}

    </section>

  );

}


/* =========================================================
   COMMON HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  text,
}) {

  return (

    <div className="profile-section-heading">

      <span>
        {eyebrow}
      </span>

      <h2>
        {title}
      </h2>

      <p>
        {text}
      </p>

    </div>

  );

}


/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({
  title,
  value,
}) {

  return (

    <article className="info-card">

      <span>
        {title}
      </span>

      <p>
        {value}
      </p>

    </article>

  );

}


/* =========================================================
   EMPTY DATA
========================================================= */

function EmptyData({
  title,
  text,
}) {

  return (

    <div className="empty-profile-data">

      <div>
        G
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </div>

  );

}


export default CollegeDetails;
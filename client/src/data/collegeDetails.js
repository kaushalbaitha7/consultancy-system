/* =========================================================
   GYANGURU
   COLLEGE DETAIL DATA SYSTEM

   This file is the future data layer.

   Later:
   Excel / PDF / Admin Panel
        ↓
   this data structure
        ↓
   CollegeDetails.jsx
========================================================= */


export const collegeDetails = {

  "gitam-gimsr": {

    established: "2015",

    grade: "A+",

    seats: 150,

    university:
      "GITAM (Deemed to be University)",

    type:
      "Deemed University",

    course:
      "MBBS",

    about:
      "GITAM Institute of Medical Sciences and Research is a medical institution associated with GITAM (Deemed to be University). This profile is designed to organise important admission, fee, cutoff, hospital and campus information in one place.",

    address:
      "Visakhapatnam, Andhra Pradesh",

    pincode:
      "To be updated",

    website:
      "https://www.gitam.edu",

    contact:
      "To be updated",

    email:
      "To be updated",


    cutoff: [

      {
        year: "2026",
        round: "Round 1",
        category: "Open",
        openingRank: "To be updated",
        closingRank: "To be updated",
        score: "To be updated",
      },

      {
        year: "2026",
        round: "Round 2",
        category: "Open",
        openingRank: "To be updated",
        closingRank: "To be updated",
        score: "To be updated",
      },

      {
        year: "2026",
        round: "Round 3",
        category: "Open",
        openingRank: "To be updated",
        closingRank: "To be updated",
        score: "To be updated",
      },

      {
        year: "2026",
        round: "Stray Vacancy",
        category: "Open",
        openingRank: "To be updated",
        closingRank: "To be updated",
        score: "To be updated",
      },

    ],


    fees: [

      {
        particular: "Annual MBBS Fee",
        amount: "₹25,37,000",
      },

      {
        particular: "Hostel",
        amount: "To be updated",
      },

      {
        particular: "Mess",
        amount: "To be updated",
      },

      {
        particular: "University Charges",
        amount: "To be updated",
      },

      {
        particular: "Security Deposit",
        amount: "To be updated",
      },

      {
        particular: "Other Charges",
        amount: "To be updated",
      },

    ],


    admission: {

      eligibility:
        "NEET-UG qualification and applicable counselling eligibility.",

      counselling:
        "Applicable deemed-university counselling authority",

      quota:
        "Deemed University",

      process:
        "Registration → Choice Filling → Seat Allotment → Reporting",

      documents: [
        "NEET scorecard",
        "NEET admit card",
        "Class 10 certificate",
        "Class 12 certificate",
        "Valid identity proof",
        "Category certificate where applicable",
        "Migration / transfer documents where applicable",
      ],

    },


    hospital: {

      name:
        "GIMSR Hospital",

      beds:
        "To be updated",

      icu:
        "To be updated",

      emergency:
        "To be updated",

      opd:
        "To be updated",

      ipd:
        "To be updated",

      operationTheatre:
        "To be updated",

      bloodBank:
        "To be updated",

      pharmacy:
        "To be updated",

      diagnostics:
        "To be updated",

    },


    facilities: [

      "Teaching Hospital",

      "Medical Laboratories",

      "Central Library",

      "Lecture Theatres",

      "Hostel",

      "Cafeteria",

      "Clinical Training",

      "Sports Facilities",

      "Student Common Areas",

      "Transportation",

    ],

  },


  /* =======================================================
     GENERIC DETAIL RECORDS FOR THE REMAINING COLLEGES

     Their directory information already comes from
     DeemedColleges.js.

     Detailed fields can be filled from Excel/PDF later.
  ======================================================= */


  "himssr-delhi": {
    established: "2012",
    grade: "A+",
    seats: 150,
    university: "Hamdard University",
    type: "Deemed University",
    course: "MBBS",
    address: "New Delhi, Delhi",
    fees: [
      {
        particular: "Annual MBBS Fee",
        amount: "₹16,00,000",
      },
    ],
  },


  "sbks-vadodara": {
    established: "2002",
    grade: "A-B",
    seats: 250,
    university: "Sumandeep Vidyapeeth",
    type: "Deemed University",
    course: "MBBS",
    address: "Vadodara, Gujarat",
    fees: [
      {
        particular: "Annual MBBS Fee",
        amount: "₹22,75,000",
      },
    ],
  },


  "amrita-faridabad": {
    established: "2023",
    grade: "A++",
    seats: 150,
    university: "Amrita Vishwa Vidyapeetham",
    type: "Deemed University",
    course: "MBBS",
    address: "Faridabad, Haryana",
    fees: [
      {
        particular: "Annual MBBS Fee",
        amount: "₹25,00,000",
      },
    ],
  },


  "mmimsr-mullana": {
    established: "2003",
    grade: "A",
    seats: 200,
    university: "Maharishi Markandeshwar",
    type: "Deemed University",
    course: "MBBS",
    address: "Mullana, Ambala, Haryana",
    fees: [
      {
        particular: "Annual MBBS Fee",
        amount: "₹18,00,000",
      },
    ],
  },


  "manipal-tata-jamshedpur": {
    established: "2020",
    grade: "A",
    seats: 150,
    university: "Manipal Academy of Higher Education",
    type: "Deemed University",
    course: "MBBS",
    address: "Jamshedpur, Jharkhand",
    fees: [
      {
        particular: "Annual MBBS Fee",
        amount: "₹16,09,000",
      },
    ],
  },

};


/* =========================================================
   DEFAULT DETAIL STRUCTURE

   This means ALL colleges can open immediately even before
   their detailed Excel/PDF data is imported.
========================================================= */

export function getCollegeDetails(id) {

  return {

    established:
      collegeDetails[id]?.established ||
      "To be updated",

    grade:
      collegeDetails[id]?.grade ||
      "To be updated",

    seats:
      collegeDetails[id]?.seats ??
      "To be updated",

    university:
      collegeDetails[id]?.university ||
      "Deemed University",

    type:
      collegeDetails[id]?.type ||
      "Deemed University",

    course:
      collegeDetails[id]?.course ||
      "MBBS",

    about:
      collegeDetails[id]?.about ||
      "Detailed college information will be added to this profile as the GyanGuru college database is updated.",

    address:
      collegeDetails[id]?.address ||
      "To be updated",

    pincode:
      collegeDetails[id]?.pincode ||
      "To be updated",

    website:
      collegeDetails[id]?.website ||
      "",

    contact:
      collegeDetails[id]?.contact ||
      "To be updated",

    email:
      collegeDetails[id]?.email ||
      "To be updated",

    cutoff:
      collegeDetails[id]?.cutoff ||
      [],

    fees:
      collegeDetails[id]?.fees ||
      [],

    admission:
      collegeDetails[id]?.admission ||
      {

        eligibility:
          "To be updated",

        counselling:
          "To be updated",

        quota:
          "Deemed University",

        process:
          "To be updated",

        documents: [],

      },

    hospital:
      collegeDetails[id]?.hospital ||
      {

        name:
          "To be updated",

        beds:
          "To be updated",

        icu:
          "To be updated",

        emergency:
          "To be updated",

        opd:
          "To be updated",

        ipd:
          "To be updated",

        operationTheatre:
          "To be updated",

        bloodBank:
          "To be updated",

        pharmacy:
          "To be updated",

        diagnostics:
          "To be updated",

      },

    facilities:
      collegeDetails[id]?.facilities ||
      [],

  };

}
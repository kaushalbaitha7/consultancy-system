import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


/* =========================================================
   PUBLIC GYANGURU WEBSITE
========================================================= */

import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Courses from "./pages/public/Courses";
import Colleges from "./pages/public/Colleges";
import DeemedColleges from "./pages/public/DeemedColleges";
import CollegeDetails from "./pages/public/CollegeDetails";
import Services from "./pages/public/Services";
import Reviews from "./pages/public/Reviews";
import Contact from "./pages/public/Contact";


/* =========================================================
   STUDENT PORTAL
========================================================= */

import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyOtp from "./pages/VerifyOtp";

import Dashboard from "./pages/Dashboard";

import PersonalDetails from "./pages/PersonalDetails";
import EducationalDetails from "./pages/EducationalDetails";
import AddressDetails from "./pages/AddressDetails";


function App() {

  return (

    <BrowserRouter>

      <Routes>


        {/* =================================================
            PUBLIC WEBSITE
        ================================================= */}

        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/about"
          element={<About />}
        />


        <Route
          path="/courses"
          element={<Courses />}
        />


        <Route
          path="/colleges"
          element={<Colleges />}
        />


        {/* =================================================
            DEEMED UG MEDICAL COLLEGES
        ================================================= */}

        <Route
          path="/colleges/deemed"
          element={<DeemedColleges />}
        />


        {/* =================================================
            INDIVIDUAL DEEMED COLLEGE PROFILE

            One reusable page handles ALL colleges.

            Example:

            /colleges/deemed/gitam-gimsr
            /colleges/deemed/jss-mysuru
            /colleges/deemed/kmc-manipal

        ================================================= */}

        <Route
          path="/colleges/deemed/:collegeId"
          element={<CollegeDetails />}
        />


        {/* =================================================
            INDIVIDUAL COLLEGE SECTIONS

            Example:

            /colleges/deemed/gitam-gimsr/cutoff
            /colleges/deemed/gitam-gimsr/fees
            /colleges/deemed/gitam-gimsr/admission
            /colleges/deemed/gitam-gimsr/hospital
            /colleges/deemed/gitam-gimsr/facilities

            The same CollegeDetails component handles
            every section.
        ================================================= */}

        <Route
          path="/colleges/deemed/:collegeId/:section"
          element={<CollegeDetails />}
        />


        {/* =================================================
            PUBLIC SERVICES
        ================================================= */}

        <Route
          path="/services"
          element={<Services />}
        />


        <Route
          path="/reviews"
          element={<Reviews />}
        />


        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* =================================================
            STUDENT AUTHENTICATION
        ================================================= */}

        <Route
          path="/login"
          element={<Login />}
        />


        <Route
          path="/register"
          element={<Register />}
        />


        <Route
          path="/verify-otp"
          element={<VerifyOtp />}
        />


        {/* =================================================
            STUDENT DASHBOARD
        ================================================= */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />


        {/* =================================================
            STUDENT DETAILS
        ================================================= */}

        <Route
          path="/personal-details"
          element={<PersonalDetails />}
        />


        <Route
          path="/educational-details"
          element={<EducationalDetails />}
        />


        <Route
          path="/address-details"
          element={<AddressDetails />}
        />


      </Routes>

    </BrowserRouter>

  );

}


export default App;
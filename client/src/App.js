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
            FUTURE INDIVIDUAL DEEMED COLLEGE PAGES
        =================================================

        We will connect the 63 individual colleges here
        later using a reusable college detail page.

        Example:

        /colleges/deemed/kmc-manipal
        /colleges/deemed/jss-mysuru
        /colleges/deemed/gitam-gimsr

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
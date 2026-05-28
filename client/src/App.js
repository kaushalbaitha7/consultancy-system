import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

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

        {/* LOGIN */}

        <Route
          path="/"
          element={<Login />}
        />



        {/* REGISTER */}

        <Route
          path="/register"
          element={<Register />}
        />



        {/* OTP VERIFY */}

        <Route
          path="/verify-otp"
          element={<VerifyOtp />}
        />



        {/* DASHBOARD */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />



        {/* PERSONAL DETAILS */}

        <Route
          path="/personal-details"
          element={<PersonalDetails />}
        />

        {/* EDUCATIONAL DETAILS */}

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
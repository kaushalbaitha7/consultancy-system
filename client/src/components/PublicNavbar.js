import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

function PublicNavbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  const location = useLocation();


  /* =====================================================
     CLOSE MENU WHEN ROUTE CHANGES
  ===================================================== */

  useEffect(() => {

    setMenuOpen(false);

  }, [location.pathname]);


  /* =====================================================
     CLOSE MENU WHEN CLICKING OUTSIDE
  ===================================================== */

  useEffect(() => {

    const handleOutsideClick = (event) => {

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {

        setMenuOpen(false);

      }

    };


    if (menuOpen) {

      document.addEventListener(
        "mousedown",
        handleOutsideClick
      );

    }


    return () => {

      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

    };

  }, [menuOpen]);


  /* =====================================================
     CLOSE MENU AFTER CLICKING AN ANCHOR
  ===================================================== */

  const handleNavigationClick = () => {

    setMenuOpen(false);

  };


  return (

    <header className="public-navbar">

      <div className="navbar-inner">


        {/* =================================================
            BRAND
        ================================================= */}

        <Link
          to="/"
          className="brand"
          onClick={handleNavigationClick}
          aria-label="GyanGuru Consultancy Home"
        >

          <div className="brand-mark">

            <img
              src="/logo.png"
              alt="GyanGuru Consultancy"
            />

          </div>


          <div className="brand-text">

            <div className="brand-name">
              GyanGuru
            </div>

            <div className="brand-subtitle">
              CONSULTANCY
            </div>

          </div>

        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav className="desktop-navigation">

          <a
            href="/#home"
            onClick={handleNavigationClick}
          >
            Home
          </a>

          <a
            href="/#about"
            onClick={handleNavigationClick}
          >
            About Us
          </a>

          <a
            href="/#courses"
            onClick={handleNavigationClick}
          >
            Medical Courses
          </a>

          <Link
            to="/colleges"
            onClick={handleNavigationClick}
          >
            Colleges
          </Link>

          <a
            href="/#services"
            onClick={handleNavigationClick}
          >
            Services
          </a>

          <a
            href="/#reviews"
            onClick={handleNavigationClick}
          >
            Reviews
          </a>

          <a
            href="/#contact"
            onClick={handleNavigationClick}
          >
            Contact
          </a>

        </nav>


        {/* =================================================
            DESKTOP LOGIN
        ================================================= */}

        <Link
          to="/login"
          className="student-login-button desktop-login"
          onClick={handleNavigationClick}
        >

          Student Login

          <span>
            →
          </span>

        </Link>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          className={`mobile-menu-button ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >

          <span></span>
          <span></span>
          <span></span>

        </button>


        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <div
          ref={menuRef}
          className={`mobile-navigation ${
            menuOpen ? "open" : ""
          }`}
        >

          <div className="mobile-navigation-inner">


            <a
              href="/#home"
              onClick={handleNavigationClick}
            >
              <span>
                01
              </span>

              Home
            </a>


            <a
              href="/#about"
              onClick={handleNavigationClick}
            >
              <span>
                02
              </span>

              About Us
            </a>


            <a
              href="/#courses"
              onClick={handleNavigationClick}
            >
              <span>
                03
              </span>

              Medical Courses
            </a>


            <Link
              to="/colleges"
              onClick={handleNavigationClick}
            >
              <span>
                04
              </span>

              Colleges
            </Link>


            <a
              href="/#services"
              onClick={handleNavigationClick}
            >
              <span>
                05
              </span>

              Services
            </a>


            <a
              href="/#reviews"
              onClick={handleNavigationClick}
            >
              <span>
                06
              </span>

              Reviews
            </a>


            <a
              href="/#contact"
              onClick={handleNavigationClick}
            >
              <span>
                07
              </span>

              Contact
            </a>


            <Link
              to="/login"
              className="mobile-login-button"
              onClick={handleNavigationClick}
            >
              Student Login
              <span>→</span>
            </Link>

          </div>

        </div>

      </div>

    </header>

  );

}

export default PublicNavbar;
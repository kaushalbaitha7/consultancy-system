import React, { useEffect, useState } from "react";
import "../styles/backtotop.css";

function BackToTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setVisible(window.scrollY > 350);

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);


  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };


  if (!visible) {
    return null;
  }


  return (

    <button
      type="button"
      className="back-to-top show"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      ↑
    </button>

  );

}

export default BackToTop;
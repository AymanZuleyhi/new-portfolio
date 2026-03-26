import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BackToTop.css";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // window.innerHeight is exactly 100vh
      const heroHeight = window.innerHeight;
      
      // We show the button once the user scrolls past the Hero
      if (window.scrollY > heroHeight * 0.8) { // 0.8 makes it appear slightly before Hero ends
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // This creates the gliding animation
    });
  };

  return (
    <div className={`back-to-top ${showButton ? "show" : "hide"}`} onClick={scrollToTop}>
      <FontAwesomeIcon icon={faCircleUp}/>
    </div>
  )
}
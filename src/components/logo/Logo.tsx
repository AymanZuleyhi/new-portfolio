import "./Logo.css";
import { useState, useEffect } from "react";

export default function Logo() {
  const [lightUp, setLightUp] = useState(false);

 useEffect(() => {
  const interval = setInterval(() => {
    setLightUp(true);

    // Turn it off after 4 seconds
    const timeout = setTimeout(() => {
      setLightUp(false);
    }, 4000);

    // Optional: Clean up this specific timeout if the interval fires again
    return () => clearTimeout(timeout);
  }, 5000);

  // CLEANUP: This stops the clock when the component is gone
  return () => clearInterval(interval);
}, []);


  return(
    <div className="logo">
      <span>Ayman</span>
      <div className={`light ${lightUp ? "active" : "not-active"}`}></div>
    </div>
  )
}
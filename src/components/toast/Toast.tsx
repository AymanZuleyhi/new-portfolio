import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Toast.css";
import { useEffect } from "react";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function Toast(props) {
  const { message, handleShowToast } = props;

  const duration = 5000; // 5 seconds to match the CSS animation

  useEffect(() => {
    // Start the countdown to remove the toast
    const timer = setTimeout(() => {
      handleShowToast();
    }, duration);

    // Cleanup: If the user manually closes it, clear the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="toast">
      <div className="toast-content">
        <FontAwesomeIcon id="toast-checkmark" icon={faCheckCircle}/>
        <span>{"Thanks for submitting your message! I'll be in touch soon! 😁"}</span>
      </div>

      <div className="toast-progress-bar"></div>
      <FontAwesomeIcon id="toast-x" icon={faX}/>
    </div>
  )
}
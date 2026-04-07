import "./Toast.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

type ToastType = {
  handleShowToast: () => void
};

export default function Toast(props: ToastType) {
  const { handleShowToast } = props;

  const duration = 5000;

  useEffect(() => {
    const timer = setTimeout(() => {
      handleShowToast();
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="toast">
      <div className="toast__content">
        <FontAwesomeIcon id="toast__checkmark" icon={faCheckCircle}/>
        <span>{"Thanks for submitting your message! I'll be in touch soon! 😁"}</span>
      </div>

      <div className="toast__progress-bar"></div>
      <FontAwesomeIcon id="toast__close" icon={faX}/>
    </div>
  )
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HamburgerMenu.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function HamburgerMenu(props) {
  const { isOpen, toggleMobileMenu } = props;

  return (
    <div onClick={toggleMobileMenu} className={`hamburger-menu ${isOpen ? "show" : "hide"}`}>
      <FontAwesomeIcon icon={faBars}/>
    </div>
  )
}
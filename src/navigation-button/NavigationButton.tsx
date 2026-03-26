import "./NavigationButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

type NavigationButtonType = {
  text: string
}

export default function NavigationButton(props: NavigationButtonType) {
  const { url } = props;

  const [isActive, setIsActive] = useState(false);
  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  const isLive = url[0] === "live";

  const handleClick = (url) => {
    if(isLive) {
      // Open the url in a new tab.
      window.open(url, "_blank", "noreferrer")
    } else {
      // Toggle the dropdown
      const { frontEnd, backEnd } = url;

      // If there's only one back-end link, navigate to it.
      if(frontEnd === "" || backEnd === "") {
        const urlToOpen = frontEnd === "" ? backEnd : frontEnd;

        window.open(urlToOpen, "_blank", "noreferrer");
        return;
      };

      // If there's more than one, toggle the dropdown.
      handleIsActive();
    }
  };

  return (
    <button onClick={() => handleClick(url[1])} className="navigation-button">
      <FontAwesomeIcon icon={isLive ? faArrowUpRightFromSquare : faGithub}/>
      <span>{isLive ? "Live" : "Code"}</span>

      {isActive && 
        <ul className="navigation-button-options">
          <li>
            <a href={url[1].frontEnd} target={"_blank"}>Front-end</a>
          </li>
          <li>
            <a href={url[1].backEnd} target={"_blank"}>Back-end</a>
          </li>
        </ul>
      }
    </button>
  )
}
import "./Interest.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Interest(props) {
  const { icon, type } = props;

  return (
    <div className="interest">
      <FontAwesomeIcon icon={icon}/>
      <span>{type}</span>
    </div>
  )
}
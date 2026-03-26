import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactInfoBox.css";

type ContactInfoBoxType = {
  
};

export default function ContactInfoBox(props:ContactInfoBoxType) {
  const { headline, text, icon } = props;

  return (
    <div className="content-info-box">
      <div> 
        <FontAwesomeIcon icon={icon}/>
      </div>
      
      <div>
        {/* <span>{headline}</span> */}
        <span>{text}</span>
      </div>
    </div>
  )
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Image-Container.css";
import { faClose, faMaximize, faWindowMinimize } from "@fortawesome/free-solid-svg-icons";

const trafficLightIcons = [
  faClose, faWindowMinimize, faMaximize
];

export default function ImageContainer(props) {
  const { src, name } = props;

  return (
    <div className="image-container__wrapper">
      <div className="image-container">
        <div className="traffic-lights">
          {trafficLightIcons.map((icon, i) => {
            return (
              <div key={i}>
                <FontAwesomeIcon icon={icon}/>
              </div>
            )
          })}
        </div>
        
        <div className="image-container__img-container">
          <img src={src}/>
        </div>
      </div>

      <span className="image-container__file-name">{name}</span>
    </div>
  )
}
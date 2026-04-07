import "./TrafficLights.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faMaximize, faWindowMinimize } from "@fortawesome/free-solid-svg-icons";

type TrafficLightsType = {
  size?: string,
  toggleImagePreview?: (src?: string) => void
}

const trafficLightIcons = [
  faClose, faWindowMinimize, faMaximize
];

export default function TrafficLights(props: TrafficLightsType) {
  const { size, toggleImagePreview } = props;
  
  return (
    <div className={`traffic-lights ${size}`}>
      {trafficLightIcons.map((icon, i) => {
        return (
          <div key={i} onClick={icon === faClose ? () => toggleImagePreview?.() : undefined}>
            <FontAwesomeIcon icon={icon}/>
          </div>
        )
      })}
    </div>
  )
}
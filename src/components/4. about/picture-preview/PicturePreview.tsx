import "./PicturePreview.css";
import TrafficLights from "../traffic-lights/TrafficLights";

// Context
import { useImagePreview } from "../../../context/ImagePreviewContext";

export default function PicturePreview() {
  const { showImagePreview, toggleImagePreview } = useImagePreview();

  return (
    <div className="picture-preview" onClick={() => toggleImagePreview()}>
      
      <div className="picture-framee" onClick={(e) => e.stopPropagation()}>
        <TrafficLights size={"L"} toggleImagePreview={toggleImagePreview}/>
       
        <div className="picture-frame__img-container">
          <img src={showImagePreview.src}/>
        </div>
      </div>

    </div>
  )
}
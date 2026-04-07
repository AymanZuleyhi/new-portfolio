import "./Image-Container.css";
import TrafficLights from "../traffic-lights/TrafficLights";

// Context
import { useImagePreview } from "../../../context/ImagePreviewContext";

type ImageContainerType = {
  src: string,
  name: string
}

export default function ImageContainer(props: ImageContainerType) {
  const { src, name } = props;

  const { toggleImagePreview } = useImagePreview();
  
  return (
    <div onClick={() => toggleImagePreview(src)} className="image-container__wrapper">
      <div className="image-container">
        <TrafficLights />

        <div className="image-container__img-container">
          <img src={src}/>
        </div>
      </div>

      <span className="image-container__file-name">{name}</span>
    </div>
  )
}
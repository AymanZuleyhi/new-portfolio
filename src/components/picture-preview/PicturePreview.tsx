import WindowControls from "../window-controls/WindowControls";
import "./PicturePreview.css";

export default function PicturePreview(props) {
  const { src } = props;

  return (
    <div className="picture-preview">
      <div className="picturee">
        <WindowControls />
        <img src={src}/>
      </div>
    </div>
  )
}
import "./PictureFrame.css";

export default function PictureFrame(props) {
  const { src } = props;

  return (
    <div className="picture-frame">
      <img src={src}/>
    </div>
  )
}
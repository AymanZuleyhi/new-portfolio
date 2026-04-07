import "./Video.css";

export default function Video(props) {
  const { video } = props;

  return (
    <video 
      className="project__video"
      src={video} 
      autoPlay 
      loop 
      muted 
      playsInline
    />
  )
}
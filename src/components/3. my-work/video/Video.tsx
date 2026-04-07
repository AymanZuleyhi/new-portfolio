import "./Video.css";
import { useRef, useEffect } from "react";

type VideoType = {
  video: string
};

export default function Video(props: VideoType) {
  const { video } = props;

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; 
    }
  }, []);

  return (
    <video 
      ref={videoRef}
      className="project__video"
      src={video} 
      autoPlay 
      loop 
      muted 
      playsInline
    />
  )
}
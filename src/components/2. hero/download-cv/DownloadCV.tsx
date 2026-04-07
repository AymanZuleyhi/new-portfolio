import { useState } from "react";
import "./DownloadCV.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Loader from "../../7. general/loader/Loader";

export default function DownloadCV() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadCV = (e) => {
    // 1. Prevent the browser from downloading immediately
    e.preventDefault();
    
    if (isLoading) return; // Prevent multiple clicks

    setIsLoading(true);

    // 2. Wait 1 second, then trigger download
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/Ayman_Zulyehi_Web_Developer_CV.pdf";
      link.download = "Ayman_Zulyehi_Web_Developer_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);

    // 3. Wait another 1 second (2s total) to stop the loader
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <a 
      className={`hero__download-cv ${isLoading ? "loading" : "not-loading"}`} 
      href="/Ayman_Zulyehi_Web_Developer_CV.pdf" 
      onClick={handleDownloadCV}
      style={{ pointerEvents: isLoading ? 'none' : 'auto' }}
    >
      {isLoading ? "Preparing..." : "Download CV"}

      {!isLoading && <FontAwesomeIcon icon={faDownload}/>}
      {isLoading && <Loader />}
    </a>
  );
}
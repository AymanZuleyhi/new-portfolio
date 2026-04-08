import "./App.css";
import { useEffect, useState } from "react"

// Sections
import NavBar from "./sections/1. nav-bar/NavBar";
import Hero from "./sections/2. hero/Hero";
import MyWork from "./sections/3. my-work/MyWork";
import About from "./sections/4. about/About";
import FAQ from "./sections/5. faq/FAQ";
import Contact from "./sections/6. contact/Contact";
import Footer from "./sections/7. footer/Footer";

import Devider from "./components/7. general/devider/Devider";
import PicturePreview from "./components/4. about/picture-preview/PicturePreview";
import Toast from "./components/6. contact/toast/Toast";
import BackToTop from "./components/7. general/back-to-top/BackToTop";

// Context
import { useImagePreview } from "./context/ImagePreviewContext";

export default function App() {
  const { showImagePreview } = useImagePreview();

  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(!showToast);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          // Stop observing once the animation has played
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const classes = [".reveal", ".editor-viewport", ".about__images", ".faq__headline", ".faq"];

    // 1. Join the array into a single selector string: ".reveal, .editor-viewport"
    const selector = classes.join(", ");

    // 2. Select all elements matching ANY of those classes and observe them
    document.querySelectorAll(selector).forEach(element => {
      observer.observe(element);
    });
  }, [])

  return (
    <div className="app">
      {showToast && <Toast handleShowToast={handleShowToast}/>}

      {showImagePreview.isVisible && <PicturePreview />}

      <NavBar />
      <Hero />
      <Devider 
        marginTop={"-80px"} 
        marginBottom={"-40px"}
      />
      <MyWork />
      <About />
      <FAQ />
      <Devider 
        marginTop={"-40px"} 
        marginBottom={"-80px"}
      />
      <Contact handleShowToast={handleShowToast}/>
      <Footer />
      
      <BackToTop />
    </div>
  )
}
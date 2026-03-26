import "./App.css";
import { useState } from "react"
import NavBar from "./nav-bar/NavBar.tsx"
import Hero from "./sections/hero/Hero.tsx"
import MyWork from "./sections/my-work/MyWork"
import Contact from "./sections/contact/Contact.tsx"
import Footer from "./footer/Footer"
import BackToTop from "./back-to-top/BackToTop"
import FAQ from "./sections/faq/FAQ.tsx"
import About from "./sections/about/About.tsx"
import Devider from "./sections/devider/Devider.tsx"
import Toast from "./components/toast/Toast.tsx"
import PicturePreview from "./components/picture-preview/PicturePreview.tsx"

function App() {
  const [images, setImages] = useState([
    { src: "https://res.cloudinary.com/dhzq0yjf2/image/upload/v1762327318/1_nbhwnd.jpg", name: "name.png", active: false },
    { src: "https://res.cloudinary.com/dhzq0yjf2/image/upload/v1762327319/2_vcjb9q.png", name: "name", active: false },
    { src: "https://res.cloudinary.com/dhzq0yjf2/image/upload/v1762327318/4_dtnwvx.jpg", name: "name", active: false },
    { src: "https://res.cloudinary.com/dhzq0yjf2/image/upload/v1762329480/3-min_klmxsk.jpg", name: "broadgatespeakers.png", active: false },
    { src: "https://res.cloudinary.com/dhzq0yjf2/image/upload/v1762327318/4_dtnwvx.jpg", name: "award.png", active: false },
    { src: "https://res.cloudinary.com/dhzq0yjf2/image/upload/v1770932097/bd1c6aa3-41c8-4a1c-a9d1-3748cdbd755a_cxpwwt.jpg", name: "work.png", active: false }
  ]);
  const [showToast, setShowToast] = useState(false);
  const [showImagePreview, setShowImagePreview] = useState(false);

  const handleShowToast = () => {
    setShowToast(!showToast);
  };

  const handleShowImagePreview = () => {
    setShowImagePreview(!showImagePreview);
  };

  const selectImage = (src) => {
    handleShowImagePreview();

    setImages((prevImages) => {
      return prevImages.map((img) => {
        return img.src === src
        ? { ...img, active: true }
        : { ... img, active: false }
      });
    });
  };

  return (
    <div className="app">
      {showToast && <Toast handleShowToast={handleShowToast}/>}

      {showImagePreview && <PicturePreview images={images}/>}

      <NavBar />
      <Hero />
      <Devider 
        marginTop={"-80px"} 
        marginBottom={"-40px"}
      />
      <MyWork />
      <About images={images} selectImage={selectImage}/>
      <FAQ/>
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

export default App

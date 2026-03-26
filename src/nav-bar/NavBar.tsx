import "./NavBar.css";
import { useState, useEffect } from "react";
import Button from "../components/button/Button.tsx";
import HamburgerMenu from "../components/hamburger-menu/HamburgerMenu.tsx";
import Logo from "../components/logo/Logo.tsx";
import NavMenu from "../components/nav-menu/NavMenu.tsx";
import MobileMenu from "../mobile-menu/MobileMenu.tsx";

export default function NavBar() {
  const [navBarClass, setNavBarClass] = useState("default");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState([
    { name: "Home", navigate: "hero-section", isActive: true },
    { name: "Work", navigate: "my-work-section", isActive: false },
    { name: "About", navigate: "about-section", isActive: false },
    { name: "FAQ", navigate: "faq-section", isActive: false },
    { name: "Contact", navigate: "contact-section", isActive: false },
  ]);

  const handleClick = (name: string, navigate) => {
    setMenu((prevMenu) => {
      return prevMenu.map((item) => {
        return item.name === name
        ? { ...item, isActive: true }
        : { ...item, isActive: false }
      })
    })

    const section = document.getElementById(navigate);

    if(!section) return;

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle changes in the width.
  useEffect(() => {
    const handleWidthChange = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidthChange);

    return () => {
      window.removeEventListener("resize", handleWidthChange);
    }
  }, [])
  
  // Handle changes in the height.
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroElement = document.getElementById("hero-section");
      const faqSection = document.getElementById("contact-section");

      const heroHeight = heroElement ? heroElement.offsetHeight : 0;
      // Get the pixel distance from the top of the page to the Contact section
      const contactTop = faqSection ? faqSection.offsetTop : 0;

      if (scrollY === 0) {
        // 70
        setNavBarClass("default");
      } else if (scrollY < heroHeight - 130) {
        // We are still within the Her
        setNavBarClass("stillHero");
      } else if (contactTop > 0 && scrollY >= contactTop - 200) {
        setNavBarClass("stillHero"); 
      } else {
        // We are in the "middle" area between Hero and Contact
        setNavBarClass("not-header"); 
      }
    };

    // Run once to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className={`nav-bar-container ${navBarClass}`}>
      <div className="nav-bar">
        <Logo />

        {windowWidth > 730 &&
          <>
            <NavMenu navBarClass={navBarClass} menu={menu} handleClick={handleClick}/>
            <Button 
              text={"Contact"} 
              onClick={() => handleClick("Contact", "contact-section")} 
            />
          </>
        }

        {windowWidth < 730 &&
          <>
            <HamburgerMenu isOpen={isOpen} toggleMobileMenu={toggleMobileMenu}/>
            <MobileMenu menu={menu} handleClick={handleClick} isOpen={isOpen} toggleMobileMenu={toggleMobileMenu}/>
          </>
        }
      </div>
    </div>
  )
}
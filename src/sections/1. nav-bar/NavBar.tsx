import "./NavBar.css";
import { useState, useEffect } from "react";
import { useViewport } from "../../context/ViewportContext.tsx";
import Button from "../../components/7. general/button/Button.tsx";
import HamburgerMenu from "../../components/1. nav-bar/hamburger-menu/HamburgerMenu.tsx";
import Logo from "../../components/1. nav-bar/logo/Logo.tsx";
import NavMenu from "../../components/1. nav-bar/nav-menu/NavMenu.tsx";
import MobileMenu from "../../components/1. nav-bar/mobile-menu/MobileMenu.tsx";

export default function NavBar() {
  const { width } = useViewport();
  
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState([
    { name: "Home", navigate: "hero-section", isActive: true },
    { name: "Work", navigate: "my-work-section", isActive: false },
    { name: "About", navigate: "about-section", isActive: false },
    { name: "FAQ", navigate: "faq-section", isActive: false },
    { name: "Contact", navigate: "contact-section", isActive: false },
  ]);

  const [navBarClass, setNavBarClass] = useState<string>("");

  useEffect(() => {
    const sections = ["hero-section", "my-work-section", "about-section", "faq-section", "contact-section"];

    // --- 1. NAVBAR STYLE (Simple Scroll Listener) ---
    const handleHeaderStyle = () => {
      const scrollY = window.scrollY;
      const heroHeight = document.getElementById("hero-section")?.offsetHeight || 0;
      const contactTop = document.getElementById("contact-section")?.offsetTop || 0;

      let newClass = "not-header"; // Default fallback
      if (scrollY < 50) newClass = "";
      else if (scrollY < heroHeight - 100) newClass = "stillHero";
      else if (contactTop > 0 && scrollY >= contactTop - 100) newClass = "stillHero";

      // 🔥 ONLY update if the class actually changed
      setNavBarClass((prev) => (prev !== newClass ? newClass : prev));
    };

    // --- 2. ACTIVE SECTION (Intersection Observer) ---
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setMenu((prevMenu) => {
            return prevMenu.map((item) => {
              return item.navigate === entry.target.id
              ? { ...item, isActive: true }
              : { ...item, isActive: false }
            })
          })
        }
      });
    }, {
      rootMargin: "-100px 0px -70% 0px", 
      threshold: 0
    });

    // Start observing
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleHeaderStyle);
    
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleHeaderStyle);
    };
  }, []);

  const handleClick = (name: string, navigate: string) => {
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
  
  return (
    <div className={`nav-bar-container ${navBarClass}`}>
      <div className="nav-bar">
        <Logo />

        {width > 730 &&
          <>
            <NavMenu menu={menu} handleClick={handleClick}/>
            <Button 
              text={"Contact"} 
              onClick={() => handleClick("Contact", "contact-section")} 
            />
          </>
        }

        {width < 730 &&
          <>
            <HamburgerMenu isOpen={isOpen} toggleMobileMenu={toggleMobileMenu}/>
            <MobileMenu 
              menu={menu} 
              handleClick={handleClick} 
              isOpen={isOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
          </>
        }
      </div>
    </div>
  )
}
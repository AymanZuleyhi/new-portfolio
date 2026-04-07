// import React, { createContext, useContext, useState, useEffect } from 'react';

// type NavState = 'default' | 'stillHero' | 'not-header';

// const ScrollContext = createContext({ navBarClass: 'default' });

// export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
//   const [navBarClass, setNavBarClass] = useState<NavState>('default');

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const heroElement = document.getElementById("hero-section");
//       const contactSection = document.getElementById("contact-section");

//       const heroHeight = heroElement?.offsetHeight || 0;
//       const contactTop = contactSection?.offsetTop || 0;

//       if (scrollY === 0) {
//         setNavBarClass("default");
//       } else if (scrollY < heroHeight - 130) {
//         setNavBarClass("stillHero");
//       } else if (contactTop > 0 && scrollY >= contactTop - 200) {
//         setNavBarClass("stillHero"); 
//       } else {
//         setNavBarClass("not-header"); 
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Initial check
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <ScrollContext.Provider value={{ navBarClass }}>
//       {children}
//     </ScrollContext.Provider>
//   );
// };

// export const useScrollLogic = () => useContext(ScrollContext);
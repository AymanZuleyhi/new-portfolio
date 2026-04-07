import { useEffect } from "react";
import "./MobileMenu.css";

type MenuType = {
  name: string,
  navigate: string,
  isActive: boolean
}

type MobileMenuType = {
  menu: MenuType[],
  isOpen: boolean,
  handleClick: (name: string, navigate: string) => void
  toggleMobileMenu: () => void
}

export default function MobileMenu(props: MobileMenuType) {
  const { menu, isOpen, handleClick, toggleMobileMenu } = props;

  useEffect(() => {
    if (isOpen) {
      // Wait a tiny bit for the menu slide-in to start before snapping the scrollbar
      const timer = setTimeout(() => {
        document.body.style.overflow = "hidden";
      }, 300); 
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav className={`mobile-menu ${isOpen ? "show" : "hide"}`}>      
      <ul>
        {
          menu?.map((item: MenuType, i: number) => {
            const { name, navigate, isActive } = item;

            return (
              <li 
                key={i} 
                className={`${isActive ? "active" : "not-active"}`} 
                onClick={() => {{
                  toggleMobileMenu();
                  handleClick(name, navigate)
                }}}
              >
                {name}
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
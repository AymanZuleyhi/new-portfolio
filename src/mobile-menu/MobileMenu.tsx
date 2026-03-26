import "./MobileMenu.css";

export default function MobileMenu(props) {
  const { menu, isOpen, handleClick } = props;

  return (
    <nav className={`mobile-menu ${isOpen ? "show" : "hide"}`}>      
      <ul>
        {
          menu.map((item, i) => {
            const { name, isActive } = item;

            return (
              <li 
                key={i} 
                className={`${isActive ? "active" : "not-active"}`} 
                onClick={() => handleClick(name)}
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
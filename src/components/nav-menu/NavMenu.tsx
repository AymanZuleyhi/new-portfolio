import "./NavMenu.css";

export default function NavMenu(props) {
  const { navBarClass, menu, handleClick } = props;

  return (
    <nav className={`desktop-menu ${navBarClass}`}>
      <ul>
        {
          menu.map((item, i: number) => {
            const { name, navigate, isActive } = item;

            if(name === "Contact") return;

            return (
              <li 
                key={i} 
                className={`${isActive ? "active" : "not-active"}`} 
                onClick={() => handleClick(name, navigate)}
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
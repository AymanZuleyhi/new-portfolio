import "./TechStack.css";

export default function TechStack(props) {
  const { technologies } = props;

  return (
    <ul className="tech-stack">
      {technologies.map((technology) => {
        return (
          <li className="tech-pill">
            {/* <img src={technology.icon}/> */}
            <span>{technology.name}</span>
          </li>
        )
      })}
    </ul>
  )
}
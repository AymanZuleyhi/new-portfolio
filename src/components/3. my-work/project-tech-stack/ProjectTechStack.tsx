import "./ProjectTechStack.css";
import { listOfTechnologies } from "../../../technologies.ts";

export default function ProjectTechStack(props) {
  const { technologies, styles } = props;
  const { backgroundColor, color, hex } = styles;

  const getCurrentTechnology = (technology) => {
    const selectedTechnology = listOfTechnologies.find((t) => t.name === technology);
    if (!selectedTechnology) return "";
    const urlParts = selectedTechnology.src.split("/");
    urlParts[urlParts.length - 1] = hex;
    return urlParts.join("/");
  };

  return (
    <div className="project-technology">
      {technologies.map((technology: string) => {
        return (
          <div style={{ backgroundColor: backgroundColor }}>
            <img src={getCurrentTechnology(technology)}/>
            <span style={{ color: color }}>{technology}</span>
          </div>
        )
      })}
    </div>
  )
};
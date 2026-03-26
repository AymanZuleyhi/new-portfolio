import "./ProjectTechStack.css";
import { listOfTechnologies } from "../../technologies.js";

export default function ProjectTechStack(props) {
  const { technologies, styles } = props;
  const { backgroundColor, color, hex } = styles;

  const getCurrentTechnology = (technology) => {
    const selectedTechnology = listOfTechnologies.find((t) => t.name === technology);

    if (!selectedTechnology) return "";

    // 1. Split the URL into an array of strings
    const urlParts = selectedTechnology.src.split("/");

    // 2. Replace the last element (the color hex) with "ffffff"
    urlParts[urlParts.length - 1] = hex;

    // 3. Join the array back into a single string
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
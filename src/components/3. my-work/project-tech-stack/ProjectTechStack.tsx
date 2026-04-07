import "./ProjectTechStack.css";
import { listOfTechnologies } from "../../../technologies.ts";

type StylesType = {
  backgroundColor: string,
  color: string,
  hex: string
}

type ProjectTechStackType = {
  technologies: string[],
  styles: StylesType
}

export default function ProjectTechStack(props: ProjectTechStackType) {
  const { technologies, styles } = props;
  const { backgroundColor, color, hex } = styles;

  const getCurrentTechnology = (technology: string) => {
    const selectedTechnology = listOfTechnologies.find((t) => t.name === technology);
    if (!selectedTechnology) return "";
    const urlParts = selectedTechnology.src.split("/");
    urlParts[urlParts.length - 1] = hex;
    return urlParts.join("/");
  };

  return (
    <div className="project-technology">
      {technologies.map((technology: string, i:number) => {
        return (
          <div key={i} style={{ backgroundColor: backgroundColor }}>
            <img src={getCurrentTechnology(technology)}/>
            <span style={{ color: color }}>{technology}</span>
          </div>
        )
      })}
    </div>
  )
};
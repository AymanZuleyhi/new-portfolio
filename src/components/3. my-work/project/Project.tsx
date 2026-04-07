import "./Project.css";
import Video from "../video/Video";
import ProjectTechStack from "../project-tech-stack/ProjectTechStack";
import NavigationButton from "../navigation-button/NavigationButton";
import { useViewport } from "../../../context/ViewportContext";

type ProjectType = {
  video: string,
  logo: string,
  h1: string,
  description: string,
  technologies: string [],
  styles: {
    backgroundColor: string,
    color: string,
    hex: string
  },
  urls: {
    code: {
      backEnd: {},
      frontEnd: string
    },
    live: string
  }
}

type Project = {
  project: ProjectType,
  index: number
}

export default function Project({ project, index }: Project) {
  const { video, logo, h1, description, technologies, styles, urls } = project;

  const { width } = useViewport();
  
  return (
    <div className={`project ${index % 2 === 0 ? "left" : "right"}`}>
      {(index % 2 === 0 || width <= 1000) && <Video video={video} />}

      <div className="project__information">
        <div className="project__headline">
          <img src={logo}/>
          <h3>{h1}</h3>
        </div>

        <p>{description}</p>

        <h3>Technologies</h3>

        <ProjectTechStack technologies={technologies} styles={styles}/>
      
        <h3>Navigation</h3>
      
        <div className="navigation">
          {Object.entries(urls).map((url, i) => {
            return (
              <NavigationButton 
                key={i} 
                url={url} 
              />
            )
          })}
        </div>
      </div>

      {(index % 2 !== 0 && width >= 1000) && <Video video={video} />}
    </div>
  )
}
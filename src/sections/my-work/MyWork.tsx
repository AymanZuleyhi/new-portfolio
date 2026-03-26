import "./MyWork.css";
import { listOfProjects } from "../../technologies.js";
import ComponentHeadline from "../../components/component-headline/ComponentHeadline.js";
import Project from "../../components/project/Project.js";

type ProjectType = {
  video: string,
  logo: string,
  h1: string,
  description: string,
  technologies: string [],
  urls: {
    code: {
      frontEnd: string,
      backEnd: string
    },
    live: string
  }
}

export default function MyWork() {
  return (
    <section id="my-work-section" className="my-work-section">
      
      <div className="my-work">
        <ComponentHeadline 
          h2={"My Work"} 
          p={"Bellow you will find a selection of my work, from personal projects, to Shopify stores, and Chrome Extensions."}
        />

        <div className="projects">
          {listOfProjects.map((project: ProjectType, index: number) => {
            return (
              <Project
                key={index} 
                project={project}
                index={index}
              />
            )
          })}
        </div>

      </div>
    </section>
  )
}
import "./MyWork.css";
import { listOfProjects } from "../../technologies.ts";
import Project from "../../components/3. my-work/project/Project.tsx";

type ProjectCode = {
  frontEnd: string;
  backEnd?: string | string[];
};

type ProjectType = {
  video: string,
  logo: string,
  h1: string,
  description: string,
  technologies: string [],
  urls: {
    code?: ProjectCode,
    live: string
  }
}

export default function MyWork() {
  return (
    <section id="my-work-section" className="my-work-section">
      
      <div className="my-work">
        <h2>My work 👨‍💻</h2>

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
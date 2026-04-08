import "./MyWork.css";
import { useEffect } from "react";
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
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          // Once it's shown, we don't need to watch it anymore
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // 🎯 We find all cards INSIDE this component and watch them
    const cards = document.querySelectorAll('.project');
    cards.forEach((card) => observer.observe(card));

    // Cleanup: Stop watching when the component unmounts
    return () => observer.disconnect();
  }, []);

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
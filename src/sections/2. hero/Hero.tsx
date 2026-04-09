import "./Hero.css";
import { listOfTechnologies } from "../../technologies.ts";
import Glow from "../../components/7. general/glow/Glow.tsx";
import Net from "../../components/7. general/net/Net.tsx";
import Button from "../../components/7. general/button/Button.tsx";
import CurrentlyEmployed from "../../components/2. hero/currently-employed/CurrentlyEmployed.tsx";
import Technology from "../../components/2. hero/technology/Technology.tsx";
import DownloadCV from "../../components/2. hero/download-cv/DownloadCV.tsx";

type TechnologyType = {
  name: string,
  src: string
}

type TechnologiesType = {
  list: string [];
};

const list = ["HTML", "CSS", "JavaScript", "React", "NodeJs", "Express", "PosgreSQL", "MongoDB"];
const formattedListOfTechnologies = listOfTechnologies.filter((technology: TechnologiesType) => list.includes(technology.name));

export default function Hero() {
  return (
    <section id="hero-section" className="hero-section">
      <Glow />
      <Net />
      
      <div className="hero">
        <div className="hero__info">
          <CurrentlyEmployed />

          <div className="hero__headline">
            <h1>Hi, I'm Ayman! <span className="wave-icon">👋</span> <br/> Full-Stack Web Developer</h1>
            <p>I build everything from Chrome Extentions to Shopify apps, to full-stack applications.</p>
          </div>
          
          <div className="hero__technologies">
            {formattedListOfTechnologies.map((technology: TechnologyType, i: number) => {
              return (
                <Technology key={i} technology={technology} />
              )})
            }
          </div>

          <div>
            <Button text="Contact" height={40}/>
            <DownloadCV />
          </div>
        </div>

        <div className="hero__image-container">
          <img className="hero__image" src="https://res.cloudinary.com/dhzq0yjf2/image/upload/v1762352350/Hero-min_nyockb.png"/>
        </div>
      </div>

    </section>
  )
}
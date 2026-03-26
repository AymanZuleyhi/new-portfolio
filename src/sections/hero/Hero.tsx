import "./Hero.css";
import Button from "../../components/button/Button";
import CurrentlyEmployed from "../../components/currently-employed/CurrentlyEmployed";
import Glow from "../../components/glow/Glow";
import Net from "../../components/net/Net";
import { listOfTechnologies } from "../../technologies.js";
import Technology from "../../technology/Technology";
import DownloadCV from "../../components/download-cv/DownloadCV.js";

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
            <h1>Hi, I'm Ayman!👋 <br/> Full-Stack Web Developer</h1>
            <p>I build everything from Chrome Extentions to Shopify apps, to full-stack applications. Currently working as a customer support agent.</p>
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
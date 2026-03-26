import './About.css';
import { faBook, faBurger, faChevronRight, faCode, faCodeBranch, faFileCode, faFolder, faFolderOpen, faMusic, faTerminal, faTv, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageContainer from '../../components/image-container/ImageContainer';
import Editor from '../../components/editor/Editor';
import Net from '../../components/net/Net';
import img from "../../../src/assets/unnamed.jpg";

export default function About() {
  return (
    <section id="about-section" className="about-container">
      {/* <Net opacity={0.5}/> */}
      <div className="about">
        <h2>Who's this guy? 🤔</h2>

        <div className="about__content">
          <Editor />

          <img src={"https://res.cloudinary.com/dhzq0yjf2/image/upload/v1762329480/3-min_klmxsk.jpg"}/>
        </div>
      </div>

    </section>
  );
};
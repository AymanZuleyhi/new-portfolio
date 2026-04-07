import './About.css';
import Editor from '../../components/4. about/editor/Editor';
import ImageContainer from '../../components/4. about/image-container/ImageContainer';
import { useViewport } from '../../context/ViewportContext';

export default function About() {
  const { width } = useViewport();

  return (
    <section id="about-section" className="about-container">

      <div className="about">
        <h2>Who's this guy? 🤔</h2>

        <div className="about__content">
          <Editor />

          <div className="about__images">
            <ImageContainer src={"https://res.cloudinary.com/dhzq0yjf2/image/upload/v1762329480/3-min_klmxsk.jpg"} name={"award.png"}/>
            <ImageContainer src={"https://res.cloudinary.com/dhzq0yjf2/image/upload/v1762327318/5_cqqlfc.jpg"} name={"work.png"}/>
            
            {((width > 600 && width < 1000) || width > 1200) &&
              <ImageContainer src={"https://res.cloudinary.com/dhzq0yjf2/image/upload/v1770932097/bd1c6aa3-41c8-4a1c-a9d1-3748cdbd755a_cxpwwt.jpg"} name={"award.jpg"}/>
            }
          </div>
        </div>
      </div>

    </section>
  );
};
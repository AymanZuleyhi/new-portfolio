import "./Editor.css";
import HobbiesTypewriter from "../hobbies-typewriter/HobbiesTypewriter";

const info = [
  <>I’ve always been driven by a <strong>"visual-first"</strong> mindset. Whether it be cooking up a new meal and plating it in a fancy way, or creating a new website, and making sure the UI looks next-level <strong>polished</strong>, and the code is <strong>organised</strong> in an easy-to-read way. Whatever it may be, my goal is the same: keep it looking pretty and make sure the process is organized.</>,
  <>&nbsp;</>,
  <><strong>Fun fact:</strong> My biggest fear has and always will be public speaking, but I actually ran Broadgate Speakers (Public Speaking club in East London) as <strong>president</strong> for one year. Talk about stepping out of my <strong>comfort zone!</strong></>,
  <>&nbsp;</>,
  <><HobbiesTypewriter /></>
]

export default function Editor() {
  return (
    <div className="editor-viewport">
      {info?.map((item, i) => {
        return (
          <div key={i} className="line-row">
            <div className="line-number">
              <span>{i + 1}</span>
            </div>
            <p className="line-text">{item}</p>
          </div>
        )})}
    </div>
  )
}
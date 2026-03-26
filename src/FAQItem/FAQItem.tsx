import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import "./FAQItem.css";

type FAQItemType = {
  question: string,
  answer: string,
  isActive: boolean
};

export default function FAQItem(props) {
  const { eachQuestion, handleQuestionClick } = props;
  const { question, answer, active } = eachQuestion;

  return (
    <div className={`item ${active ? "show" : "hide"}`}>
      <div className={"title"} onClick={() => handleQuestionClick(eachQuestion)}>
        <span>{question}</span>
        <FontAwesomeIcon icon={faChevronDown}/>
      </div>

      <div className={`content ${active ? "show" : ""}`}>
        <div>
          <span>{answer}</span>
        </div>
        
      </div>
    </div>
  )
};
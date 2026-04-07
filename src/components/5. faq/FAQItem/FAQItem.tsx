import "./FAQItem.css";
import type { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

type FAQItemType = {
  question: string,
  answer: ReactNode,
  active: boolean,
  handleQuestionClick: (question: string) => void
}

export default function FAQItem(props: FAQItemType) {
  const { question, answer, active, handleQuestionClick } = props;

  return (
    <div className={`item ${active ? "show" : "hide"}`}>
      <div className={"title"} onClick={() => handleQuestionClick(question)}>
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
import "./FAQ.css"
import { useState } from "react";
import FAQItem from "../../components/5. faq/FAQItem/FAQItem";

export default function FAQ() {
  const [questions, setQuestions] = useState([
    {
      question: "What's your story?",
      answer: (
        <>
          Hi, my name is <strong>Ayman</strong> 👋.
          <br /><br />
          I’m 29, from Bulgaria. Since I was a kid, I’ve loved <strong>video games</strong> and cartoons—combining the two is actually how I <strong>learned English</strong>.
          <br /><br />
          At 28, I discovered <strong>Dropshipping</strong>. I built and ran multiple stores, managing everything from <strong>inventory</strong> to <strong>ad creatives</strong>. Today, I still run a store with my sister: <strong>Adeline Sportswear</strong>.
          <br /><br />
          The part of E-com I loved most was <strong>building the websites</strong>. I eventually felt "boxed in" by builders like Shopify, so I decided to learn to <strong>code from scratch</strong>. I’ve been at it for 2 years now and I’m loving the freedom!
        </>
      ),
      active: false
    },
    {
      question: "What's a good company culture for you?",
      answer: (
        <>
          I want to be part of a team where we can <strong>joke around</strong> and share a meal, yet remain <strong>intensely focused</strong> on shipping great code. 
          <br /><br />
          Toxicity is a productivity killer; a <strong>supportive team</strong> is a <strong>force multiplier</strong>.
        </>
      ),
      active: false
    },
    {
      question: "Are there any technologies you absolutely hate using?",
      answer: (
        <>
          I’ve used everything from <strong>WordPress</strong> to low-level languages like <strong>C</strong>. 
          <br /><br />
          Honestly, I’m not a fan of <strong>low-level languages</strong>—they require too much time and energy for simple tasks. I’d rather get to the <strong>fun part</strong> quickly: <strong>building the app</strong>.
        </>
      ),
      active: false
    },
    {
      question: "If a product is great, does the UI really matter that much?",
      answer: (
        <>
          Most users <strong>judge a book by its cover</strong>. If a site looks messy, they assume the <strong>business is messy</strong>, too. 
          <br /><br />
          That’s why I focus on <strong>"Visual-First" design</strong>—it builds <strong>instant trust</strong>. My goal is to remove frustration so users can reach your offer without a headache.
        </>
      ),
      active: false
    },
    {
      question: "What's your take on 'No-Code' platforms?",
      answer: (
        <>
          They are great for <strong>rapid prototyping</strong>, but you eventually hit a <strong>ceiling</strong>. 
          <br /><br />
          When a project needs <strong>next-level polish</strong> or a truly bespoke UI, those platforms start to feel like a box. <strong>Custom code</strong> is the only way to get total functional freedom.
        </>
      ),
      active: false
    },
    {
      question: "Should a site be 'Beautiful' or 'Fast'?",
      answer: (
        <>
          If a user leaves before the site renders, your design <strong>doesn't exist</strong>. 
          <br /><br />
          To beat the <strong>"performance cliff,"</strong> I optimize assets and leverage <strong>Cloudinary’s Global CDN</strong> to serve images from the <strong>edge server</strong> closest to the user. Beauty and speed must go hand-in-hand.
        </>
      ),
      active: false
    }
  ]);

  const handleQuestionClick = (question: string) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((q) => {
        if (q.question === question) {
          return { ...q, active: !q.active };
        }
        return { ...q, active: false };
      });
    });
  };

  return (
    <section id="faq-section" className="faq-container">
      <div className="faq">
        <h2>FAQs</h2>

        <div className="faqs">
          {questions.map((q, i) => {
            const { question, answer, active } = q;

            return (
              <FAQItem 
                key={i}
                question={question}
                answer={answer}
                active={active} 
                handleQuestionClick={handleQuestionClick}
              />)})}
        </div>
      </div>
    </section>
  )
}
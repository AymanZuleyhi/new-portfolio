import FAQItem from "../../FAQItem/FAQItem";
import { useState } from "react";
import "./FAQ.css"

export default function FAQ() {
  const [questions, setQuestions] = useState([
    { 
      question: "What's your story?", 
      answer: "Hi, my name is Ayman 👋. \n \nI’m 29, from Bulgaria. Since I was a kid, I used to love video games and all kinds of cartoon channels, such as Cartoon Network, Jetix, Nickelodeon, etc. Combining video games and cartoons is how I ended up learning English. \n\nAround the age of 28, I discovered Dropshipping, and I became super interested in it. I built and ran multiple stores, from women’s clothing to pet stores, managing everything from the website, ads, inventory, creatives, etc. As of today, we’re running a store with my sister - Adeline Sportswear. \n\n From the whole journey of E-com, the thing that I loved the most was building the websites, so I started focusing a bit more on that. I pivoted to selling websites. At the time, I didn’t know how to code, so I used to build them on website builders like Shopify and WordPress. After some time, I became frustrated and boxed in, I wanted to build my own solutions from scratch, so I started learning how to code. \n\nNow, I’ve been coding for 2 years and am enjoying the process. Some weeks are busier than others, so there’s not much time, but the consistency is important. ", 
      active: false 
    },
    { 
      question: "What's a good company culture for you?", 
      answer: "I want to be part of a team where we can joke around, share a meal (or a recipe!), and still be intensely focused on shipping great code. Toxicity is a productivity killer; a supportive team is a force multiplier.", 
      active: false 
    },
    { 
      question: "Are there any technologies you absolutely hate using?", 
      answer: "I've used everything from no-code platforms like WordPress, Shopify, and Wix, to low-level languages like C. I'm not a big fan of the low level languages as it takes a lot of time and energy to do simple things. I'd rather get to the fun part quicker aka building the app.",
      active: false 
    },
    { 
      question: "If a product is great, does the UI really matter that much?", 
      answer: "If a website is ugly or hard to use, people won't stay long enough to see how great the actual product is. Most users judge a service by its cover. If the site looks messy, they assume the business is messy, too. That's why I focus on 'Visual-First' design, it builds instant trust. My goal is to remove the frustration so users can actually get to what you're offering without getting a headache.", 
      active: false 
    },
    { 
      question: "What's your take on 'No-Code' platforms?", 
      answer: "They’re great for getting an idea off the ground or rapid prototyping. However, you eventually hit a ceiling. When a project needs that next-level polish or a truly bespoke UI, those platforms start to feel like a box. Moving to custom code is the only way to get total creative and functional freedom.", 
      active: false 
    },
    { 
      question: "Should a site be 'Beautiful' or 'Fast'?", 
      answer: "Industry data shows that once a site hits a 2-second load time, user drop-off skyrockets. You can have the most beautiful UI in the world, but if the user leaves before it renders, it doesn't exist. To beat that 'performance cliff', some of the things that I do are that I leverage Cloudinary’s Global CDN to serve assets from the edge server closest to the user.", 
      active: false 
    },
  ]);

  const handleQuestionClick = (clickedQuestion) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((q) => {
        if (q.question === clickedQuestion.question) {
          // If it's the one we clicked, flip its current state (true -> false, false -> true)
          return { ...q, active: !q.active };
        }
        // If it's NOT the one we clicked, close it (Accordion behavior)
        return { ...q, active: false };
      });
    });
  };

  return (
    <section id="faq-section" className="faq-container">
      <div className="faq">
        <h2>FAQs</h2>

        <div className="faqs">
          {questions.map((q) => {
            return <FAQItem eachQuestion={q} handleQuestionClick={handleQuestionClick}/>
          })}
        </div>
      </div>
    </section>
  )
}
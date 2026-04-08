import "./Contact.css";
import { useState, useRef, useEffect } from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { listOfTechnologies } from "../../technologies.ts";
import Button from "../../components/7. general/button/Button.tsx";
import Input from "../../components/6. contact/input/Input.tsx";
import Textarea from "../../components/6. contact/textarea/Textarea.tsx";
import Glow from "../../components/7. general/glow/Glow.js";
import Net from "../../components/7. general/net/Net.js";

type TechnologyType = {
  name: string,
  src: String
}

type ContactType = {
  handleShowToast: () => void
}

const randomNumber = () => {
  return Math.floor(Math.random() * (70 - 40 + 1)) + 40;
};

const icons = [
  { id: 1, src: listOfTechnologies.find((t: TechnologyType) => t.name === "HTML")?.src, width: `${randomNumber()}px`,top: '30%', left: '15%', delay: '0s', speed: '7s' },
  { id: 2, src: listOfTechnologies.find((t: TechnologyType) => t.name === "CSS")?.src, width: `${randomNumber()}px`, top: '20%', right: '10%', delay: '1s', speed: '9s' },
  { id: 3, src: listOfTechnologies.find((t: TechnologyType) => t.name === "JavaScript")?.src, width: `${randomNumber()}px`, bottom: '15%', left: '20%', delay: '2s', speed: '6s' },
  { id: 4, src: listOfTechnologies.find((t: TechnologyType) => t.name === "MongoDB")?.src, width: `${randomNumber()}px`, bottom: '25%', right: '25%', delay: '0.5s', speed: '8s' },
  { id: 1, src: listOfTechnologies.find((t: TechnologyType) => t.name === "NodeJs")?.src, width: `${randomNumber()}px`,top: '50%', left: '10%', delay: '0s', speed: '7s' },
  { id: 2, src: listOfTechnologies.find((t: TechnologyType) => t.name === "React")?.src, width: `${randomNumber()}px`, top: '40%', right: '10%', delay: '1s', speed: '9s' },
];

export default function Contact(props: ContactType) {
  const { handleShowToast } = props;

  const [formVersion, setFormVersion] = useState(0);

  const handleReset = () => {
    setFormVersion(prev => prev + 1);
  };

  const formRef = useRef<HTMLFormElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const formValidity = formRef?.current?.checkValidity() ?? false;

    setIsValid(formValidity);
  }, [values])

  const input = [
    {
      id: 1,
      name: "name",
      placeholder: "Your name...",
      label: "Username",
      errorMessage: "Your name is not valid",
      pattern: "^[a-zA-Z\\s]{2,50}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      placeholder: "youremail@gmail.com",
      label: "Email",
      errorMessage: "Not a valid email",
      pattern: "^[A-Za-z0-9\\.\\-_+]+@[A-Za-z0-9\\.\\-_+]+\\.[A-Za-z]{2,}$",
      required: true,
    },
    {
      id: 3,
      name: "message",
      placeholder: "Your message...",
      label: "Message",
      errorMessage: "The message must be between 10 and 500 characters.",
      required: true,
    }
  ];

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name] : e.target.value
    }));
  };

  const fetchData = async () => {
    const url = `http://localhost:5000/api/contact`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });
      if(!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      if(error instanceof Error) {
        console.error(error.message)
      } else {
        console.error("An unexpected error occured.");
      }
    }
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e?.preventDefault();

    setIsLoading(true);

    const formValidity = formRef?.current?.checkValidity();
    
    if(!formValidity) return;
    
    // Name Check: Must match your Regex and not be just spaces
    const nameRegex = /^[a-zA-Z\s\'-]{2,50}$/;
    if (!nameRegex.test(values.name.trim())) {
      return;
    }

    // Email Check: Standard format
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(values.email.trim())) {
      return;
    }

    // Message Check: Minimum 10 non-space characters
    const messageLength = values.message.trim().length;
    if (messageLength < 10 || messageLength > 500) {
      return;
    }

    // Everything is safe, send data to DB.
    const fetch = await fetchData();

    if(fetch.message === "Email sent successfully!") {
      setValues({
        name: "",
        email: "",
        message: ""
      })

      handleShowToast();
      setIsLoading(false);
      handleReset();
    }
  };

  return (
    <section id="contact-section" className="contact">
      <Glow/>
      <Net />

      <div className="floating-icons">
        {icons.map((icon, i: number) => (
          <img
            key={i}
            src={icon.src}
            alt="floating-element"
            className="img"
            style={{
              width: icon.width,
              top: icon.top,
              left: icon.left,
              right: icon.right,
              bottom: icon.bottom,
              animationDelay: icon.delay,
              animationDuration: icon.speed
            }}
          />
        ))}
      </div>
    
      <div className="contact-body">
        <h2 className="reveal">{"Get in touch ✉️"}</h2>

        <form className="reveal" key={formVersion} onSubmit={handleSubmit} ref={formRef}>
          {input.map((input) => {
            if(input.name === "name" || input.name === "email") {
              return (
                <Input 
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              )
            } else if(input.name === "message") {
              return (
                <Textarea 
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              )
            }
          })}

          <Button 
            text={"Submit"} 
            icon={faPaperPlane}
            isLoading={isLoading}
            isValid={isValid}
          />
        </form>
      </div>
    </section>
  )
}
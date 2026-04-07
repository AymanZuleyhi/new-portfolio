import "./Textarea.css";
import { useState } from "react";

type TextareaType = {
  id: number,
  label: string,
  placeholder: string,
  errorMessage: string,
  value: string,
  onChange: (e: any) => void
};

export default function Textarea(props: TextareaType) {
  const { id, label, errorMessage, onChange, ...inputProps } = props;

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="textarea-container">
      <label>{label}</label>

      <textarea 
        className="textarea" 
        {...inputProps}
        minLength={10}
        maxLength={500}
        onChange={onChange}
        onBlur={handleFocus}
        data-focused={focused.toString()}
      />

      <p>{`${inputProps.value.length} / 500`}</p>

      <span className="textarea-error-message">{errorMessage}</span>
    </div>
  )
}
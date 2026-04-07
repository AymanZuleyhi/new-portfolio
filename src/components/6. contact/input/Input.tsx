import "./Input.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

type InputType = {
  id: number,
  label: string,
  placeholder: string,
  errorMessage: string,
  value: string,
  onChange: (e: any) => void
}

export default function Input(props: InputType) {
  const [focused, setFocused] = useState<boolean>(false);
  const { id, label, errorMessage,onChange, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
      <div className="input-container">
        <label>{label}</label>
        
        <div className="input-field-group">
          <input 
            className="input"
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            data-focused={focused.toString()}
          />

          <FontAwesomeIcon icon={faCircleCheck} className="icon-success" />
          <FontAwesomeIcon icon={faCircleXmark} className="icon-error" />
        </div>

        <span className="error-message">{errorMessage}</span>
      </div>
  )
}
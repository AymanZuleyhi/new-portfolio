import "./Button.css";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from "../loader/Loader";

type ButtonProps = {
  text: string,
  icon?: IconProp,
  height?: number,
  onClick?: (e: any) => void
  isLoading?: boolean,
  isValid?: boolean,
}

export default function Button(props: ButtonProps) {
  const { text, icon, height, onClick, isLoading, isValid = true } = props;

  return (
    <button 
      className={`button ${isValid ? "valid" : "invalid"}`}
      style={{ height: height }}
      onClick={onClick}
      >
      {text}

      {(!isLoading && icon) &&
        <FontAwesomeIcon icon={icon}/>
      }

      {isLoading && 
        <Loader />
      }
    </button>
  )
}
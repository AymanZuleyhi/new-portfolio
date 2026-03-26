import Loader from "../loader/Loader";
import "./Button.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ButtonProps = {
  text: string,
  height?: number
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

      {!isLoading &&
        <FontAwesomeIcon icon={icon}/>
      }

      {isLoading && 
        <Loader />
      }
    </button>
  )
}
import "./CurrentlyEmployed.css";
import logo from "../../../icon-color.png";

export default function CurrentlyEmployed() {
  return (
    <div className="currency-employed">
      <img src={logo}/>
      <span>Currently employed at <span>SoftSwiss</span></span>
    </div>
  )
};
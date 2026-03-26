import "./Technology.css";

export default function Technology(props) {
  const { technology } = props;

  return (
    <div className="technology">
      <img src={technology.src}/>
      <div className="tooltip">{technology.name}</div>
    </div>
  )
}
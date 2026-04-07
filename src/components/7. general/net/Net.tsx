import "./Net.css";

export default function Net(props) {
  const { opacity } = props;

  return (
    <div className="net" style={{ opacity: opacity }}></div>
  )
}
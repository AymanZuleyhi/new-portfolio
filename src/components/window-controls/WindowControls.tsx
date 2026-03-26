import "./WindowControls.css";

export default function WindowControls() {
  return (
    <div className="window-controls">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="traffic-light-dot" />
      ))}
    </div>
  )
}
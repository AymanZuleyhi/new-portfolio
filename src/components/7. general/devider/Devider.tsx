import "./Devider.css";

type DeviderType = {
  marginTop: string,
  marginBottom: string
}

export default function Devider(props: DeviderType) {
  const { marginTop, marginBottom } = props;

  const stripes = Array.from({ length: 32 });

  return (
    <div className="grid-bg" style={{ marginTop: marginTop, marginBottom: marginBottom }}>
      {stripes.map((_, i) => (
        <div key={i} className="grid-cell" />
      ))}
    </div>
  )
};
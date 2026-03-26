import "./SpotifyPlayer.css";

export default function SpotifyPlayer() {
  return (
    <div className="spotify-card">
      <iframe
        title="Dom Dolla - Saving Up"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/787Y2idwCU2Rk60Prv4wpr?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  )
}
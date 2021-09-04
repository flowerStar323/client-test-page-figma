export default function TechCard({ src, alt, title, style }){
  return (
    <div className="tech-card" style={style}>
      <div>
        <img src={src} alt={alt} />
        <div>{ title }</div>
      </div>
    </div>
  )
}
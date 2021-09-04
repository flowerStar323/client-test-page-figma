export default function Service({ icon, heading, content }) {
  return (
    <div className="service">
      <div>
        <img src={icon.src} alt={icon.alt} />
      </div>
      <div>
        <h3>{heading}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

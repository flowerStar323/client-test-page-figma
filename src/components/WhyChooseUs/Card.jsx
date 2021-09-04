export default function Card({
  icon,
  heading,
  content,
  actionLinkA,
  actionLinkB,
}) {
  return (
    <button href="#" className="card">
      <div>
        <div>
          <img src={icon.src} alt={icon.alt} />
        </div>
        <h3>{heading}</h3>
        <p>{content}</p>
        <div>
          <a href={actionLinkA.href} className="outline">
            Request Access
          </a>
          <a href={actionLinkB.href} className="filled">
            View Portfolio
          </a>
        </div>
      </div>
    </button>
  );
}

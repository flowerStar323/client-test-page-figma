export default function Article({ icon, title, content }) {
  return (
    <article>
      <div>
        <img src={icon.src} alt={icon.alt} />
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </article>
  );
}

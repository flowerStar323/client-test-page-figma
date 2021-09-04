export default function Contact({ Icon, type, value }) {
  return (
    <div className="contact">
      <div>
        <Icon />
      </div>
      <div>
        <h5>{type}</h5>
        <div>{value}</div>
      </div>
    </div>
  );
}

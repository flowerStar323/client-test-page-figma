import "./styles.scss";

export function TopBar() {
  return (
    <section className="top-bar page-section">
      <div className="logo">WCA</div>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Promotions</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Service</a>
          </li>
          <li>
            <a href="/">Solutions</a>
          </li>
        </ul>
      </nav>
      <button className="get-started">Get Started</button>
    </section>
  );
}

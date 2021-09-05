import { useState, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles.scss";

export function TopBar() {
  const [showingNav, setShowingNav] = useState(false);

  const toggleNav = useCallback(() => {
    setShowingNav((s) => !s);
  }, [setShowingNav]);

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
      <button onClick={toggleNav} className="menu-bars-toggle">
        <FaBars />
      </button>
      <div
        className="mobile-menu"
        style={{ display: showingNav ? "block" : "none" }}
      >
        <nav className="main-nav">
          <ul>
            <li>
              <button onClick={toggleNav}>
                <FaTimes />
              </button>
            </li>
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
      </div>
    </section>
  );
}

import layout_graphic from "../../images/layout.png";
import top_bg from "../../images/top_bg.png";
import { TopBar } from "../TopBar";
import "./styles.scss";

export function Hero() {
  return (
    <div className="hero-wrapper" style={{ backgroundImage: `url(${top_bg})` }}>
      <TopBar />
      <section className="hero page-section">
        <div className="left-side">
          <div>A modern approach to public safety communications</div>
          <div>
            High tech cloud software technology development group founded in the
            silicon valley led by FAANG engineers who have delivered at the
            highest echelions of technology
          </div>
          <a href="/" className="outline">
            Read More
          </a>
        </div>
        <div className="right-side">
          <img src={layout_graphic} alt="Layout" />
        </div>
      </section>
    </div>
  );
}

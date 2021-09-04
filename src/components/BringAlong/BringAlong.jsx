import react from "../../images/react.png";
import laravel from "../../images/laravel.png";
import angular from "../../images/angular.png";
import nodejs from "../../images/nodejs.png";
import design from "../../images/design.png";
import bring_along_bg from "../../images/bring_along_bg.png";
import marketing from "../../images/marketing.png";

import "./styles.scss";
import TechCard from "./TechCard";
import Article from "./Article";

export function BringAlong() {
  return (
    <section className="page-section bring-along">
      <div
        className="left-side"
        style={{ backgroundImage: `url(${bring_along_bg})` }}
      >
        <TechCard
          src={react}
          alt="React Js"
          title="React Js"
          style={{
            gridColumn: "1 / span 1",
            gridRow: "2 / span 4",
          }}
        />
        <TechCard
          src={laravel}
          alt="Laravel"
          title="Laravel"
          style={{
            gridColumn: "2 / span 1",
            gridRow: "1 / span 4",
          }}
        />
        <TechCard
          src={angular}
          alt="Angular Js"
          title="AngularJs"
          style={{
            gridColumn: "1 / span 1",
            gridRow: "5 / span 1",
          }}
        />
        <TechCard
          src={nodejs}
          alt="Node Js"
          title="Node Js"
          style={{
            gridColumn: "2 /span 1",
            gridRow: "4 / span 1",
          }}
        />
      </div>
      <div className="right-side">
        <h3>Bring along your favourite technology</h3>
        <div>
          <Article
            icon={{ src: design, alt: "Design" }}
            title="Design focused"
            content="Appropriately recapitualize multimedia based top-line e-serviced"
          />
          <Article
            icon={{ src: marketing, alt: "Marketing" }}
            title="Marketing activity"
            content="Dynamically recapitiualize fully researched e-services applications"
          />
        </div>
        <a href="/" className="filled">
          Read More
        </a>
      </div>
    </section>
  );
}

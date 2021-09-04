import ux from "../../images/ux.png";
import db_design from "../../images/db_design.png";
import software_dev from "../../images/software_dev.png";
import blockchain from "../../images/blockchain.png";
import team_building from "../../images/team_building.png";
import digital_career from "../../images/digital_career.png";
import Card from "./Card";
import "./styles.scss";

export function WhyChooseUs() {
  return (
    <section className="page-section why-choose-us">
      <h5>WE ARE THE BEST</h5>
      <h4>Why Choose WCA</h4>
      <div className="cards">
        <Card
          icon={{ src: ux, alt: "User Experience" }}
          heading="User Experience Design"
          content="Add beautiful intuitive designs that increase user hapiness to your product"
          actionLinkA={{ href: "/" }}
          actionLinkB={{ href: "/" }}
        />
        <Card
          icon={{ src: db_design, alt: "Database design" }}
          heading="Database Design"
          content="Access relational and Nonrelational databases and web services to your product"
          actionLinkA={{ href: "/" }}
          actionLinkB={{ href: "/" }}
        />
        <Card
          icon={{ src: software_dev, alt: "Software development" }}
          heading="Software development"
          content="Access firepower for your software product. We specialize in modern JS, Ruby and python stacks"
          actionLinkA={{ href: "/" }}
          actionLinkB={{ href: "/" }}
        />
        <Card
          icon={{ src: blockchain, alt: "Blockchain" }}
          heading="Blockchain development"
          content="Access firepower for your blockchain product. We specialize in modern Ethereum stack"
          actionLinkA={{ href: "/" }}
          actionLinkB={{ href: "/" }}
        />
        <Card
          icon={{ src: team_building, alt: "Team building" }}
          heading="Software team building"
          content="Source talent from an active developer community"
          actionLinkA={{ href: "/" }}
          actionLinkB={{ href: "/" }}
        />
        <Card
          icon={{ src: digital_career, alt: "Digital career" }}
          heading="Digital career center"
          content="Launch your startup the easy way"
          actionLinkA={{ href: "/" }}
          actionLinkB={{ href: "/" }}
        />
      </div>
    </section>
  );
}

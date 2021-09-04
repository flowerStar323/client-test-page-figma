import other_services from "../../images/other_services.png";
import cloud_communities from "../../images/cloud_service.png";
import cloud_commerce from "../../images/cloud_commerce.png";
import Service from "./Service";
import "./styles.scss";

export function OtherServices() {
  return (
    <section className="other-services page-section">
      <div>
        <img src={other_services} alt="Other services" />
      </div>
      <div>
        <div>
          <Service
            icon={{ src: cloud_communities, alt: "Cloud communities" }}
            heading="Cloud communities section"
            content="Coming soon"
          />
          <Service
            icon={{ src: cloud_commerce, alt: "Cloud commerce" }}
            heading="Cloud commerce"
            content={
              <>
                <span style={{ fontWeight: "500" }}>
                  Early stage startup solutions
                </span>
                <br />
                <span>Launch your startup the easy way</span>
              </>
            }
          />
        </div>
        <div>
          <a href="/" className="outline">
            Request Access
          </a>
          <a href="/" className="filled">
            View portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

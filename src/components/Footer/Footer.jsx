import { MdLocalPhone, MdEmail, MdRoom } from "react-icons/md";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Contact from "./Contact";

import "./styles.scss";

export function Footer() {
  return (
    <footer className="page-footer">
      <section className="page-section">
        <div className="first">
          <div className="wca">WCA</div>
          <p>
            High tech cloud software technology development group founded in the
            silicon valley led by FAANG engineers who have delivered the highest
            echelons of technology
          </p>
          <div className="find-and-follow">
            Find and follow White Cloud Apps
          </div>
          <ul>
            <li>
              <a href="/">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="/">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="/">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <ul className="quick-links">
          <h4>Quick Links</h4>
          <li>
            <a href="/">Mission</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Values</a>
          </li>
          <li>
            <a href="/">Team</a>
          </li>
        </ul>
        <div className="contacts">
          <Contact Icon={MdLocalPhone} type="Phone" value="01307524982" />
          <Contact
            Icon={MdEmail}
            type="Email"
            value="access@whitecloudapps.com"
          />
          <Contact Icon={MdRoom} type="Address" value="Apple park, US-814146" />
        </div>
      </section>
      <section>
        <div>
          Copyright &copy; 2021 White Cloud Apps Pvt. Ltd. All rights reserved
        </div>
      </section>
    </footer>
  );
}

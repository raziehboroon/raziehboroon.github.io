import "./Footer.scss";
import LinkOpener from "../LinkOpener/LinkOpener";
// Function(s)
import { getDate } from "../../utils/helpers";
// Icon(s)
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { EMAIL_ADD, GITHUB_ADD, LINKEDIN_ADD, TWITTER_ADD } from "../../utils/constant";

const Footer = () => {
  return (
    <footer>
      <div className="contact-links">
        <LinkOpener
          href={LINKEDIN_ADD}
          content={<FaLinkedin />}
        />
        <LinkOpener
          href={GITHUB_ADD}
          content={<FaGithub />}
        />
        <LinkOpener
          href={TWITTER_ADD}
          content={<FaTwitter />}
        />
        <LinkOpener
          href={EMAIL_ADD}
          content={<FaEnvelope />}
        />
      </div>
      <h4>
        <span>&copy;{getDate()}</span>
        <span className="footer-name"> Razieh Boroon.</span> All Rights Reserved
      </h4>
    </footer>
  );
};

export default Footer;

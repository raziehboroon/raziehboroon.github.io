import "./Footer.scss";
import React from "react";
// Function(s)
import { getDate } from "../../utils/helpers";
// Icon(s)
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/razieh-boroon/" target="noopener">
          <FaLinkedin />
        </a>
        <a href="https://github.com/raziehboroon" target="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com/raziehboroon" target="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="mailto:razieh.boroon@gmail.com" target="noopener noreferrer">
          <FaEnvelope />
        </a>
      </div>
      <h4>
        <span>&copy;{getDate()}</span>
        <span className="footer-name"> Razieh Boroon.</span> All Rights Reserved
      </h4>
    </footer>
  );
};

export default Footer;

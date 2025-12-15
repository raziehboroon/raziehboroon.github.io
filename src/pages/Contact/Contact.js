import "./Contact.scss";
import React from "react";
import { Link } from "react-router-dom";
// Icon(s)
import { FiAtSign } from "react-icons/fi";
import { EMAIL_ADD } from "../../utils/constant";

const Contact = ({ height }) => {
  return (
    <section
      className={`contact ${height && "max-height"}`}
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), URL(${process.env.PUBLIC_URL}/assets/images/contact-us.jpg) center/cover scroll no-repeat`,
      }}
    >
      <div className="section contact-center">
        <div className="title">
          <h2>let's get in touch</h2>
          <div className="title-underline"></div>
        </div>
        <div className="contact-container">
          <h4>
            If you are looking to get ahold of me, you can send me an email at
            <a href={EMAIL_ADD} target="noopener">
              <span>
                {" "}
                Razieh.Boroon
                <FiAtSign />
                gmail.com
              </span>
            </a>
            <br />
            {/* <br />
            Can also reach me through this number<span> +98-***-****</span> */}
          </h4>
        </div>
        {height && (
          <button className="home-btn">
            <Link to="/">back to home</Link>
          </button>
        )}
      </div>
    </section>
  );
};

export default Contact;

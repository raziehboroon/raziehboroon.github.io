import "./Banner.scss";
import ImageFrame from "../ImageFrame/ImageFrame";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Banner = () => {
  return (
    <header className="banner">
      <div className="banner-center section">
        <div className="banner-info">
          <h4>Hi, My Name Is</h4>
          <h1>Razieh Boroon</h1>
          <h4>I'm a Front-End Developer.</h4>
          <div className="social-links icons">
            <a
              href="https://www.linkedin.com/in/razieh-boroon/"
              target="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/raziehboroon"
              target="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/raziehboroon"
              target="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <ImageFrame
          src={`${process.env.PUBLIC_URL}/assets/images/IMG_9677-resized.JPG`}
          name="myPicture"
          alignment={true}
        />
      </div>
    </header>
  );
};

export default Banner;

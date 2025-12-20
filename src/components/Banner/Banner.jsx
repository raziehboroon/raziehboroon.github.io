import "./Banner.scss";
import ImageFrame from "../ImageFrame/ImageFrame";
import LinkOpener from "../../components/LinkOpener/LinkOpener";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { GITHUB_ADD, LINKEDIN_ADD, TWITTER_ADD } from "../../utils/constant";

const Banner = () => {
  return (
    <header className="banner">
      <div className="banner-center section">
        <div className="banner-info">
          <h4>Hi, My Name Is</h4>
          <h1>Razieh Boroon</h1>
          <h4>I'm a Front-End Developer.</h4>
          <div className="social-links icons">
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
          </div>
        </div>
        <ImageFrame
          src={"/assets/images/IMG_9677-resized.JPG"}
          name="myPicture"
          alignment={true}
        />
      </div>
    </header>
  );
};

export default Banner;

import "./About.scss";
import React from "react";
import { Link } from "react-router-dom";
// Component(s)
// import ImageFrame from "../ImageFrame/ImageFrame";
//Icon(s)
import { AiFillCaretRight } from "react-icons/ai";

const About = ({ height }) => {
  const skills = [
    "HTML5",
    "CSS3",
    "SASS",
    "Bootstrap",
    "JavaScript (ES6+)",
    "React.js",
    "Typescript",
    "Familiar with Next.js",
    "Restful APIs",
    "Familiar with Material-UI, Age-Grid, Ant-Design, React-Query, Redux",
    "Figma – UI/UX design and prototyping",
    "Git – version control",
    "Jira(Scrum) – Agile/scrum",
  ];
  return (
    <section className={`about ${height && "max-height"}`}>
      <div className="section">
        <div className="about-content">
          <div className="about-image">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/about.jpg`}
              alt="about"
            />
            {/* <ImageFrame
              src={`${process.env.PUBLIC_URL}/assets/images/keyboard.jpg`}
              name="keyboard"
              alignment={false}
            /> */}
          </div>
          <div className="about-text">
            {/* title */}
            <div className="title">
              <h2>about</h2>
              <div className="title-underline"></div>
            </div>
            <p>
              I have master degree in Information Technology Engineering. I'm able to work with the following
              technologies:
            </p>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>
                  <AiFillCaretRight className="icon" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
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

export default About;

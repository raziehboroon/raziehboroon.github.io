import "./Projects.scss";
import React from "react";
import { Link } from "react-router-dom";
// Project Details info
import { data } from "../../data.js";
// Component(s)
import SingleProject from "../SingleProject/SingleProject";

const Projects = ({ height }) => {
  return (
    <section className={`projects ${height && "max-height"}`}>
      <div className="section">
        <div className="title">
          <h2>Projects</h2>
          <div className="title-underline"></div>
        </div>
        <div className="card-container">
          {data.map((item) => (
            <SingleProject key={item.id} {...item} />
          ))}
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

export default Projects;

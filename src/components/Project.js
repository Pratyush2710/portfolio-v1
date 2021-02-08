import React from "react";
import PropTypes from "prop-types";
import Image from "react-bootstrap/Image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import apnaAnaaj from "./../assets/apnaAnaaj.png";
import camscanner from "./../assets/camscanner.jpg";
import gitGeek from "./../assets/gitGeek.gif";

const Project = ({ title, description, image, github, url, stack, index }) => {
  const mapImagesToProject = {
    gitGeek: gitGeek,
    apnaAnaaj: apnaAnaaj,
    camscanner: camscanner,
  };

  return (
    <article className="project">
      <div
        className="project-img"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div aria-hidden="true" style={{ width: "100%" }}></div>

        <Image
          src={mapImagesToProject[image]}
          // width="70%"
          className="project-img"
          style={{}}
        />
      </div>
      <div className="project-info">
        <span className="project-number">0 {index + 1}</span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  );
};

Project.propTypes = {};

export default Project;

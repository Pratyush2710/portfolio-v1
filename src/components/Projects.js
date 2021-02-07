import React, { useEffect, useState } from "react";
import Title from "./Title";
import Project from "./Project";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
const Projects = ({ title, showLink }) => {
  const [projects, setProjects] = useState({});
  useEffect(() => {
    axios
      .get("data/projects.json")
      .then((res) => {
        console.log(res.data);
        setProjects(res.data["projects"]);
      }, [])
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.length > 0 &&
          projects.map((project, index) => {
            return <Project key={project.id} index={index} {...project} />;
          })}
      </div>
      {showLink && (
        <a href="https://github.com/Pratyush2710">
          <button className="btn center-btn">Projects on Github</button>
        </a>
      )}
    </section>
  );
};

export default Projects;

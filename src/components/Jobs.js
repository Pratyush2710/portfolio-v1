import React, { useState, useEffect } from "react";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
// import { Link } from "gatsby";
import axios from "axios";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [jobData, setJobData] = useState(null);

  const [value, setValue] = useState(0);
  useEffect(() => {
    axios
      .get("data/experience.json")
      .then((res) => {
        console.log(res.data);
        setJobData(res.data["experience"]);
      }, [])
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { company, position, date, description } = jobData
    ? jobData[value]
    : "";
  console.log("job-data", jobData);
  return (
    <section className="section jobs">
      <Title title="Experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobData &&
            jobData.map((job, index) => {
              return (
                <button
                  key={job.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && "active-btn"}`}
                >
                  {job.company}
                </button>
              );
            })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {description &&
            description.map((item, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{item}</p>
                </div>
              );
            })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        More info
      </Link>
    </section>
  );
};

export default Jobs;

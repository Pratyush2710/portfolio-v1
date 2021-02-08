import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Blog = ({ id, title, image, date, category, slug, desc, index }) => {
  return (
    <Link to={`/blogs/${slug}`} className="blog" key={id}>
      <article key={index}>
        <div className="blog-img gatsby-image-wrapper">
          <div
            aria-hidden="true"
            style={{ width: "100%", paddingBottom: "66%" }}
          ></div>
          {/* <img></img> */}
        </div>
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

Blog.propTypes = {};

export default Blog;

import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

const ComponentName = ({ data }) => {
  const { content } = data.blog;

  return (
    <section className="blog-template">
      <div className="section-center">
        <article className="blog-content">
          <ReactMarkdown source={content} />
        </article>
        <Link to="/blog" className="btn center-btn">
          Blog
        </Link>
      </div>
    </section>
  );
};

export default ComponentName;

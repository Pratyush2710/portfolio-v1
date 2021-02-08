import React, { useState, useEffect } from "react";
import Title from "./Title";
import Blog from "./Blog";
import { Link } from "react-router-dom";
import axios from "axios";

export const Blogs = ({ title, showLink }) => {
  const [blogs, setBlogs] = useState(["abc"]);

  useEffect(() => {
    axios
      .get("data/blogs.json")
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data["blogs"]);
      }, [])
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        {blogs.length > 0 &&
          blogs.map((blog, index) => {
            return <Blog key={blog.id} {...blog} index={index} />;
          })}
      </div>
      {showLink && (
        <Link to="/blogs" className="btn center-btn">
          blog
        </Link>
      )}
    </section>
  );
};
export default Blogs;

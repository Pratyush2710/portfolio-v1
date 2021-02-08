import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import axios from "axios";
import Blogs from "../components/Blogs";

const Blog = () => {
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
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="blogs" />
      </section>
    </Layout>
  );
};

export default Blog;

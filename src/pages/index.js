import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Blogs from "../components/Blogs";
import Projects from "../components/Projects";
export default () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects title="Featured Projects" showLink />
      <Blogs title="Recent Blogs" showLink />
    </Layout>
  );
};

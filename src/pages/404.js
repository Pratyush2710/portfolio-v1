import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <h1>Oops, the link is not working</h1>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </main>
    </Layout>
  );
};

export default Error;

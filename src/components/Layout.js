import React from "react";
// import "../css/main.css"
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* <Switch>
        <Route path="/" exact />
      </Switch> */}

      {children}
    </>
  );
};

export default Layout;

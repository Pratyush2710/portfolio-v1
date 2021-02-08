import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar open={open} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

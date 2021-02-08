import React from "react";
import { Link } from "react-router-dom";
// import Image from "gatsby-image";
// import { Link } from "gatsby";
// import { graphql, useStaticQuery } from "gatsby";
import SocialLinks from "../constants/socialLinks";
import Image from "react-bootstrap/Image";
// ...GatsbyImageSharpFluid
import profileImage from "../assets/hero-img.png";
// import profileImage from "../assets/profileImage.svg";

const Hero = () => {
  return (
    <>
      <header className="hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div>
              <div className="underline"></div>
              <h1>Hi, I'm Pratyush</h1>
              <h4>Lorem ipsum dolor sit amet consectetur</h4>
              <Link to="/contact" className="btn">
                Contact Me
              </Link>
              <SocialLinks />
            </div>
          </article>

          <div
            className="hero-img"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <div
              aria-hidden="true"
              style={{ width: "100%", paddingBottom: "100%" }}
            ></div>

            <Image
              src={profileImage}
              width="70%"
              className="hero-img"
              style={{
                position: "absolute",
                top: "80px",
                left: "100px",
                width: "80%",
                height: "75%",
                objectFit: "cover",
                objectPosition: "center center",
                transitionDelay: "500ms",
              }}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;

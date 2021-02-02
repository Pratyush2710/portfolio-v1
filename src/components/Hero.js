import React from "react";
import { Link } from "react-router-dom";
// import Image from "gatsby-image";
// import { Link } from "gatsby";
// import { graphql, useStaticQuery } from "gatsby";
import SocialLinks from "../constants/socialLinks";
import Image from 'react-bootstrap/Image'
// ...GatsbyImageSharpFluid
import profileImage from '../assets/hero-img.png';

const Hero = () => {
  return <>
  <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
          <h1>Hi, I'm Pratyush</h1>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, unde!</h4>
          <Link to="/contact" className="btn">
            Contact Me
          </Link>
          <SocialLinks/>
<Image src={profileImage}  width="70%" className="hero-img"/>
        </div>
      </article>

    </div>
  </header>
  </>
};

export default Hero;

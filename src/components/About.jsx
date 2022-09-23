import React from "react";
import "../css/about.css";
import image from "../Assests/logo.jpg";
import { BsAwardFill } from "react-icons/bs";
import { GoProject } from "react-icons/go";
import {Link} from "react-scroll"
function About() {
  return (
    <div id="about">
      <p>Get To Know</p>
      <h2>About Me</h2>
      <div className="about">
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
            <img src={image} alt="" />
            </div>
  
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
          <Link to="experience"    smooth={true}
          duration={1000}
          style={{textDecorationLine:"unset",color:"white"}}>
          <article className="about__card">
             <BsAwardFill className="about__icon" />
              <h5 >Experience</h5>
              <small >1+ Years</small>
              <small>Working</small>
            </article>
          </Link>

          <Link   to="portfolio"  smooth={true}
          duration={1000}
           style={{textDecorationLine:"unset",color:"white"}}>
            <article className="about__card">
              <GoProject className="about__icon" />
              <h5>Projects</h5>
              <small>2+ completed</small>
             
            </article>
</Link>
          </div>
          <div className="about_text">
          <p  >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            fuga ea cum possimus non, aperiam optio. Blanditiis quos ea, labore
            at, nostrum impedit temporibus quo, pariatur obcaecati sit sed
            tempore.
          </p>
          </div>
<Link   to="contact"  smooth={true}
          duration={1000}
          >
<button className="btn__primary">Let's Talk</button>
</Link>
         
        </div>
      </div>
    </div>
  );
}

export default About;

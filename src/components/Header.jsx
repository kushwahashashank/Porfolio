import React from "react";
import "../css/header.css";
import { GiArmoredBoomerang } from "react-icons/gi";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../Assests/images4.jpg";
import { Link } from "react-scroll";
function Header() {
  return (
    <div id="home" className="header">
      <div className="header__left">
        <GiArmoredBoomerang className="header__left__icon" />
        <p>More</p>
      </div>
      <div className="header__social animation_down ">
        <a
          href="https://github.com/kushwahashashank"
          rel="noreferrer"
          target={"_blank"}
        >
          <BsGithub className="header__social__icon" />
        </a>
        <a
          href="https://linkedin.com/in/abhishek-kushwaha-a766a3201"
          rel="noreferrer"
          target={"_blank"}
        >
          <BsLinkedin className="header__social__icon" />
        </a>
        <a
          href="https://instagram.com/_kushwaha_shashank_"
          rel="noreferrer"
          target={"_blank"}
        >
          <AiFillInstagram className="header__social__icon" />
        </a>
        <a
          href="https://twitter.com/Abhishe98110899"
          rel="noreferrer"
          target={"_blank"}
        >
          <BsTwitter className="header__social__icon" />
        </a>
      </div>
      <div className="header__profile">
        <div className="header__intro">
          <p style={{ fontSize: "1rem" }}>Hello, I'm</p>
          <h2>Abhishek Kushwaha</h2>
          <p style={{ fontSize: "0.85rem" }}>Fullstack Developer</p>
        </div>
        <div className="header__buttons">
          <a href="https://drive.google.com/uc?export=download&id=17a-UcpYka52TF6iUY1bJaM9Hj-6EduY7">
            <button className="animation_left">Download CV</button>
          </a>
          <Link to="contact" smooth={true} duration={1000}>
            <button className="animation_right" id="header__chat">
              Let's Talk
            </button>
          </Link>
        </div>
        <div className="header__logo">
          <img className="header__logo__img" src={logo} alt="" />
        </div>
      </div>
      <div className="header__scroll">
        <Link
          style={{ cursor: "pointer" }}
          to="about"
          smooth={true}
          duration={1000}
          className="animation_down"
        >
          Scroll Down
        </Link>
      </div>
    </div>
  );
}

export default Header;

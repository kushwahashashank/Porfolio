import React from "react";
import "../css/portfolio.css";
import IMG from "../Assests/spotify.jpg";
import IMG2 from "../Assests/ecommerce_images.jpg";
import IMG3 from "../Assests/portfolio.jpg";
function Portfolio() {
  return (
    <div id="portfolio">
      <p>MY Recent Work</p>
      <h2>Projects</h2>
      <div className="portfolio__container container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Portfolio Website</h3>
          <div className="porfolio__item-ct">
            <a
              className="btn"
              href="https://github.com/kushwahashashank"
              rel="noreferrer"
              target={"_blank"}
            >
              Github
            </a>
            <a
              className="btn--primary"
              href="https://localhost:3000"
              rel="noreferrer"
              target={"_blank"}
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>ECommerce Website (Fullstack)</h3>
          <div className="porfolio__item-ct">
            <a
              className="btn"
              href="https://github.com/kushwahashashank/Arthub"
              rel="noreferrer"
              target={"_blank"}
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>Spotify Clone</h3>
          <div className="porfolio__item-ct">
            <a
              className="btn"
              href="https://github.com/kushwahashashank/Spotify_Clone"
              rel="noreferrer"
              target={"_blank"}
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Portfolio;

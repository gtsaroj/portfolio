import React from "react";
import "./about.css";
import AboutImg from "../assests/profile.png";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
     
        <div className="about__data">
          <Info />
          <p className="about__description">
            Hey, I'm saroj gt, a junior developer with a passion for crafting
            digital experiences using ReactJS, NodeJS, ExpressJS, MongoDB,
            PostgreSQL, Stripe, Strapi, and Redux. I'm on a coding journey
            driven by curiosity and a commitment to clean, efficient code.
            <br />
            <br />
            If you need a website for your business, I can help. I make sure it
            looks good and doesn't cost too much. Want to see what I've made?
            scroll the below. And if you're thinking about a website, Let's chat
            about it! You can reach out to me through the contact-form below.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

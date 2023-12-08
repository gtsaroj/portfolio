import React from 'react'
import "./about.css";
import AboutImg from "../assests/profile.png"
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
<img src={AboutImg}  alt="" className='about__img'/>

<div className="about__data">
    <Info/>
    <p className="about__description">
I'm Saroj GT, a MERN developer with one year of experience. Proficient in React.js, Node.js, and MongoDB, I specialize in building dynamic web applications. Let's create something amazing together!</p>

</div>

        </div>
    </section>
  )
}

export default About

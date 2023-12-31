import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__subtitle">Experience</h3>
        <span className="about__subtitle">Junior</span>
      </div>
      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__subtitle">Completed</h3>
        <span className="about__subtitle">6+ Projects </span>
      </div>
      <div className="about__box">
        <i class="bx bx-support about__icon"></i>
        <h3 className="about__subtitle">Support</h3>
        <span className="about__subtitle">Projects </span>
      </div>
    </div>
  );
};

export default Info;

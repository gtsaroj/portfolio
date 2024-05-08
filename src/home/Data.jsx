import React, { useState } from "react";
import { Send } from "lucide-react";
import MovingComponent from "react-moving-text";

const Data = () => {
  const [change, setChange] = useState([
    "MERN STACK DEVELOPER",
    "FULL STACK DEVELOPER",
  ]);

  return (
    <div
      className="home__data"
      style={{
        color: "var(--body_color)",
      }}
    >
      <div>
        <MovingComponent
          type="effect3D"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
          className="home__title"
        >
          SAROJ GT
        </MovingComponent>
        <MovingComponent
          type="typewriter"
          dataText={change}
          className="changer"
          style={{
            fontSize: "50px",
          }}
        >
          <span> {setChange}</span>
        </MovingComponent>

        <p className="home__description">
          Hi there! I'm an enthusiastic fresher full stack developer with
          passion for creating modern web application
        </p>
      </div>

      <button
        style={{
          padding: "5px 10px",
          borderRadius: "3px",
          backgroundColor: "var(--line)",
        }}
      >
        <a
          style={{
            textDecoration: "none",
            color: "var(--body_background)",
          }}
          href="https://res.cloudinary.com/dhnvpzxt6/image/upload/v1715179024/Cv_shzgvd.pdf"
        >
          {" "}
          Download CV{" "}
        </a>
      </button>
    </div>
  );
};

export default Data;

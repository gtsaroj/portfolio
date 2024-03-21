import React, { useState } from "react";
import { Send } from "lucide-react";
import MovingComponent from "react-moving-text";
import CV from "../assests/sarojResume.pdf"

const Data = () => {

  
  const DownloadCV = () => {
    const PDFURL = CV;
    const link = document.createElement("a");
    link.href = PDFURL;
    link.download = "SarojCV.pdf";
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
  }
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
        Hi there! I'm an enthusiastic fresher full stack developer with passion
        for creating modern web application
      </p>

      <div
        className="buttons"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          width : "100%"
        }}
      >
        <a
          className="showme"
          href="#contact"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            width: "100px",
            fontSize: "14px",
          
          
          }}
        >
          Show me
          <Send
            style={{
              color: "white",
              width: "20px",
            
            }}
          />
        </a>
        <div
          onClick={()=> DownloadCV()}
          className="cv"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",

            fontSize: "16px",
            color: "black",
            border: "2px solid blue",
            padding: "10px 10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Download CV
        </div>
      </div>
    </div>
  );
};

export default Data;

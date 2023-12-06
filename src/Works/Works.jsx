import React, { useEffect, useState } from "react";
import { ProjectData, projectNav } from "./Data";
import "./Works.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Works = () => {
  const [projects, setProjects] = useState([]);
  const [item, setItem] = useState({ name: "All" });
  const [active, setActive] = useState(0);
  // const navigate = useNavigate();

  useEffect(() => {
    if (item.name === "All") {
      setProjects(ProjectData);
    } else {
      const newProject = ProjectData?.filter(
        (project) => project.category === item.name
      );
      setProjects(newProject);
    }
  }, [item]);

  function handleClick(e, index) {
    setItem({ name: e.target.textContent });
    setActive(index);
  }

  return (
    <div className="works">
      <div className="projectNav_filter">
        {projectNav.map((item, index) => (
          <div
            className={`projectNav ${index === active ? "active" : ""}`}
            key={index}
            onClick={(e) => handleClick(e, index)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="projectData_filter">
        {projects?.map((item, index) => (
          <div className="projectData" key={index}>
            <div className="projectImg">
              <img src={item.image} alt="" />
            </div>
            <div className="projectTitle">
              <h2>{item.title}</h2>
            </div>
            <div className="demo">
              <button className="demo_button">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="demo_button">
  demo
             <KeyboardArrowRightIcon/>
             
</a>
</button>
<button className="viewButton">view code
<KeyboardArrowRightIcon/>
</button>

           
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;

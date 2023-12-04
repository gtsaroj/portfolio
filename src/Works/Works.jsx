import React, { useState } from 'react';
import { ProjectData, projectNav } from './Data';
import './Works.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Works = () => {
    const [projects, setProjects]= useState([]);
    const [item, setItem ] = useState({name: 'All'})
        const [active, setActive]  = useState(0)

  return (
    <div className="works">
      <div className="projectNav_filter">
        {projectNav.map((item, index) => {
          return (
            <div className="projectNav" key={index}>
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="projectData_filter">
        {ProjectData?.map((item, index)=>(
            <div className="projectData" key={index}>
                <div className="projectImg">
                    <img src={item.image} alt="" />
                </div>
                <div className="projectTitle">
                    <h2>{item.title}</h2>
                </div>
                <div className="demo">
                    <button className='demo_button'> demo <ArrowForwardIosIcon/></button>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Works;

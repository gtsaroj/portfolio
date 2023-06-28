import React, { useState } from 'react'
import "./Services.css"
const Services = () => {

    const [ToggleState, setToogleState] = useState(0);

    const ToggleTap = (index)=>{
        setToogleState(index)
    }
  return (
    <section className="services section" id='services'>
        <h2 className="section__title">Services</h2>
   <span className="section__subtitle">What i offer</span>
   
   <div className="services__container container grid">
    <div className="services__content"> 
        <i  className='uil uil-web-grid services__icon'></i>
        <h3 className="services__title">Web <br/> Designer</h3>

        <span className="services__button" onClick={()=> ToggleTap(1)}>View More
        <i className="uil uil-arrow-right services__button-icon"></i></span>

        <div className={ToggleState ===1 ? "services__modal active-modal": "services__modal"}>
            <div className="services__modal-content">
                <i onClick={()=> ToggleTap(0)} className="uil uil-times services__modal-close"></i>
 
                <h3 className="services__modal-title">Web Designer</h3>
                <p className="services__modal-description">Services 1 years of experience.
                Providing quality work to clients and companies</p>

                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           I develop the user interface
                        </p>
                        
                    </li>

                         <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                            Web page development</p>
                            </li>
                        
                        
                 

                         <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"> </i>
                 
                        <p className="services__modal-info">
                           I create UX element interactions
                        </p>
                        
                    </li>

                       <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           I position your company brand
                        </p>
                        
                    </li>

                       <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>

                        <p className="services__modal-info">
                           Design and mockups of products for companies
                        </p>
                        
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div className="services__content">
        <i className='uil uil-arrow services__icon'></i>
        <h3 className="services__title">Front-End <br/>Developer </h3>

        <span className="services__button" onClick={()=> ToggleTap(2)}>View More
        <i className="uil uil-arrow-right services__button-icon"></i></span>

        <div className={ToggleState === 2 ? "services__modal active-modal": "services__modal"}>
            <div className="services__modal-content">
                <i onClick={()=> ToggleTap(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Front-End Development</h3>
                <p className="services__modal-description">Services with 1 years of experience.
                Providing quality work to clients and companies</p>

                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           I develop the user interface
                        </p>
                        
                    </li>

                         <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"> </i>
                        <p className="services__modal-info">
                            Web page development
                        </p>
                       
                    </li>

                         <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           I create UX element interactions
                        </p>
                        
                    </li>

                       <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"> </i>
                        <p className="services__modal-info">
                           I position your company brand
                        </p>
                     
                    </li>

                       <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"> </i>
                        <p className="services__modal-info">
                           Design and mockups of products for companies
                        </p>
                       
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div className="services__content">
        <i className='uil uil-edit services__icon'></i>
        <h3 className="services__title">Backend  <br/> Developer</h3>

        <span className="services__button" onClick={()=> ToggleTap(3)}>View More
        <i className="uil uil-arrow-right services__button-icon"></i></span>

        <div className={ToggleState === 3 ? "services__modal active-modal": "services__modal"}>
            <div className="services__modal-content">
                <i  onClick={()=> ToggleTap(0) }className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Backend Developer</h3>
                <p className="services__modal-description">Services with  1 years of experience.
                Providing quality work to clients and companies</p>

                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                        <li className="uil uil-check-circle services__modal-icon"></li>
                        <p className="services__modal-info">
                           I develop the user interface
                        </p>
                        
                    </li>

                         <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"> </i>
                        <p className="services__modal-info">
                            Web page development
                        </p>
                       
                    </li>

                         <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           I create UX element interactions
                        </p>
                        
                    </li>

                       <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">
                           I position your company brand
                        </p>
                        
                    </li>

                       <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"> </i>
                        <p className="services__modal-info">
                           Design and mockups of products for companies
                        </p>
                       
                    </li>
                </ul>
            </div>
        </div>
    </div> 
    </div>
   
   
    </section>
  )
}

export default Services

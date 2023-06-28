import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (

    <footer className="footer">
<div className="footer__container container">
    <h1 className="footer__title">Saroj</h1>
    <ul className="footer__list">
        <li>
            <a href="" className="footer__link">About</a>
        </li>

        <li>
            <a href="" className="footer__link">Projects</a>
        </li>
        <li>
            <a href="" className="footer__link">Testimonials</a>
            </li>
    </ul>

    <div className="footer__social-link">
              < a href='https://dribbble.com' className='home__social-icon' target="_blank">
            <i class="uil uil-instagram"></i>
        </a >

         < a href='https://dribbble.com' className='home__social-icon' target="_blank">
            <i class="bx bxl-facebook"></i>
        </a >

         < a href='https://dribbble.com' className='home__social-icon' target="_blank">
            <i class="uil uil-dribbble"></i>
        </a >
    </div>

    <span className="footer__copy">
        &#169; coder-Saroj. All rights reserved
    </span>
</div>

    </footer>
  )
}

export default Footer

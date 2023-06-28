import React, { useEffect, useState } from 'react';
import './Scroll.css';

const ScrollUp = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth',
    });
  };

  if (scrollPosition <= 0) {
    return null; // Render nothing when scroll position is less than or equal to 0
  }

  return (
    <a href="#" className="scrollUp" onClick={scrollToTop}>
      <i className="uil uil-arrow-up scrollUp__icon"></i>
    </a>
  );
};

export default ScrollUp;

import React, { useState, useRef } from 'react';
// import './Carousel.css'; // Import your CSS file

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const wiperTrackRef = useRef(null);
  const wipes = useRef([]);

  const wipeWidth = wipes.current.length > 0 ? wipes.current[0].getBoundingClientRect().width : 0;

  const arrowsBehaviour = () => {
    // Implement your arrow behavior logic here
  };

  const wipeSlide = (targetIndex) => {
    if (wiperTrackRef.current) {
      const wiperTrack = wiperTrackRef.current;
      wiperTrack.style.transform = `translateX(-${(wipeWidth + 24) * targetIndex}px)`;
      setActiveIndex(targetIndex);
      arrowsBehaviour();
    }
  };

  const handleNext = () => {
    if (activeIndex < wipes.current.length - 1) {
      wipeSlide(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      wipeSlide(activeIndex - 1);
    }
  };

  return (
    <div className="carousel">
      <div className="wiper">
        <button className="wiper-button wiper-button__right" onClick={handlePrev}>
          {/* Use an appropriate left arrow icon */}
          &lt;
        </button>
        <div className="wiper-wrapper">
          <ul className="wiper-track" ref={wiperTrackRef}>
            {/* Map through your slides and render them */}
            {/* Ensure to attach ref to each li element */}
          </ul>
        </div>
        <button className="wiper-button wiper-button__left" onClick={handleNext}>
          {/* Use an appropriate right arrow icon */}
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;

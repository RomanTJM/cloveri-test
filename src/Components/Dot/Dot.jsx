import React from "react";
import './Dot.css';

export const Dot = ({ number, activeSleder, sliders, setActiveSleder }) => {

  const goToSlide = (number) => {
    setActiveSleder(number % sliders.length);
  };

  return (
    <div
      className={`dot ${activeSleder === number ? "selected" : ""}`}
      onClick={() => goToSlide(number)}
    />
  );
}
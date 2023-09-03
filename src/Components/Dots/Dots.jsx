import React from 'react';
import { Dot } from '../Dot/Dot';
import './Dots.css'

export const Dots = ({ sliders, activeSleder, setActiveSleder }) => {

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < sliders.length; i++) {
      dots.push(<Dot
        key={`dot-${i}`}
        number={i}
        activeSleder={activeSleder}
        setActiveSleder={setActiveSleder}
        sliders={sliders}
      />
      );
    }

    return dots;
  };

  return <div className="dots">{renderDots()}</div>;
}

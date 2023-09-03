import React, { useEffect } from 'react';
import './ArrowButton.css'

export const ArrowButton = ({ sliders, activeSleder, setActiveSleder }) => {

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (activeSleder + direction < 0) {
            slideNumber = sliders.length - 1;
        } else {
            slideNumber = (activeSleder + direction) % sliders.length;
        }

        setActiveSleder(slideNumber);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            changeSlide(1);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [sliders.length, activeSleder]);

    return (
        <div className='arrow-button'>
            <button className='arrow-left' onClick={() => changeSlide(- 1)}></button>
            <button className='arrow-right' onClick={() => changeSlide(+ 1)}></button>
        </div>
    )
}
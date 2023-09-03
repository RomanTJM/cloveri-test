import React, { useState } from 'react';
import './Slider.css';
import { ArrowButton } from '../ArrowButton/ArrowButton';
import { Title } from '../Title/Title';
import { Text } from '../Text/Text';
import { Image } from '../Image/Image';
import { Button } from '../Button/Button';
import { Dots } from '../Dots/Dots';

export const Slider = ({ sliders }) => {
    const [activeSleder, setActiveSleder] = useState(0);

    return (
        <div className='slide-main'>
            {sliders.map((item, idx) => (
                <div key={item.id} className={`slide${idx === activeSleder ? 'active' : ''}`}>
                    <div className='slide-container'>
                        <div className='slide-container-left'>
                            <Title
                                title={item.title}
                            />
                            <Text
                                text={item.text}
                            />
                            <Button
                                url={item.url}
                            />
                            <Dots
                                sliders={sliders}
                                activeSleder={activeSleder}
                                setActiveSleder={setActiveSleder}
                            />
                        </div>
                        <div className='slide-container-right'>
                            <Image
                                image={item.image}
                            />
                        </div>
                    </div>
                    <ArrowButton
                        activeSleder={activeSleder}
                        setActiveSleder={setActiveSleder}
                        sliders={sliders}
                    />
                </div>
            )
            )}
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import './App.css';
import { LoadSlider } from './Api/Api';
import { Slider } from './Components/Slider/Slider';
import { Loader } from './Components/Loader/Loader';

function App() {
  const [sliders, setSliders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initSlider = async () => {
      const slider = await LoadSlider();
      setSliders(slider);
    };

    initSlider();
    setIsLoading(false)
  }, [])

  return (
    <div className="App">
      {isLoading ?
        <Loader />
        :
        <Slider
          sliders={sliders}
        />
      }
    </div>
  );
}

export default App;

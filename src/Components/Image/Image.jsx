import React from 'react';
import './Image.css';

export const Image = ( { image } ) => {
  return (
    <div>
        <img className='image' src={require(`../../Assets/Images/${image}.png`)} alt="img" />
    </div>
  );
}
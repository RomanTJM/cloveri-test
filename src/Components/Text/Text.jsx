import React from 'react';
import './Text.css';

export const Text = ( { text } ) => {
  return (
    <div>
        <h1 className='text'>{text}</h1>
    </div>
  );
}
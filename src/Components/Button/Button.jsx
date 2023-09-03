import React from 'react';
import './Button.css';

export const Button = ({ url }) => {
  return (
    <div>
      <button className='button' onClick={() => window.open(url)}>Текст кнопки</button>
    </div>
  );
}
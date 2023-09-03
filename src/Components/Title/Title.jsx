import React from 'react';
import './Title.css';

export const Title = ( { title } ) => {
  return (
    <div>
        <h1 className='title'>{title}</h1>
    </div>
  )
}

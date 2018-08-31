import React from 'react';

const GifList = ({ gifUrl }) => {
  return (
    <ul>
      <li>
        <img src={`${gifUrl}`} alt=""/>
      </li>
    </ul>
  )
}

export default GifList;

import React from 'react';

const Item = ({ imgSrc, title, text }) => (
  <div className="item">
    <img src={imgSrc} alt={title} />
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);

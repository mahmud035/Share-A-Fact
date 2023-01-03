import React from 'react';
import './FactCard.css';

const FactCard = ({ fact }) => {
  const {
    factText,
    category,
    source,
    likeCount,
    mindBlowingCount,
    dislikeCount,
  } = fact;

  return (
    <div>
      <h1>Fact Card</h1>
    </div>
  );
};

export default FactCard;

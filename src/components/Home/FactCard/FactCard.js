import React from 'react';
import './FactCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CategoryButtonSmall from '../CategoryButtonSmall/CategoryButtonSmall';

const FactCard = ({ fact }) => {
  const {
    _id,
    factText,
    category,
    source,
    likeCount,
    mindBlowingCount,
    dislikeCount,
  } = fact;

  return (
    <Card>
      <Card.Body>
        <div className="d-flex gap-3 ">
          <p className="mb-0">{factText}</p>
          <p className="mb-0">({source})</p>
        </div>
        <div>
          <CategoryButtonSmall
            key={_id}
            category={category}
          ></CategoryButtonSmall>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FactCard;

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
        <div className="d-flex gap-3 align-items-center">
          <div className="d-flex gap-3 ">
            <p className="mb-0">{factText}</p>
            <p className="mb-0">({source})</p>
          </div>
          <div className="w-100 d-flex justify-content-between align-items-center gap-3">
            <CategoryButtonSmall
              key={_id}
              category={category}
            ></CategoryButtonSmall>
            <div className="interaction-count-container d-flex gap-2 ">
              <p className="mb-0">
                👍 <strong>{likeCount}</strong>
              </p>
              <p className="mb-0">
                😍 <strong>{mindBlowingCount}</strong>
              </p>
              <p className="mb-0">
                ⛔ <strong>{dislikeCount}</strong>
              </p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FactCard;

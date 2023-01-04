import React from 'react';
import Card from 'react-bootstrap/Card';
import CategoryButtonSmall from '../CategoryButtonSmall/CategoryButtonSmall';
import './FactCard.css';

const FactCard = ({ fact, refetch }) => {
  const {
    _id,
    factText,
    category,
    source,
    likeCount,
    mindBlowingCount,
    dislikeCount,
  } = fact;

  const handleLikeCount = (id) => {
    const likeCountObj = { likeCount };

    fetch(`http://localhost:5000/facts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(likeCountObj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMindBlowingCount = (id) => {
    const mindBlowingCountObj = { mindBlowingCount };

    fetch(`http://localhost:5000/facts/mindBlowing/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mindBlowingCountObj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDislikeCount = (id) => {
    const dislikeCountObj = { dislikeCount };

    fetch(`http://localhost:5000/facts/dislikeCount/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dislikeCountObj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Card className="fact-card">
      <Card.Body>
        <div className="d-flex flex-column flex-lg-row gap-3 align-items-lg-center ">
          <div className="d-flex gap-3 ">
            <p className="mb-0">{factText}</p>
            <a
              className="source"
              href={source}
              target="_blank"
              rel="noreferrer"
            >
              (Source)
            </a>
          </div>
          <div className="w-100 d-flex flex-column justify-content-end align-items-end flex-lg-row justify-content-lg-between align-items-lg-center gap-3">
            <CategoryButtonSmall
              key={_id}
              category={category}
            ></CategoryButtonSmall>
            <div className="interaction-count-container d-flex gap-2 ">
              <p
                onClick={() => handleLikeCount(_id)}
                className="mb-0 rounded-pill"
              >
                <span className="emoji">👍</span> <strong>{likeCount}</strong>
              </p>
              <p
                onClick={() => handleMindBlowingCount(_id)}
                className="mb-0 rounded-pill"
              >
                <span className="emoji">😍</span>{' '}
                <strong>{mindBlowingCount}</strong>
              </p>
              <p
                onClick={() => handleDislikeCount(_id)}
                className="mb-0 rounded-pill"
              >
                <span className="emoji">⛔</span>{' '}
                <strong>{dislikeCount}</strong>
              </p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FactCard;

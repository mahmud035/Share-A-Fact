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

    fetch(`https://share-a-fact-server.vercel.app/facts/${id}`, {
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
        console.error(error);
      });
  };

  const handleMindBlowingCount = (id) => {
    const mindBlowingCountObj = { mindBlowingCount };

    fetch(`https://share-a-fact-server.vercel.app/facts/mindBlowing/${id}`, {
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
        console.error(error);
      });
  };

  const handleDislikeCount = (id) => {
    const dislikeCountObj = { dislikeCount };

    fetch(`https://share-a-fact-server.vercel.app/facts/dislikeCount/${id}`, {
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
        console.error(error);
      });
  };

  return (
    <Card className="fact-card">
      <Card.Body>
        <div className="d-flex flex-column gap-3">
          <div>
            <span className="mb-0">{factText}</span>&nbsp;
            <a
              className="source"
              href={source}
              target="_blank"
              rel="noreferrer"
            >
              (Source)
            </a>
          </div>
          <div className=" d-flex flex-column justify-content-end align-items-end  gap-3">
            <CategoryButtonSmall
              key={_id}
              category={category}
            ></CategoryButtonSmall>
            <div className="interaction-count-container d-flex gap-2 ">
              {/* NOTE: Added `onKeyDown`, `role` and `tabIndex` for accessibility */}
              <p
                onClick={() => handleLikeCount(_id)}
                onKeyDown={(e) =>
                  e.key === 'Enter' ? handleLikeCount(_id) : null
                }
                role="button"
                tabIndex={0}
                className="mb-0 rounded-pill"
              >
                <span className="emoji">👍</span> <strong>{likeCount}</strong>
              </p>
              <p
                onClick={() => handleMindBlowingCount(_id)}
                onKeyDown={(e) =>
                  e.key === 'Enter' ? handleMindBlowingCount(_id) : null
                }
                role="button"
                tabIndex={0}
                className="mb-0 rounded-pill"
              >
                <span className="emoji">😍</span>{' '}
                <strong>{mindBlowingCount}</strong>
              </p>
              <p
                onClick={() => handleDislikeCount(_id)}
                onKeyDown={(e) =>
                  e.key === 'Enter' ? handleDislikeCount(_id) : null
                }
                role="button"
                tabIndex={0}
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

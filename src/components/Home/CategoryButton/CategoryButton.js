import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './CategoryButton.css';

const CategoryButton = ({ categoryObj }) => {
  const { category } = categoryObj;

  return (
    <div>
      <Link to={`/category/${category}`}>
        <Button
          className={`rounded-pill mb-3 border-0 outline-0 category-button ${
            category === 'ALL' ? 'all' : undefined
          } ${category === 'TECHNOLOGY' ? 'technology' : undefined} ${
            category === 'SCIENCE' ? 'science' : undefined
          } ${category === 'FINANCE' ? 'finance' : undefined} ${
            category === 'SOCIETY' ? 'society' : undefined
          } ${category === 'ENTERTAINMENT' ? 'entertainment' : undefined} ${
            category === 'HEALTH' ? 'health' : undefined
          } ${category === 'HISTORY' ? 'history' : undefined} ${
            category === 'NEWS' ? 'news' : undefined
          }`}
        >
          {category}
        </Button>
      </Link>
    </div>
  );
};

export default CategoryButton;

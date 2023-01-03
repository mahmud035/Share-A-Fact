import React from 'react';
import './CategoryButtonSmall.css';
import Button from 'react-bootstrap/Button';

const CategoryButtonSmall = ({ category }) => {
  return (
    <Button
      className={`rounded-pill mb-3 border-0 outline-0 category-button btn-small ${
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
  );
};

export default CategoryButtonSmall;

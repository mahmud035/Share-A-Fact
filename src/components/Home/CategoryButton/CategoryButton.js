import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import './CategoryButton.css';

const CategoryButton = ({ categoryObj }) => {
  const { category } = categoryObj;
  const navigate = useNavigate();

  return (
    <div>
      <Link to={`/category/${category}`} className="text-decoration-none">
        <Button
          className={`rounded-pill mb-3 border-0 outline-0 category-button ${
            category === 'ALL' ? 'hide' : undefined
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
          {category !== 'ALL' && `${category}`}
        </Button>
      </Link>

      {/* If the category is ALL, then it will Navigate to the Home Route ('/'). Otherwise, it will not
          render the button. */}

      {category === 'ALL' && (
        <div>
          <Button
            onClick={() => navigate('/')}
            className={`rounded-pill mb-3 border-0 outline-0 category-button ${
              category === 'ALL' ? 'all' : undefined
            }`}
          >
            {category}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CategoryButton;

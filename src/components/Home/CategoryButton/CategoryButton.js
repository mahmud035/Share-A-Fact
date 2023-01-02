import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './CategoryButton.css';

const CategoryButton = ({ category }) => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="rounded-pill mb-3">{category?.category}</Button>
      </ButtonGroup>
    </div>
  );
};

export default CategoryButton;

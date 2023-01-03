import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CategoryFactCard.css';

const CategoryFactCard = () => {
  const categoryFacts = useLoaderData();
  console.table(categoryFacts);

  return (
    <div>
      <h1 className="text-white">Hello</h1>
    </div>
  );
};

export default CategoryFactCard;

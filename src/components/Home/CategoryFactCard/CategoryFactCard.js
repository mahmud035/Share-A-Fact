import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../Shared/Loading/Loading';
import FactCard from '../FactCard/FactCard';
import './CategoryFactCard.css';

const CategoryFactCard = () => {
  const { categoryName } = useParams();
  console.log(categoryName);

  const url = `http://localhost:5000/categories/${categoryName}`;

  const {
    isLoading,
    isError,
    data: categoryFacts = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ['categories', categoryName],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    return Swal.fire({
      title: 'Error!',
      text: { error },
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  }

  console.table(categoryFacts);

  return (
    <div>
      <h1 className="text-white">Hello</h1>

      <div className="fact-card-container">
        {categoryFacts.map((fact, index) => (
          <FactCard key={index} fact={fact} refetch={refetch}></FactCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryFactCard;

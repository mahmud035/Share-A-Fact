import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../Shared/Loading/Loading';
import FactCard from '../FactCard/FactCard';
import './CategoryFactCard.css';

const CategoryFactCard = () => {
  const { categoryName } = useParams();

  const url = `https://share-a-fact-server.vercel.app/categories/${categoryName}`;

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

  return (
    <div>
      <div className="fact-card-container">
        {categoryFacts.map((fact, index) => (
          <FactCard key={index} fact={fact} refetch={refetch}></FactCard>
        ))}
      </div>

      <p className="fact-card-no-info">
        There are {categoryFacts.length}&nbsp;
        {categoryFacts.length <= 1 ? 'fact' : 'facts'} in the database. Add your
        own!
      </p>
    </div>
  );
};

export default CategoryFactCard;

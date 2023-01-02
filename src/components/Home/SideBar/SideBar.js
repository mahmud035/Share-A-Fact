import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import CategoryButton from '../CategoryButton/CategoryButton';
import './SideBar.css';

const SideBar = () => {
  const url = 'http://localhost:5000/categories';

  const {
    isLoading,
    isError,
    data: categories = [],
    error,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await fetch(url);
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }

  // console.log(categories);

  return (
    <div>
      {categories.map((categoryObj, index) => (
        <CategoryButton categoryObj={categoryObj} key={index}></CategoryButton>
      ))}
    </div>
  );
};

export default SideBar;

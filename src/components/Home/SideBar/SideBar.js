import React from 'react';
import './SideBar.css';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

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

  console.log(categories);

  return (
    <div>
      <h1>Side Bar: {categories.length}</h1>
    </div>
  );
};

export default SideBar;

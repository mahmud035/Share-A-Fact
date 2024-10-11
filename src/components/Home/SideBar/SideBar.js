import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import CategoryButton from '../CategoryButton/CategoryButton';

const SideBar = () => {
  const url = 'https://share-a-fact-server.vercel.app/categories';

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

  return (
    <div>
      {categories.map((categoryObj) => (
        <CategoryButton
          key={categoryObj.category}
          categoryObj={categoryObj}
        ></CategoryButton>
      ))}
    </div>
  );
};

export default SideBar;

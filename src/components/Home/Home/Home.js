import { useQuery } from '@tanstack/react-query';
import React from 'react';
import './Home.css';
import Loading from '../../Shared/Loading/Loading';
import Swal from 'sweetalert2';
import FactCard from '../FactCard/FactCard';

const Home = () => {
  const url = 'http://localhost:5000/facts';

  const {
    isLoading,
    isError,
    data: facts = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ['facts'],
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

  console.log(facts);

  return (
    <div className="">
      <div className="fact-card-container">
        {facts.map((fact, index) => (
          <FactCard key={index} fact={fact}></FactCard>
        ))}
      </div>
    </div>
  );
};

export default Home;

import { useQuery } from '@tanstack/react-query';
import React, { createContext } from 'react';
import Swal from 'sweetalert2';
import Loading from '../../components/Shared/Loading/Loading';

export const FactContext = createContext();

const FactProvider = ({ children }) => {
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

  const value = { facts, refetch };

  return <FactContext.Provider value={value}>{children}</FactContext.Provider>;
};

export default FactProvider;

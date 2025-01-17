import { useQuery } from '@tanstack/react-query';
import React, { createContext, useMemo } from 'react';
import Swal from 'sweetalert2';
import Loading from '../../components/Shared/Loading/Loading';

export const FactContext = createContext();

const FactProvider = ({ children }) => {
  const url = 'https://share-a-fact-server.vercel.app/facts';

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

  const value = useMemo(() => ({ facts, refetch }), [facts, refetch]);

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

  return <FactContext.Provider value={value}>{children}</FactContext.Provider>;
};

export default FactProvider;

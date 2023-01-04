import React, { createContext } from 'react';

export const FactContext = createContext();

const FactProvider = ({ children }) => {
  const value = { test: 'test' };
  return <FactContext.Provider value={value}>{children}</FactContext.Provider>;
};

export default FactProvider;

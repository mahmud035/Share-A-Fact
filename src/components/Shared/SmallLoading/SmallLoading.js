import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

const Loading = () => {
  return (
    <CirclesWithBar
      height="30"
      width="30"
      color="#38D4C6"
      wrapperStyle={{}}
      wrapperClass="d-flex justify-content-center align-items-center "
      visible={true}
      ariaLabel="circles-with-bar-loading"
    />
  );
};

export default Loading;

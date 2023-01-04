import React, { useContext } from 'react';
import { FactContext } from '../../../context/FactProvider/FactProvider';
import FactCard from '../FactCard/FactCard';
import './Home.css';

const Home = () => {
  const { facts, refetch } = useContext(FactContext);

  return (
    <div>
      <div className="fact-card-container">
        {facts.map((fact, index) => (
          <FactCard key={index} fact={fact} refetch={refetch}></FactCard>
        ))}
      </div>
    </div>
  );
};

export default Home;

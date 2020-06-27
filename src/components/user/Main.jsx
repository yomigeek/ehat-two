import React from 'react';
import Header from '../shared/Header';
import Features from '../Features'

const Main = () => {
  return (
    <>
      <Header title="Comparison Tool - Dashboard" icon={<i className="las la-chalkboard"></i>} />
      <Features />
    </>
  );
};

export default Main;

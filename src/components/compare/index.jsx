import React from 'react';
import CompareForm from './CompareForm';
import Header from '../shared/Header'

const CompareBoard = () => {
  return (
    <>
      <Header title="Start Comparison" icon={<i className="las la-balance-scale-right"></i>} />
      <div className="">
        <div className="container-fluid">
        <CompareForm />
        </div>
      </div>
    </>
  );
};

export default CompareBoard;

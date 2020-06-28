import React from 'react';
import Header from '../shared/Header';
import ResultContent from './ResultContent';
import ResultCompareInfo from './ResultCompareInfo';

const ResultPage = () => {
  return (
    <>
      <Header title="Comparison Result" icon={<i className="las la-poll"></i>}/>
      <section className="blog-area padding-top-100px padding-bottom-70px">
        <div className="container">
          <div className="row">
            <ResultContent />
            <ResultCompareInfo />
          </div>
        </div>
      </section>
    </>
  );
};

export default ResultPage;

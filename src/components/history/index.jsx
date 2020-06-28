import React from 'react';
import Header from '../shared/Header';
import HistoryList from './HistoryList';

const History = () => {
  return (
    <>
      <Header title="Comparison Sessions List" icon={<i classNameName='las la-list'></i>} />
      <div classNameNameNamee="container-fluid row">
        <div classNameName="job-content">
        <br />
            <HistoryList title="Yomi and Tolani" percent="60"/>
            <HistoryList title="Arnild Heart and Cole" percent="20"/>
            <HistoryList title="Oz and Walter" percent="5"/>

        </div>
      </div>
    </>
  );
};

export default History;

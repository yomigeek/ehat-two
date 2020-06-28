import React from 'react';

const HistoryList = ({title, percent}) => {
  return (
    <>
      <div className="job-card job-card-layout">
        <div className="job-card-details d-flex align-items-center justify-content-between">
          <div className="card-head d-flex align-items-center">
            <div className="company-title-box">
              <h4 className="card-title mb-1">
                <a href="employer-details.html">{title}</a>{' '}
              </h4>
              <p className="card-sub">
                <span className="mr-2">
                  {percent} <i className="las la-percent"></i> similarities
                </span>
              </p>
            </div>
          </div>
          <div className="btn-box">
            <a href="/compare/result" className="theme-btn">
              See details
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryList;

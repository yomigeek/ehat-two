import React from 'react';

const ResultCompareInfo = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="sidebar section-bg radius-round p-4">
          <div className="sidebar-widget">
            <h3 className="widget-title">Students Details:</h3>
          </div>
          <div className="sidebar-widget">
            <p style={{fontSize: 13}}>First Student: "Tayo"</p>
            <br />
            <p style={{fontSize: 13}}>Second Student: "Tolani"</p>
            <br />
            <button className="theme-btn mt-3 border-0" type="button">
              Re-run Comparison
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultCompareInfo;

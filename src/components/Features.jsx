import React from 'react';

const Features = () => {
  return (
    <section className="hiw-area text-center section-bg padding-top-100px padding-bottom-85px">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* <div className="section-heading">
              <h2 className="sec__title">How Zobstar Works for You?</h2>
              <p className="sec__desc">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit{' '}
                <br />facere possimus, omnis voluptas assumenda est, omnis</p>
              </div> */}
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6 column-td-6">
            <div className="icon-box">
              <div className="icon-element">
                <i className="la la-search-plus"></i>
                {/* <span className="info-number">1</span> */}
              </div>
              <div className="info-content mt-4">
                <h4 className="info__title mb-3">Start A Comparison</h4>
                <p className="info__desc">Compare your students submission</p>
                <br />
                <div className="btn-box">
                  <a href="/compare" className="theme-btn">
                    Start
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 column-td-6">
            <div className="icon-box">
              <div className="icon-element">
                <i className="las la-history"></i>{' '}
              </div>
              <div className="info-content mt-4">
                <h4 className="info__title mb-3">Sessions History</h4>
                <p className="info__desc">
                  View all your previous comparison sessions
                </p>
                <br />
                <div className="btn-box">
                  <a href="/history" className="theme-btn">
                    View All
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

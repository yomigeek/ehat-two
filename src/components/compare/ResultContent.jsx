import React from 'react';

const ResultContent = () => {
  return (
    <>
      <div className="col-lg-8" style={{backgroundColor: '#fff', padding: 20}}>
        <div className="blog-single-card">
          <div className="card-content">
            <p className="card-text mt-4 mb-3">
              <div class="icon-box">
                <div class="icon-element">
                  <span>15%</span>
                  {/* <span class="info-number">1</span> */}
                </div>
              </div>
            </p>
            <b>Similar Lines:</b>

            <div className="blockquote-item margin-top-30px">
              <blockquote className="mb-0">
                <i className="fa fa-quote-right blockquote__icon"></i>
                <p className="blockquote__text">
                  Creativity is just connecting things. When you ask creative
                  people how they did something,
                </p>
              </blockquote>
              <div className="tag-items mt-4">
                <ul className="tag-list">
                  <li>
                    <a href="#" className="radius-rounded">
                      <span>Line 30(Student A) / Line 40 (Student B)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="blockquote-item margin-top-30px">
              <blockquote className="mb-0">
                <i className="fa fa-quote-right blockquote__icon"></i>
                <p className="blockquote__text">
                  It seemed obvious to them after a while. That's because they
                  were able to connect experiences they've had and synthesize
                  new things.
                </p>
              </blockquote>
              <div className="tag-items mt-4">
                <ul className="tag-list">
                  <li>
                    <a href="#" className="radius-rounded">
                      <span>Line 201(Student A) / Line 120 (Student B)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultContent;

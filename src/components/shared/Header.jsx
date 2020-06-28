import React from 'react';

const Header = ({title, icon}) => {
  return (
    <>
      <section className="breadcrumb-area">
        <div className="breadcrumb-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content d-flex flex-wrap justify-content-between align-items-center">
                  <div className="section-heading">
                    <h2 className="sec__title mb-0">{icon}{' '}{title}</h2>
                  </div>
                  <ul className="list-items d-flex align-items-center">
                  <li className="">
                      <a href="/main">Home .</a>
                    </li>
                    <li className="">
                      <a href="/compare">Start .</a>
                    </li>
                    <li className=""><a href="/history">History .</a></li>
                    <li><a href="/login">Log Out</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

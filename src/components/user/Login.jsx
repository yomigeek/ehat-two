import React from 'react';
import Header from '../shared/Header';
import Features from '../Features';

const Login = () => {
  return (
    <section className="form-shared padding-top-100px padding-bottom-100px">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="user-action-form">
              <div className="tab-shared tab-shared-3">
                <ul
                  className="nav nav-tabs justify-content-center"
                  id="myTab"
                  role="tablist"
                ></ul>
              </div>
              <div className="tab-content" id="myTabContent">
                <div>
                  <div className="billing-form-item mb-0">
                    <div className="billing-title-wrap border-bottom-0 text-center">
                      <h3 className="widget-title font-size-28 pb-2">
                        Login to Your Account
                      </h3>
                    </div>
                    <div className="billing-content">
                      <div className="contact-form-action">
                        <form method="get" action="/main">
                          <div className="row">
                            <div className="col-lg-4 column-td-6">
                              <div className="form-group">
                                <button
                                  className="theme-btn bg-7 border-0 w-100"
                                  type="submit"
                                >
                                  <i className="fa fa-google mr-2"></i> Google
                                </button>
                              </div>
                            </div>
                            <div className="col-lg-4 column-td-6">
                              <div className="form-group">
                                <button
                                  className="theme-btn bg-5 border-0 w-100"
                                  type="submit"
                                >
                                  <i className="fa fa-facebook-f mr-2"></i>{' '}
                                  Facebook
                                </button>
                              </div>
                            </div>
                            <div className="col-lg-4 column-td-6">
                              <div className="form-group">
                                <button
                                  className="theme-btn bg-6 border-0 w-100"
                                  type="submit"
                                >
                                  <i className="fa fa-twitter mr-2"></i> Twitter
                                </button>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="account-assist mt-4 mb-4 text-center">
                                <p className="account__desc">or</p>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="input-box">
                                <label className="label-text">
                                  Email Address
                                </label>
                                <div className="form-group">
                                  <i className="la la-user form-icon"></i>
                                  <input
                                    className="form-control"
                                    type="email"
                                    name="text"
                                    placeholder="Your email address"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="input-box">
                                <label className="label-text">Password</label>
                                <div className="form-group">
                                  <i className="la la-lock form-icon"></i>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="text"
                                    placeholder="Your password"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-group">
                                <div className="custom-checkbox mr-0 d-flex align-items-center justify-content-between">
                                  <div>
                                    <input type="checkbox" id="chb1" />
                                    <label for="chb1">Keep me logged in</label>
                                  </div>
                                  <div>
                                    <a href="#" className="color-text">
                                      Forgot password?
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="btn-box margin-top-20px margin-bottom-10px">
                                <button
                                  className="theme-btn border-0"
                                  type="submit"
                                >
                                  Login Account
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

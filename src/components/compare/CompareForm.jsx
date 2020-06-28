import React from 'react';
import FileCoverImg from '../../assets/images/cover-img.jpg';

const CompareForm = () => {
  return (
    <div className="">
      <div className="col-lg-12"></div>
      <div className="col-lg-12">
        <div className="edit-profile-wrap">
          <div className="user-form-action">
            <div className="billing-form-item">
              <div className="billing-title-wrap">
                <h3 className="widget-title pb-0">Comparison Tool</h3>
                <div className="title-shape margin-top-10px"></div>
              </div>
              <div className="billing-content">
                <div className="contact-form-action">
                  <form method="post">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input-box">
                          <label className="label-text">
                            <b>First Student</b>
                          </label>
                          <div className="form-group">
                            <span className="la la-user form-icon"></span>
                            <input
                              className="form-control"
                              type="text"
                              name="text"
                              placeholder="Student name"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="row mt-5">
                            <div className="col-lg-12">
                              <div className="user-profile-action-wrap mb-5">
                                <div className="user-profile-action d-flex align-items-center">
                                  <div className="user-pro-img section-bg border radius-round">
                                    <img
                                      src={FileCoverImg}
                                      alt="user-image"
                                      className="img-fluid radius-round"
                                    />
                                  </div>
                                  <div className="upload-btn-box cover-photo-wrap">
                                    <form
                                      action="#"
                                      method="post"
                                      enctype="multipart/form-data"
                                    >
                                      <input
                                        type="file"
                                        name="files[]"
                                        id="filer_input-2"
                                        multiple="multiple"
                                      />
                                      <p>Max file size is 5MB</p>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-box">
                          <label className="label-text">
                            <b>Second Student </b>
                          </label>
                          <div className="form-group">
                            <span className="la la-user form-icon"></span>
                            <input
                              className="form-control"
                              type="text"
                              name="text"
                              placeholder="Student name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="row mt-5">
                            <div className="col-lg-12">
                              <div className="user-profile-action-wrap mb-5">
                                <div className="user-profile-action d-flex align-items-center">
                                  <div className="user-pro-img section-bg border radius-round">
                                    <img
                                      src={FileCoverImg}
                                      alt="user-image"
                                      className="img-fluid radius-round"
                                    />
                                  </div>
                                  <div className="upload-btn-box cover-photo-wrap">
                                    <form
                                      action="#"
                                      method="post"
                                      enctype="multipart/form-data"
                                    >
                                      <input
                                        type="file"
                                        name="files[]"
                                        id="filer_input-2"
                                        multiple="multiple"
                                      />
                                      <p>Max file size is 5MB</p>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="/compare/result">
                      <button className="theme-btn mt-3 border-0" type="button">
                        Start Comparing
                      </button>
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareForm;

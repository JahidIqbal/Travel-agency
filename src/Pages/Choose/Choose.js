import React from "react";
import "./Choose.css";

const Choose = () => {
  return (
    <div className="container mt-4 ">
      <div className="col-md-12 ">
        <h1 className=" fw-bolder text-uppercase w-100 mt-5 text-center underline mb-2">
          Why Choose Us
        </h1>
        <br />
        <div data-aos="fade-down-right" className="row ">
          <div className="col-xl-3 col-lg-6">
            <div className="card l-bg-cherry">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-hotel"></i>
                </div>
                <div className="mb-4">
                  <h5 className="card-title mb-0">Handpicked Hotels</h5>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  We Provide Hand Picked Hotels and give the Best services
                  according to customer requirements.Customer's always happy
                  with this.
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6">
            <div className="card l-bg-blue-dark">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="far fa-thumbs-up"></i>
                </div>
                <div className="mb-4">
                  <h5 className="card-title mb-0">Best Price Guarantee</h5>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  We Provide Best Price with Guarantee so that customer can get
                  their tour package in cheap prices.
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6">
            <div className="card l-bg-green-dark">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-ticket-alt"></i>
                </div>
                <div className="mb-4">
                  <h5 className="card-title mb-0">Ticket Purchase</h5>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  Customers get their tickets in cheap prices,which made them
                  buy ticket again! We are happy to give them.
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6">
            <div className="card l-bg-orange-dark">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-plane"></i>
                </div>
                <div className="mb-4">
                  <h5 className="card-title mb-0">Transport Facilities</h5>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  Transport services like car,aeroplane,boat,bus etc provided to
                  customer for comfortable journey!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;

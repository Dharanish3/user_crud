import React from "react";

function Cards({ name, email, user, city, Number, website }) {
  return (
    <>
      <div className="col-lg-4 mb-5">
        <div className="card h-100 shadow border-0">
          <div className="card-body p-4" style={{ backgroundColor: "wheat" }}>
            <div className="badge bg-dark bg-gradient rounded-pill mb-2">
              {city}
            </div>
            <a className="text-decoration-none link-dark stretched-link">
              <h5 className="card-title mb-3">{name}</h5>
            </a>
            <a className="text-decoration-none link-dark stretched-link">
              <h6 className="card-title mb-3">{user}</h6>
            </a>
            <p className="card-text mb-0">
              <strong>Email: </strong>
              {email}
            </p>
          </div>
          <br />
          <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
            <div className="d-flex align-items-end justify-content-between">
              <div className="d-flex align-items-center">
                <div className="small">
                  <div className="fw-bold">{website}</div>
                  <div className="text-muted">{number}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

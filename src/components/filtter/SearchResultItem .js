import React from "react";
import { Link } from "react-router-dom";

export default function SearchResultItem({ reservation }) {
  const { name, description, image, price, type, _id } = reservation;
  console.log(_id)
  return (
    <div
      className="card overflow-hidden mx-auto rounded-lg mb-3"
      style={{ maxWidth: 540 }}
    >
      <Link
        to={`/reservations/${_id}`}
        className="row no-gutters p-0 text-decoration-none"
      >
        <div className="col-md-6">
          <img
            width="100%"
            height="100%"
            src={`${process.env.REACT_APP_BACKEND_URL}/reservation/${_id}/image`}
            alt="apartment"
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <div>
                Type: <strong>{type}</strong>
              </div>
              <div className="mt-2">
                Price: <strong>${price} EGP</strong>/night
              </div>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

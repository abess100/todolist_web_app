import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import moment from "moment";

export default function CartToto({ data }) {
  return (
    <>
      {data && (
        <>
          {data.map((p, index) => (
            <Link to={`/task/${p._id}`} key={index}>
              <div className="Cart" >
                <div className="conteneurs">
                  <div className="text">
                    <h2>{p.title}</h2>
                    <p>{p.description}</p>
                  </div>
                  <img src={`http://localhost:1000/` + p.file} alt="" />
                </div>

                <div className="propieety">
                  <p>propieety : {p.priority} </p>
                  <p>statut : {p.status}</p>
                  <p>date de creation : {moment(p.createdAt).format('DD/MM/YYYY')}</p>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}
    </>
  );
}

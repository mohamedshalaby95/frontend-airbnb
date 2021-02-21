import { PinDropSharp } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar";
import SearchResultItem from "./SearchResultItem ";
import '../filtter/filtter.css'


export default function Filtter(props) {
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    axios
      .post(`${process.env.url}/reservation/type`, {
        type: props.match.params.type,
       
      })
     
      .then((data) => {
        setReservations(data.data);
        
      });
  }, []);

  return (
    <div>
      <Navbar lightBg />
      <div className="container searchFil">
      <header>
          <div className="mt-3">
            <h4 className="">
              Search result for: <strong>{props.match.params.type}</strong>
            </h4>
            <p>
              <strong>{"#"}</strong> Stays
            </p>
            <p className=''>Review COVID-19 travel restrictions before you book...</p>
          </div>
        </header>
        <hr className="mt-n1" />

        <section className="mt-4 row justify-content-between">
          {reservations.length > 0 ? (
            reservations.map((reservation) => (
              <div className="col-12 col-lg-6">
                <SearchResultItem reservation={reservation} />
              </div>
            ))
          ) : (
            <div className='errorr'>
              <h1><i className='fas mr-3'>&#xf714;</i>No Result Found...<i className='fas ml-2'>&#xf714;</i></h1>
            </div>
          )}
        </section>
      </div> 
    </div>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MyFancyComponent from "../map/map";
import Navbar from "../navbar";
import SearchResultItem from "./search-result-item";
import './searchResult.css';
import '../filtter/filtter.css';

export default function SearchResult() {
  const [reservations, setReservations] = useState([]);
  const location = useLocation();
  const query = location.search.split(/\?|&|=/).filter(Boolean);
  
  console.log(location)

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-light-gray");

    return () => {
      body.classList.remove("bg-light-gray");
    };
  }, []);

  useEffect(() => {
    axios
      .post(`${process.env.url}/reservation`, {
        location: query[1],
        startdate:query[3],
        enddata:query[5],
        nOfGuests: query[7],
      
        
        
      })
      
    
     
      .then((data) => {
      
        setReservations(data.data);
        
      });
  }, [  ]);
  console.log("this from search result send query"+query[1])

  return (
    <div>
      <div>
        <Navbar  lightBg />
      </div>
      
      <div className="row">
        <div className="leftside col-md-12 col-lg-8">
        <div className=" mt-3">
        <header>
          <div className="ml-5">
            <div className="d-flex">
              <p>
                <strong>{"#"}</strong> Stays
              </p>
            </div>
            <h1>
              <strong>Stays in <span> {query[1]} </span>Governorate</strong>
            </h1>
            <p className=''>Review COVID-19 travel restrictions before you book...</p>
          </div>
        </header>

        <hr className="mt-n1 ml-4 w-75" />
        <div className="row">
        {/*  */}
          <div className="side-stays col-12 col-xl-12 col-md-12">
          <section className="mt-4 row justify-content-between">
          {reservations.length > 0 ? (
            reservations.map((reservation) => (
              <div className="col-12 col-lg-12">
                <SearchResultItem reservation={reservation} />
              </div>
            ))
          ) : (
            <div className='errorr'>
              <h1><i className='fas mr-3'>&#xf714;</i>This Location Has No Data To Show...<i className='fas ml-2'>&#xf714;</i></h1>
            </div>
          )}
        </section>
          </div>

         

        </div>

       
      </div>
        </div>
        <div className="col-md-12 col-lg-4">
        <div className="side-map">
               <div className="w-100">
               <MyFancyComponent   
                   location={`${query[1]}`} />
               </div>
           
          </div>
        </div>
      </div>

   
    </div>
  );
}

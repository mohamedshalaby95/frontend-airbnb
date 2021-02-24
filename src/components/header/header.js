import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Navbar from "../navbar";

import SearchDate from '../search-date/search-date.js';
import '../search/search.css'

export default function Header() {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
 
  const history = useHistory();

  const [showSearch, setShowSearch] = useState(false);
    const [show,setShow] = useState(false);
    
    const [indate, setIndate] = useState('');
    const [endDate, setendDate] = useState('');
 

  function handleSearch(e) {
    e.preventDefault();

    if (!location) return;
  
    history.push(
      `/reservations?location=${location}${indate ? "&indate=" + indate : ""} ${endDate ? "&endData=" + endDate : ""}${guests ? "&gutests=" + guests : ""}`
    );
  }

  return (
    <div>
      <Navbar />

      <div className="container mt-5 d-flex align-items-center justify-content-center">
        <form
          onSubmit={handleSearch}
          className="mt-5 py-2 px-5 d-flex align-items-center justify-content-between bg-white rounded-pill shadow"
        >
          {/* Location */}
          <div className="form-group mb-0">
            <label for="location" className="mb-0 pt-1 font-weight-bold">
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="Where are you going?"
              className="form-control border-0 p-0 m-0"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="ml-4 mr-5 d-flex align-items-center justify-content-between ">
            
            <div className=" caption-search-inf" onClick={()=> setShowSearch( !showSearch)}>
              <div className="postion-relative">
                {showSearch && <SearchDate IsInit={true} setParentInitDate={setIndate}/>}
              </div>
              <label className="mb-1 pt-1 font-weight-bold">Check in</label>
              <br/>
              {/* <DayPickerInput onDayChange={day => console.log(day)} /> */}
              <input className="form-control border-0 p-0 m-0" type="text" placeholder="From" value={indate}  onChange={e => setIndate(SearchDate.selectionRange.startDate)}/>
            </div>
            <div className=" caption-search-inf " onClick={()=> setShow(!show)}>
              {show && <SearchDate  IsInit={false} setParentEndDate={setendDate}/>}
              <label className="mb-1 pt-1 font-weight-bold">Check out</label>       
              <br/>  
              <input className="form-control border-0 p-0 m-0" type="text" placeholder="To" value={endDate} onChange={e => setendDate(SearchDate.selectionRange.endDate)}/>
            </div>
            </div> 
          {/* Guests */}
          <div className="form-group mb-0">
            <label for="guests" className="mb-0 pt-1 font-weight-bold">
              Guests
            </label>
            <input
              id="guests"
              type="text"
              placeholder="Add guests"
              className="form-control border-0 p-0 m-0"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn bg-red rounded-circle d-flex align-items-center justify-content-center text-white p-3 mr-n4"
          >
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
}

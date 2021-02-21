import React, {useState} from 'react';
import '../search/search.css'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

function Search({setParentInitDate,setParentEndDate ,IsInit}) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key:"selection",
    };

    function handleSelect(ranges) {
        if(IsInit){

            setStartDate(ranges.selection.startDate)
            setParentInitDate(ranges.selection.startDate)
        }else{

            setEndDate(ranges.selection.endDate)
            setParentEndDate(ranges.selection.endDate)
        }
       // console.log(ranges.selection.endDate)
    }
    
    return (
        <div className='search'>
            <DateRangePicker ranges = {[selectionRange]} onChange ={handleSelect}/>
        </div>
    )
}

export default Search;
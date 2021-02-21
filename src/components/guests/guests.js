/* eslint-disable no-unused-vars */
import React from 'react'
import './guests.css'
import {Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


function Guests(adval,chval,infval) {

    return (
        <div className="guests justify-content-center p-4">
            <div className="guests__adults d-flex">
                <div className="guests__width">
                    <h3 className="h__style">Adults</h3>
                    <p className="p__style">Ages 13 or above</p>
                </div>
                    <p className="guests__width  m-2">
                        <Button className="remove"> <RemoveIcon/> </Button>
                        <span   value={adval} className="span__style"> 0 </span>
                        <Button className="add" > <AddIcon/> </Button>
                    </p>
            </div>
            <div className="guests__children d-flex">
                <div className="guests__width">
                <h3 className="h__style">Children</h3>
                <p className="p__style">Ages 2-12</p>
                </div>
                <p className="guests__width   m-2">
                    <Button className="remove"> <RemoveIcon/> </Button>
                    <span value={chval} className="span__style "> 0 </span>
                    <Button className="add" > <AddIcon/>  </Button>
                </p>
            </div>
            <div className="gustes__infants d-flex">
                <div className="guests__width">
                    <h3 className="h__style">Infants</h3>
                    <p className="p__style">Under 2</p>
                </div>
                <p className="guests__width  m-3">
                    <Button className="remove"> <RemoveIcon/> </Button>
                    <span value={infval} placeholder="0" className="span__style"> 0 </span>
                    <Button className="add" > <AddIcon/> </Button>
                </p>
            </div>
        </div>
    )};
export default Guests;
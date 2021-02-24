

import React, { useEffect, useState } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import axios from "axios";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={ {height: "1000px"}} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ lat, lng, allLocations, isMarkerShown, onMarkerClick }) => {
  return (
    <GoogleMap defaultZoom={8} center={{ lat, lng }}>
      {allLocations.map((location) => (
        <Marker
          position={{ lat: location.latitude, lng: location.longitude }}
          onClick={onMarkerClick}
        />
      ))}
    </GoogleMap>
  );
});



export default class MyFancyComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      lat: 0,
      lng: 0,
     
      isMarkerShown: false,
    };
  
   
  }

 

  componentDidMount() {
    this.delayedShowMarker();
    const axios = require("axios");
    const params = {
      access_key: "297b67d829c2337b2ea79235d44614b0",
      query: `${this.props.location}, Egypt`,
      
    };
    

    axios
      .get("http://api.positionstack.com/v1/forward", { params })
      .then((response) => {

       
          this.setState({result:response.data.data})
        if (response.data.data.length > 0)
       
          this.setState({
            lat: response.data.data[0].latitude,
            lng: response.data.data[0].longitude,
          });
          
      })
      .catch((error) => {
        console.log(error);
      });
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };
  

  render() {
   
    return (
      <MyMapComponent
        allLocations={this.state.result}
        lat={this.state.lat}
        lng={this.state.lng}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}








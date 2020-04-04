import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

/**
 * @description This component adds the charging location data to state from the Open
 * Charge Map API endpoint. It then iterates through said data in render, collecting the 
 * latitudes and longitudes, and adding Marker items to the Google Map
 */

class MapContainer extends Component{

  constructor(props) {
    super(props);

    this.state = {
        markers: []
    }
  }

  componentDidMount() {
    // add marker data to state
    fetch(this.props.mapData)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({ markers: data });
    });
  }

  render(){
    let markers = [];

    for (let i =0; i < this.state.markers.length; i += 1) {
      markers.push(<Marker key={i} id={i} position={{
        lat: this.state.markers[i].AddressInfo.Latitude,
        lng: this.state.markers[i].AddressInfo.Longitude
      }} />)
    }

     return(
        <div>
           <h1>Map</h1>
            <Map
            google={this.props.google}
            style={mapStyles}
            zoom={14}
            initialCenter={{ lat: 52.5200, lng: 13.4050}}>
            {markers}
         </Map>
        </div>
     );
  }
}

const mapStyles = {
   width: '80%',
 };

 export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);
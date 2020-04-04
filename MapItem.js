import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapItem extends Component{
  render(){
     return(
        <div>
           <h1>Map</h1>
            <Map
            google={this.props.google}
            style={mapStyles}
            zoom={8}
            initialCenter={{ lat: 52.5200, lng: 13.4050}}>
            <Marker position={{ lat: 52.5200, lng: 13.4050}} />
         </Map>
        </div>
     );
  }
}

const mapStyles = {
   width: '80%',
 };


export default GoogleApiWrapper({
   apiKey: 'AIzaSyB-zaRqQNjKX8lPyD1cMPI-7LyLvlESJIQ'
 })(MapItem);


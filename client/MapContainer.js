import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

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
    console.log('MapContainer this.state', this.state)
    console.log('MapContainer this.props', this.props)

    let markers = [];

    // console.log('displayMarkers data', this.props.markerData)

    for (let i =0; i < this.state.markers.length; i += 1) {

      // console.log('latitude',this.state.markers[i].AddressInfo.Longitude)
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
            zoom={8}
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
  apiKey: 'AIzaSyB-zaRqQNjKX8lPyD1cMPI-7LyLvlESJIQ'
})(MapContainer);
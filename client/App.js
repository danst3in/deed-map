import React, { Component } from 'react';
import MapContainer from './MapContainer.js';

// Berlin-focused API data from Open Charge Map
const url = 'https://api.openchargemap.io/v3/poi/?output=json&countrycode=DE&maxresults=10&compact=true&verbose=false&latitude=52.520008&longitude=13.404954&distance=10&distanceunit=KM';

class App extends Component{
   render(){
      return(
         <div>
            <h1>Hello World</h1>
            <MapContainer mapData={url}/>
         </div>
      );
   }
}
export default App;
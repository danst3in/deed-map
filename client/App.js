import React from 'react';
import MapContainer from './MapContainer.js';

// Berlin-focused API data from Open Charge Map
const url = 'https://api.openchargemap.io/v3/poi/?output=json&countrycode=DE&maxresults=50&compact=true&verbose=false&latitude=52.520008&longitude=13.404954&distance=10&distanceunit=KM';

const App = () => {
      return(
         <div>
            <h1>Electric Charging Locations</h1>
            <p>Below are some locations in Berlin to charge your electric car.</p>
            <MapContainer mapData={url}/>
         </div>
      );
}

export default App;
import React, { useState } from 'react';
import { Redirect } from "react-router-dom";


const Home = props => {

  const [routeGeolocation, setRouteGeolocation] = useState(false)
  let routeTo = ''

  routeTo = routeGeolocation&& <Redirect to={`/geolocation`} />;
  



  return(
    <div>
      Home

      <button
        onClick={() => setRouteGeolocation(true)}>
        test Geolocation
      </button>



      {routeTo}
    </div>
  )
}


export default Home
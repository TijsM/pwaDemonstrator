import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Geolocation from './components/Geolocation'

import "./App.css";

function App() {
  const routes = (
    <Switch>
      <Route path="/" component={Geolocation} />
    </Switch>
  );

  return (
    <div className="App">
      <header className="App-header">Learn React</header>
    </div>
  );
}

export default App;

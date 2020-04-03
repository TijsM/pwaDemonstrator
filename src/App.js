import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout";
import Home from "./components/Home";
import Geolocation from "./components/Geolocation";


import "./App.css";

function App() {
  let routes = (
    <BrowserRouter>
      <Switch>
        <Route path="/geolocation" component={Geolocation} />
        <Route path="/" component={Home} />

      </Switch>
    </BrowserRouter>
  );

  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;

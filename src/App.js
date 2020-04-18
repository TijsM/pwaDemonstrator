import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout";
import Home from "./components/Home/Home";
import Geolocation from "./components/Geolocation/Geolocation";
import WatchLocation from "./components/WatchLocation/Watchlocation";
import Visibility from "./components/Visibility/Visibility";
import Vibration from "./components/Vibration/Vibration";
import DrawWithGps from "./components/DrawWithGps/DrawWithGps";
import CaptureVideo from "./components/CaptureVideo/CaptureVideo";
import Clipboard from './components/Clipboard/Clipboard'
import Offline from './components/Offline/Offline'
import Notifications from './components/Notifications/Notifcations'
import "./App.scss";

function App() {



  let routes = (
    <BrowserRouter>
      <Switch>
        <Route path="/geolocation" component={Geolocation} />
        <Route path="/watchLocation" component={WatchLocation} />
        <Route path="/visibility" component={Visibility} />
        <Route path="/vibration" component={Vibration} />
        <Route path="/drawWithGps" component={DrawWithGps} />
        <Route path="/captureVideo" component={CaptureVideo} />
        <Route path="/clipboard" component={Clipboard} />
        <Route path="/offline" component={Offline} />
        <Route path="/notifications" component={Notifications} />
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

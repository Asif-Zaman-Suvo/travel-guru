import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Body from "./Components/Body/Body";
import Booking from "./Components/Booking/Booking";
import ViewCard from "./Components/Booking/Booking";
import LogIn from "./Components/LogIn/LogIn";
import NotFound from "./Components/NotFound/NotFound";



function App() {

  
  return (

    <Router>

      <Switch>

        <Route exact path='/'>
          <Body></Body>

        </Route>




        <Route path='/booking/:placeName'>
          <Booking></Booking>

        </Route>

        <Route path='/login'>
          <LogIn></LogIn>

        </Route>

        <Route path='*'>
          <NotFound></NotFound>
        </Route>

      </Switch>


    </Router>

  );
}

export default App;

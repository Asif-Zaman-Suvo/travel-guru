import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Body from "./Components/Body/Body";
import Booking from "./Components/Booking/Booking";
import HotelDetails from "./Components/HotelDetails/HotelDetails";

import LogIn from "./Components/LogIn/LogIn";
import NotFound from "./Components/NotFound/NotFound";


export const UserContext=createContext()

function App() {

  const [loggedInUser,setLoggedInUser]=useState({});

  
  return (

    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>

      {/* <p>Name:{loggedInUser.name}</p> */}

    <Router>

      <Switch>

        <Route exact path='/'>
          <Body></Body>

        </Route>




        <Route path='/booking/:placeName'>
          <Booking></Booking>

        </Route>

        

        <Route exact path='/hotelDetails'>
          <HotelDetails></HotelDetails>

        </Route>

        


        <Route path='*'>
          <NotFound></NotFound>
        </Route>

        
      </Switch>


    </Router>
    </UserContext.Provider>

  );
}

export default App;

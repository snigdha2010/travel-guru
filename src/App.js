import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import WithBackGround from './components/WithBackGround/WithBackGround';
import TravelPlaceDetails from './components/TravelPlaceDetails/TravelPlaceDetails';
import NotFound from './components/NotFound/NotFound';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SearchHotel from './components/SearchHotel/SearchHotel';


export const UserContext = createContext();
function App() {
const [logedIn, setLogedIn ] = useState({});
  return (
    
    <UserContext.Provider value = {[logedIn, setLogedIn ]} >
    
    <Router>
      <Switch>
        <Route exact path='/'>   
      <WithBackGround/>
        </Route>
        <Route path = '/travel/place/:placeId'>
          <TravelPlaceDetails/>
        </Route>
        <Route path = '/log-in'>
          <LogIn/>
        </Route>
        <PrivateRoute to ='/search-hotel'>
          <SearchHotel/>
        </PrivateRoute>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </Router>   
    </UserContext.Provider>
  );
}

export default App;

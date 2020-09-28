import React from 'react';
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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>   
      <WithBackGround/>
        </Route>
        <Route path = '/travel/place/:placeId'>
          <TravelPlaceDetails/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

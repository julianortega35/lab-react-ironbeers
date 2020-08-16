import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import BeerList from './components/BeerList';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetail from './components/BeerDetail';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (


   


    <div className="App">
       <HomePage />
   
      <Switch>

     
       <Route exact path='/beers' component={BeerList} />
       <Route exact path='/randombeer' component={RandomBeer} />
       <Route exact path='/newbeer' component={NewBeer} />
       <Route exact path='/beerdetail' component={BeerDetail} />
    
       </Switch> 
     
    </div>
  );
}

export default App;

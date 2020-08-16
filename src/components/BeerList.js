import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";


class BeerList extends Component {
    constructor(){
        super();
        this.state = {listOfBeers: []};
    }

getAllBeers = () => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/`)
    .then(responseFromApi =>{
        this.setState({
            listOfBeers: responseFromApi.data
        });
    });
};

componentDidMount(){
    this.getAllBeers();
}

    render() {
        return (
            
            <div>
          {this.state.listOfBeers.map(beer => {
            return (
       
              <div  className="beerListSize" key={beer._id}>
              <img  src={beer.image_url} alt=""/>

              <Link to={`/beers/${beer._id}`}>
                 <h3>{beer.name}</h3>
                     
                </Link>
                  <p>{beer.tagline}</p>
                  <p>{beer.description}</p>
                  <p>{beer.attenuation_level}</p>
             
                 
                  {/* <label> Created by: </label>
                  <p>{beer.contributed_by}</p> */}
             

                  
              </div>
              
            );
          })}
       
                
            </div>
        )
    }
}

export default BeerList;

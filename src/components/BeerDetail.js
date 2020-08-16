
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

 

class BeerDetail extends Component {
    constructor (props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.getSingleBeer();
    }

    getSingleBeer = () => {
        const {params} = this.props.match;
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/random${params.id}`)

        .then((responseFromAPi)=>{
            const theBeer = responseFromAPi.data;
            this.setState(theBeer);

        })
        .catch((err)=>{
            console.log(err)
        })
    }



    render() {
        return (
            <div>
                <h3>Beer details</h3>

                {this.state.beers && this.state.beers.map((theBeer, index) => {
            return (
              <div key={index}>
                {/* ... make each task's title a link that goes to the task details page */}
                <Link to={`/beer/${theBeer._id}`}>{theBeer.name}</Link>
              </div>
              );
          })}
        {/* <h2>{this.state.name}</h2>
      
        <p>{this.state.tagline}</p> */}
                
            </div>
        )
    }
}



export default BeerDetail;
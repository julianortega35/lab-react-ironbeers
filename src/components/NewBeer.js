import React, { Component } from 'react';
import axios from "axios";

class NewBeer extends Component {
    constructor (props){
        super(props);
        this.state = {
            name: "",
            tagline:"",
            description: "",
            attenuation_level: "",
        }
    };

        handleFormSubmit = event => {
            event.preventDefault ();
            const name = this.state.name;
            const tagline = this.state.tagline;
            const description = this.state.description;
            const attenuation_level = this.state.attenuation_level;
        axios
        .post("https://ih-beers-api2.herokuapp.com/beers/new", {name, tagline, description, attenuation_level})
        .then(()=>{
            this.props.getData();
            this.setState ({name: "", tagline:"", description: "", attenuation_level:""})
        })
        .catch(error => console.log(error));
    };

        handleChange = event => {
            const {name, value} = event.target;
            this.setState ({[name]: value})
        };



  
    render(){
        return (
            <div>
           <form onSubmit={this.handleFormSubmit}>
           <label>Name:</label>
           <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
           />
           
           <label>Tagline:</label>
           <input
            type="text"
            name="tagline"
            value={this.state.tagline}
            onChange={e => this.handleChange(e)}
           />

            <label>description:</label>
           <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
           />

           

            <label>Attenuation level:</label>
           <input
            type="number"
            name="attenuation_level"
            value={this.state.attenuation_level}
            onChange={e => this.handleChange(e)}
           />


            <input type="submit" value="Add new beer"/>
           </form>
           </div>
        );
    };


};

export default NewBeer;

import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
         

                <img className="homeImages" src="/images/cerveza1.jpeg" alt="beerlist"/>
                <br/>
                <Link to={"/beers"}>All beers</Link>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                <img className="homeImages" src="/images/randombeer.jpeg" alt="beerlist"/>
                <br/>
                <Link to={"/randombeer"}>Random beer</Link>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                <img className="homeImages" src="/images/newbeer.jpeg" alt="beerlist"/>
                <br/>

                <Link to={"/newbeer"}>New beer</Link>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>


        </div>
    )
}

export default HomePage;



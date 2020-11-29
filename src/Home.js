import React from 'react';
import "./Home.css";
import  Navbar from './Navbar';


export default function Home(props) {
    return (
        <div className="home">
            <div className="home__black">
                <div className="descption">
                    <h1>+100 game</h1>
                    <button>About US</button> 
                </div>
                <Navbar affiche={props.affiche}  />
            </div>
        </div>
    )
}

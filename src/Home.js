import React from 'react';
import "./Home.css";
import  Navbar from './Navbar';
import { useHistory } from "react-router-dom";


export default function Home(props) {

    let history = useHistory();

  function handleClick() {
    history.push("/about");
  }
    return (
        
        <div className="home">
            <div className="home__black">
                <div className="descption">
                    <h1>+100 game</h1>
                    <button onClick={handleClick}>About US</button> 
                </div>
                <Navbar affiche={props.affiche}  />
            </div>
        </div>
    )
}

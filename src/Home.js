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
                <div className="signButtonDiv">
                    <button className="signButton" onClick={() => history.push('/login')} >Sign in</button>
                    <button className="signButton" onClick={() => history.push('/signup')}>Sign up</button>
                </div>
                <div className="descption">
                    
                    <h1>+100 game</h1>
                    <button className="aboutButton" onClick={handleClick}>About US</button> 
                </div>
                <Navbar affiche={props.affiche}  setType={props.setType}  type={props.type}/>
            </div>
        </div>
    )
}

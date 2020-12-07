import React, { useState } from 'react';
import "./Navbar.css";

export default function Navbar(props) {
    
    return (

        <div className="navbar">
            <ul>
                <li onClick={()=>{
                    props.affiche(true)
                    props.setType('all');
                    }}>Tout</li>
                <li onClick={() => {
                    props.affiche(true)
                    props.setType('action');
                    }}>Action</li>
                <li onClick={() =>{ 
                        props.affiche(true)
                        props.setType('aventure')
                    }  }>Aventure </li>
            </ul>
        </div>
    )
}

import React from 'react';
import "./Navbar.css";

export default function Navbar(props) {
    console.log(props.affiche);
    return (
        <div className="navbar">
            <ul>
                <li onClick={()=>props.affiche(true)}>Tout</li>
                <li>Action</li>
                <li>Aventure</li>
            </ul>
        </div>
    )
}

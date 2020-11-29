import React from 'react';
import './Game.css';

export default function Game(props) {

    return (
        <div className="game">
            <div className="game__image">
                <img src={props.image} alt="ss" />
            </div>
            <div className="game__info">
                <div className="game__name">
                    <h2>{props.title}</h2>
                </div>
                <div className="game__rating">
                   <h3>rating: </h3> <p>{props.ratting}</p>
                </div>
                <div className="game__price">
                <h3>price: </h3><p>{props.price}$</p>
                </div>

                <div className="game__platform">
                <h3>platforme: </h3> <p>{props.platforme}</p> 
                </div>

                <div className="game__description">
                <h3>description: </h3> <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

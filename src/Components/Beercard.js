import React from 'react';
import './BeerCard.css';


export default function Beercard(props) {
  return (
    <div key={props.id} className="card">
        <section className="cardImage">
            <img src={props.image} alt="Beer Bottle"/>
        </section>
        <section className="cardInfo">
            <span className="cardTitle">{props.name}</span>      
            <span><strong>Type: </strong>{props.description}</span>
            <span><strong>Release Date: </strong>{props.date}</span>      
            <span><strong>Rating: </strong>{props.rating}</span>
            <span><strong>Price: </strong>${props.price}</span> 
            <button className="button" onClick={() => props.addToCart(props.id)}>ADD TO CART</button>   
        </section>
    </div>
  )
}
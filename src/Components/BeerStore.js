import { React, useState } from 'react';
import data from '../Data.js';
import Beercard from './Beercard.js';
import './BeerStore.css';

export default function BeerStore() {
  const [beerListState] = useState(data); 

  const beerList = beerListState.data.map((beer) => 
            <Beercard key={beer.id}
                id={beer.id} 
                name={beer.name} 
                description={beer.description} 
                date={beer.date} 
                image={beer.image} 
                rating={beer.rating}
                price={beer.price}  
            />
  );

  return (
    <div>
        <h2 align="center">Beer Store</h2>
        <div className="beerCardList">
            {beerList}
        </div>
    </div>
  )
}
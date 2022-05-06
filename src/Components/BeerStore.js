import { React, useState } from 'react';
import data from '../Data.js';
import Beercard from './Beercard.js';

export default function BeerStore() {
  const [beerListState, setBeerListState] = useState(data); 
  const [order, setOrder] = useState([{}]);

  const beerList = beerListState.data.map((beer) => 
        <div key={beer.id} className="beerCardList">
            <Beercard 
                id={beer.id} 
                name={beer.name} 
                description={beer.description} 
                date={beer.date} 
                image={beer.image} 
                rating={beer.rating} 
            />
        </div>
  );

  return (
    <div>
        <h2 align="center">Beer Store</h2>
        <ul>
            {beerList}
        </ul>
    </div>
  )
}
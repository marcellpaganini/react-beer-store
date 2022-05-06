import { React, useState } from 'react';
import data from '../Data.js';

export default function BeerStore() {
  const [state, setState] = useState(data); 
  const beerList = state.data.map((beer) => 
        <li key={beer.id}>{beer.name}</li>
  );

  return (
    <div>
        <h1>Beer Store</h1>
        <ul>
            {beerList}
        </ul>
    </div>
  )
}
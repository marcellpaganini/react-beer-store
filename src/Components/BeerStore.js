import { React, useState } from 'react';
import data from '../Data.js';
import Beercard from './Beercard.js';
import './BeerStore.css';


export default function BeerStore() {
  const [beerListState] = useState(data); 
  const [searchInput, setSearchInput] = useState("");
  const beerList = beerListState.data?.filter((beer) => {
    if (searchInput === "") {
      return beer;
    } else if (beer.name.toLowerCase().includes(searchInput.toLowerCase())) {
      return beer;
    } else { return null }
  }).map((beer) => 
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
    <>
      <h2 align="center">Beer Store</h2>
      <div className="search">
        <i className="fa fa-search icon"></i>
        <input placeholder="Search" type="text" onChange={(event) => {setSearchInput(event.target.value);}} />
      </div>
      <div className="display">
        <div className="beerCardList">
            {beerList}
        </div>
      </div>
    </>
  )
}
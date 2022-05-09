import { React, useState } from 'react';
import data from '../Data.js';
import Beercard from './Beercard.js';
import Cart from './Cart.js';
import './BeerStore.css';
import './Cart.css';


export default function BeerStore() {
  const [beerListState, setBeerListState] = useState(data); 
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

  const handleSort = (sortParm) => {
    switch (sortParm) {
      case "priceHigh":
        const highPriceList = [...beerListState.data]?.sort(({price:a}, {price:b}) =>  b - a);
        setBeerListState({data: highPriceList});
      break;
      case "priceLow":
        const lowPriceList = [...beerListState.data]?.sort(({price:b}, {price:a}) =>  b - a);
        setBeerListState({data: lowPriceList});
      break;
      case "releaseDate":
        const dateList = [...beerListState.data]?.sort(function(a, b) {
          var c = new Date(a.date);
          var d = new Date(b.date);
          return c-d;
        });
        setBeerListState({data: dateList});
      break;
      default:
    }
  };

  return (
    <>
      <div className="head">
        <h2 align="center">Beer Store</h2>
        <div className="cart">
          <Cart title="Checkout"></Cart>
          <span>0</span>
        </div>
      </div>
      <div className="search">
        <i className="fa fa-search icon"></i>
        <input placeholder="Search" type="text" onChange={(event) => {setSearchInput(event.target.value);}} />
      </div>
      <div className="sorting">
        <section><strong>Sort:</strong></section>
        <section>
          <span onClick={() => handleSort("priceHigh")}>By Highest Price</span>
          <span onClick={() => handleSort("priceLow")}>By Lowest Price</span>
          <span onClick={() => handleSort("releaseDate")}>By Release Date</span>
        </section>
      </div>
      <div className="display">
        <div className="beerCardList">
            {beerList}
        </div>
      </div>
    </>
  )
}
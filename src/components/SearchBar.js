import React from 'react';
import SearchResult from './SearchResult';

export default function SearchView(props) {
  console.log("Searchview" + JSON.stringify(props))

  return (
    <div>
      <div>
      {
        props.restaurants.map(item => <SearchResult key={item.id} {...item} />)
      }
      </div>
    </div>
  )
}
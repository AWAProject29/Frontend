import React from 'react';
import SearchResult from './SearchResult';
import styles from './modules/Search.module.css';

export default function SearchView(props) {
  console.log("Searchview" + JSON.stringify(props))

  return (
    <div>
      <div className={styles.restaurantContainer}>
      {
        props.restaurants.map(item => <SearchResult key={item.id} {...item} />)
      }
      </div>
    </div>
  )
}

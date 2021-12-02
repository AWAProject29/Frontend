import React from 'react';
import styles from './modules/Search.module.css';

export default function SearchResult(props) {
  return (
      <div className = { styles.restaurant } key = {props.id}>
          <div className = { styles.hiddenInfo }>
              <p>Address: {props.address}</p>
              <p>Opening hours: {props.operatinghours}</p>
          </div>
          <div className = { styles.restaurantImage }>
              <img className = { styles.restaurantImage } src = {props.restaurantimage} alt = "" />
          </div>
          <div className = { styles.restaurantName }>
              <h1>{props.restaurantname}</h1>
          </div>
          <div className = { styles.restaurantDetails }>
              <p>{props.restauranttype}</p>
              <p className = { styles.price }>{props.pricelevel}</p>
          </div>
    </div>
  )
}


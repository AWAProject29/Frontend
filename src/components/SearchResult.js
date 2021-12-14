import React from 'react';
import styles from './modules/Search.module.css';
import { useNavigate } from 'react-router-dom'

export default function SearchResult(props) {

  const encodedImage = JSON.stringify(props.restaurantimage);
  const imageString = encodedImage.slice(1, -1);
  
  const navigate = useNavigate();

  const chosenRestaurant = (id) => {
    setTimeout(() => {
      navigate(`/menu/${id}`, { replace: true });
  }, 300);
}

  return (
      <div className = { styles.restaurant } key = {props.idrestaurant} onClick={() => chosenRestaurant(props.idrestaurant) }>
          <div className = { styles.hiddenInfo }>
              <p>Address: {props.address}</p>
              <p>Opening hours: {props.operatinghours}</p>
          </div>
          <div className = { styles.restaurantImage }>
              <img className = { styles.restaurantImage } src = {imageString} alt = "A restaurant" />
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
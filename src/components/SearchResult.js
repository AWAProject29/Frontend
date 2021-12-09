import React from 'react';
import styles from './modules/Search.module.css';
import { useNavigate } from 'react-router-dom'

export default function SearchResult(props) {

  const encodedImage = JSON.stringify(props.restaurantimage);
  // console.log("This is encodedImage" + encodedImage);

  const imageString = encodedImage.slice(1, -1);
  // console.log("This is imageString: " + imageString);

  const navigate = useNavigate();

  const chosenRestaurant = (id) => {
    setTimeout(() => {

      // console.log(props);

      //if logged in as a manager, it takes you to menu edit page

      //if logged in as a customer, it takes you to restaurant menu

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
              <img className = { styles.restaurantImage } src = {imageString} alt = "RESTAURANT HERE" />
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
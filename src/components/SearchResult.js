import React from 'react';
import styles from './modules/Search.module.css';
import { Link, useNavigate } from 'react-router-dom'

export default function SearchResult(props) {

  const imageBuffer = JSON.stringify(props.restaurantimage);
  console.log("This is imageBuffer" + imageBuffer);

  const longtexttest = imageBuffer.slice(1, -1);
  console.log("This is longtexttest: " + longtexttest);

  const navigate = useNavigate();

  const chosenRestaurant = () => {
    setTimeout(() => {

      //if logged in as a manager, it takes you to menu edit page

      //if logged in as a customer, it takes you to restaurant menu

      navigate("/menu", { replace: true });

  }, 300);
}   

  // const base64string = Buffer.from(imageBuffer).toString();
  // console.log("This is base64string" + base64string);
  // const newbase64string = base64string.slice(25, -2);
  // console.log("This is newbase64string" + newbase64string);
  // const myNewArray=newbase64string.split(',');
  // console.log("This is myNewArray" + myNewArray);
  // const finalRestaurantImage = new Buffer.from(myNewArray).toString();
  // console.log("This is finalRestaurantImage" + finalRestaurantImage);

  return (
      <div className = { styles.restaurant } key = {props.id} onClick={ chosenRestaurant }>
          <div className = { styles.hiddenInfo }>
              <p>Address: {props.address}</p>
              <p>Opening hours: {props.operatinghours}</p>
          </div>
          <div className = { styles.restaurantImage }>
              <img className = { styles.restaurantImage } src = {longtexttest} alt = "RESTAURANT HERE" />
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


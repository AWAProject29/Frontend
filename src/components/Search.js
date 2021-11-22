import React from 'react';
import styles from './modules/Search.module.css';
import { restaurants }  from './data/restaurant.js';
import food from './images/food.gif';
import buffet from './images/buffet.png';
import fastfood from './images/fastfood.png';
import fastcasual from './images/fastcasual.png';
import casualdining from './images/casualdining.png';
import finedining from './images/finedining.png';

export default function Search() {
    return (
        <div className = { styles.pageContainer }>
            <div className = { styles.pageBanner }>
                <h1 className = {  styles.searchHeader }>Let us help you on your quest for food!</h1>
                <img className = { styles.food } src = { food } alt=''/>
            </div>
            <div className = { styles.searchContainer }>
                <form action = "/" method = "get">
                    <input type = "text" className = { styles.searchBar } placeholder = "Search for restaurants"/>
                </form>
            </div>
            <div className = { styles.categoryContainer }>
                <button className = { styles.categories }><img src = { buffet } alt=''/>Buffet</button>
                <button className = { styles.categories }><img src = { fastfood } alt=''/>Fast Food</button>
                <button className = { styles.categories }><img src = { fastcasual } alt=''/>Fast Casual</button>
                <button className = { styles.categories }><img src = { casualdining } alt=''/>Casual Dining</button>
                <button className = { styles.categories }><img src = { finedining } alt=''/>Fine Dining</button>
            </div>
            <div className = { styles.restaurantContainer }>
            {
                restaurants.map((data) => (
                    <div className = { styles.restaurant } key = { data.restaurantID }>
                        <div className = { styles.restaurantImage }>
                            <img className = { styles.restaurantImage } src = { data.image } alt = "logo" />
                        </div>
                        <div className = { styles.restaurantName }>
                            <h1>{ data.name }</h1>
                        </div>
                        <div className = { styles.restaurantDetails}>
                            <p>{ data.type }</p>
                            <p className = { styles.price }>{ data.price }</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
};
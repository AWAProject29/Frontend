import React from 'react';
import styles from './modules/Search.module.css';
// import { restaurants }  from './data/restaurant.js';
import food from './images/food.gif';
import buffet from './images/buffet.png';
import fastfood from './images/fastfood.png';
import fastcasual from './images/fastcasual.png';
import casualdining from './images/casualdining.png';
import finedining from './images/finedining.png';
import axios from 'axios';
import Constants from '../Constants.json'





// const filterFunction() => {
    
// }


class Search extends React.Component {
    constructor(props) {
        super(props)
              
        this.state = {
          restaurants: []
        };
    }

        componentDidMount() {
            axios.get(Constants.API_ADDRESS + '/restaurant')
                .then(response => {
                    console.log(response);
                    this.setState({ restaurants: response.data })
                })
                .catch(error => {
                    console.log(error);
                    this.setState({errorMsg: 'Error retreiving data'})
                })
        }


        render() {
        const { restaurants, errorMsg } = this.state
        return (
            <div className={styles.pageContainer}>
                <div className={styles.pageBanner}>
                    <h1 className={styles.searchHeader}>Let us help you on your quest for food!</h1>
                    <img className={styles.food} src={food} alt='' />
                </div>
                <div className={styles.searchContainer}>
                    <form action="/" method="get">
                        <input type="text" className={styles.searchBar} placeholder="Search for restaurants" />
                    </form>
                </div>
                <div className={styles.categoryContainer}>
                    <button className={styles.categories}><img src={buffet} alt='' />Buffet</button>
                    <button className={styles.categories}><img src={fastfood} alt='' />Fast Food</button>
                    <button className={styles.categories}><img src={fastcasual} alt='' />Fast Casual</button>
                    <button className={styles.categories}><img src={casualdining} alt='' />Casual Dining</button>
                    <button className={styles.categories}><img src={finedining} alt='' />Fine Dining</button>
                </div>
                <div className={styles.restaurantContainer}>
                   {
                        restaurants.length ?
                        restaurants.map(restaurant => 
                        <div className = { styles.restaurant } key = {restaurant.id}>
                            <div className = { styles.hiddenInfo }>
                                <p>{restaurant.operatinghours}</p>
                                <p>{restaurant.address}</p>
                            </div>
                            <div className = { styles.restaurantImage }>
                                <img className = { styles.restaurantImage } src = {restaurant.restaurantimage} alt = "" />
                            </div>
                            <div className = { styles.restaurantName }>
                                <h1>{restaurant.restaurantname}</h1>
                            </div>
                            <div className = { styles.restaurantDetails }>
                                <p>{restaurant.restauranttype}</p>
                                <p className = { styles.price }>{restaurant.pricelevel}</p>
                            </div>
                            {/*{restaurant.restaurantdescription}*/}
                        </div>) :
                        null
                   }
                   { errorMsg ? <div>{errorMsg}</div> : null }
                </div>

            </div>
        );
    }

}

export default Search
